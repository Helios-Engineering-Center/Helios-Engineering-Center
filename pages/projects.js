import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Projects(){
  return (
    <>
      <Header/>
      <main className="container">
        <h1>Proyectos</h1>
        <div className="cards">
          <div className="card">Proyecto A - Diseño estructural</div>
          <div className="card">Proyecto B - Sistema de control</div>
          <div className="card">Proyecto C - Simulación CFD</div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
