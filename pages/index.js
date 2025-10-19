import Header from '../components/Header'
import Footer from '../components/Footer'
import QuoteForm from '../components/QuoteForm'

export default function Home(){
  return (
    <>
      <Header/>
      <main className="container">
        <section className="hero">
          <div className="left">
            <h1>Diseño, automatización y simulación que impulsan tu ingeniería</h1>
            <p className="small-muted">Soluciones integrales para manufactura, aeroespacial, automotriz y energía.</p>
            <a href="#cotiza" className="cta">Solicita tu cotización</a>
          </div>
          <div className="right" style={{flex:1}}>
            <div className="card">
              <h3>Servicios destacados</h3>
              <div className="cards">
                <div className="card">CAD / Diseño 3D</div>
                <div className="card">Simulación FEA / CFD</div>
                <div className="card">Automatización PLC</div>
                <div className="card">IoT y electrónica</div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-grid">
          <h2>Qué hacemos</h2>
          <div className="cards">
            <div className="card">
              <h4>Diseño & Prototipado</h4>
              <p>Modelado CAD, optimización de piezas y prototipado rápido.</p>
            </div>
            <div className="card">
              <h4>Simulación</h4>
              <p>CFD, análisis térmico y estructural para validar diseños.</p>
            </div>
            <div className="card">
              <h4>Automatización</h4>
              <p>Programación de PLC, SCADA e integración de sistemas.</p>
            </div>
            <div className="card">
              <h4>Capacitación</h4>
              <p>Cursos a medida en software de ingeniería y control industrial.</p>
            </div>
          </div>
        </section>

        <section id="cotiza" style={{marginTop:28}}>
          <h2>Solicita tu cotización</h2>
          <div className="card">
            <QuoteForm/>
          </div>
        </section>

      </main>
      <Footer/>
    </>
  )
}
