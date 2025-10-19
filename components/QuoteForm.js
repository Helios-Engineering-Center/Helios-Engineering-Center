import { useState } from 'react'

export default function QuoteForm(){
  const [form, setForm] = useState({
    name:'', company:'', email:'', phone:'', service:'', budget:'', message:''
  })
  const [loading,setLoading]=useState(false)
  const [ok,setOk]=useState(null)
  function onChange(e){ setForm({...form,[e.target.name]:e.target.value}) }
  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    setOk(null)
    try{
      const res = await fetch('/api/quote', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(res.ok){ setOk({type:'success',msg:'Solicitud enviada. Revisa tu correo.'}); setForm({name:'',company:'',email:'',phone:'',service:'',budget:'',message:''})}
      else setOk({type:'error',msg:data?.error || 'Error al enviar.'})
    }catch(err){ setOk({type:'error',msg:err.message}) }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} style={{maxWidth:760}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
        <input name="name" value={form.name} onChange={onChange} placeholder="Nombre completo" required/>
        <input name="company" value={form.company} onChange={onChange} placeholder="Empresa (opcional)"/>
        <input name="email" value={form.email} onChange={onChange} placeholder="Correo electrónico" type="email" required/>
        <input name="phone" value={form.phone} onChange={onChange} placeholder="Teléfono/WhatsApp"/>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:10}}>
        <select name="service" value={form.service} onChange={onChange} required>
          <option value="">Selecciona servicio</option>
          <option>Diseño CAD/CAE</option>
          <option>Simulación (FEA / CFD)</option>
          <option>Automatización / PLC</option>
          <option>IoT y electrónica</option>
          <option>Capacitación</option>
          <option>Otro</option>
        </select>
        <input name="budget" value={form.budget} onChange={onChange} placeholder="Presupuesto estimado (MXN)"/>
      </div>

      <textarea name="message" value={form.message} onChange={onChange} placeholder="Describe tu proyecto" rows="6" style={{marginTop:10}}/>

      <div style={{display:'flex',gap:10,marginTop:10,alignItems:'center'}}>
        <button className="primary" type="submit" disabled={loading}>{loading ? 'Enviando...' : 'Enviar solicitud'}</button>
        {ok && <div style={{color: ok.type==='success'?'green':'#b00020'}}>{ok.msg}</div>}
      </div>
      <div style={{marginTop:8,fontSize:13}} className="small-muted">Al enviar, recibirás un correo de confirmación con el número de solicitud.</div>
    </form>
  )
}
