import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Admin(){
  const [token,setToken]=useState('')
  const [ok,setOk]=useState(false)
  const [quotes,setQuotes]=useState([])

  async function load(){
    if(!token) return alert('Ingresa token de admin')
    const res = await fetch('/api/quote?admin_token='+encodeURIComponent(token))
    if(res.ok){ const data = await res.json(); setQuotes(data.quotes); setOk(true) }
    else { setOk(false); alert('Token inválido o no hay datos') }
  }

  return (
    <>
      <Header/>
      <main className="container">
        <h1>Panel administrativo</h1>
        <div style={{display:'flex',gap:10,alignItems:'center'}}>
          <input placeholder="ADMIN_TOKEN" value={token} onChange={e=>setToken(e.target.value)} />
          <button className="primary" onClick={load}>Cargar solicitudes</button>
        </div>

        {ok && (
          <div style={{marginTop:18}}>
            <table className="table">
              <thead><tr><th>#</th><th>Nombre</th><th>Empresa</th><th>Email</th><th>Servicio</th><th>Presupuesto</th><th>Mensaje</th><th>Fecha</th></tr></thead>
              <tbody>
                {quotes.map((q,i)=>(
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{q.name}</td>
                    <td>{q.company}</td>
                    <td>{q.email}</td>
                    <td>{q.service}</td>
                    <td>{q.budget}</td>
                    <td style={{maxWidth:300}}>{q.message}</td>
                    <td>{q.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer/>
    </>
  )
}
