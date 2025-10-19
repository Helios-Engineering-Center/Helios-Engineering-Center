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
            <p>Tel: +52 6621384689 </p>
            <p>Email: HeliosEngineeringCenter@gmail.com</p>
            <p>Dirección: Hermosillo, México</p>
            <h3>Escríbenos</h3>
            <p>También puedes solicitar cotización desde la página principal.</p>
          </div>
          <div className="card">
            <strong>Horario</strong>
            <p>Lunes a Viernes 9:00 — 18:00</p>
            <a className="cta" href="https://wa.me/526621384689">Abrir WhatsApp</a>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
