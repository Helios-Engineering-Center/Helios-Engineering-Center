import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'
import { stringify } from 'csv-stringify/sync'

const quotesFile = path.resolve('./data/quotes.csv')

function ensureDataFile(){
  if(!fs.existsSync(path.dirname(quotesFile))) fs.mkdirSync(path.dirname(quotesFile), { recursive:true })
  if(!fs.existsSync(quotesFile)) fs.writeFileSync(quotesFile, 'date,name,company,email,phone,service,budget,message\n')
}

export default async function handler(req,res){
  if(req.method === 'GET'){
    // admin listing
    const { admin_token } = req.query
    if(admin_token !== process.env.ADMIN_TOKEN) return res.status(401).json({ error:'Unauthorized' })
    ensureDataFile()
    const csv = fs.readFileSync(quotesFile,'utf8')
    const lines = csv.trim().split('\n').slice(1)
    const quotes = lines.filter(Boolean).map(line=>{
      const parts = line.split(',')
      // naive parsing — fields are quoted by csv-stringify; for admin use this is sufficient
      const [date,name,company,email,phone,service,budget,message] = parts
      return { date,name,company,email,phone,service,budget,message }
    })
    return res.status(200).json({ quotes })
  }

  if(req.method !== 'POST') return res.status(405).json({ error:'Method not allowed' })

  const { name, company, email, phone, service, budget, message } = req.body || {}
  if(!name || !email || !service) return res.status(400).json({ error:'Faltan campos requeridos' })

  const date = new Date().toISOString()
  ensureDataFile()

  // Append to CSV
  const row = stringify([[date,name,company||'',email,phone||'',service,budget||'',(message||'').replace(/\n/g,' ')]] , { quoted: true })
  fs.appendFileSync(quotesFile, row)

  // Send email via SMTP
  try{
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: (process.env.SMTP_SECURE==='true') || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    const mailOptions = {
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.TO_EMAIL || process.env.FROM_EMAIL,
      subject: `Nueva solicitud de cotización - Helios (${service})`,
      text: `
Fecha: ${date}
Nombre: ${name}
Empresa: ${company || '-'}
Email: ${email}
Tel: ${phone || '-'}
Servicio: ${service}
Presupuesto: ${budget || '-'}
Mensaje:
${message || '-'}
      `
    }

    await transporter.sendMail(mailOptions)

  }catch(err){
    console.error('Error enviando correo:', err)
    // No abortamos: la solicitud queda guardada en CSV
    return res.status(200).json({ ok: true, warning: 'Guardado localmente, fallo al enviar email' })
  }

  return res.status(200).json({ ok: true, msg:'Solicitud recibida' })
}
