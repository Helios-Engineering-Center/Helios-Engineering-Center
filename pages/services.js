import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services(){
  return (
    <>
      <Header/>
      <main className="container">
        <h1>Servicios</h1>
        <div className="cards">
          <div className="card"><h3>Diseño CAD/CAE</h3><p>Modelado y documentación técnica para fabricación.</p></div>
          <div className="card"><h3>Simulación</h3><p>CFD, FEA y análisis térmico para validar y optimizar diseños.</p></div>
          <div className="card"><h3>Automatización</h3><p>Programación PLC, integración y control de procesos.</p></div>
          <div className="card"><h3>IoT</h3><p>Desarrollo de prototipos electrónicos y soluciones conectadas.</p></div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
