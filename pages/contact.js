import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <>
      <Header/>
      <main className="container">
        <h1>Contacto</h1>
        <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:20}}>
          <div>
            <p>Tel: +52 1 442 XXX XXXX</p>
            <p>Email: contacto@heliosengineering.com</p>
            <p>Dirección: Querétaro, México</p>
            <h3>Escríbenos</h3>
            <p>También puedes solicitar cotización desde la página principal.</p>
          </div>
          <div className="card">
            <strong>Horario</strong>
            <p>Lunes a Viernes 9:00 — 18:00</p>
            <a className="cta" href="https://wa.me/521442XXXXXXX">Abrir WhatsApp</a>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
