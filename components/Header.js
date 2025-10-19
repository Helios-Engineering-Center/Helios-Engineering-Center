import Link from 'next/link'
export default function Header(){
  return (
    <header className="header">
      <div className="container">
        <div className="brand">
          <img src="/logo.svg" alt="Helios logo"/>
          <div>
            <div style={{fontWeight:800}}>Helios Engineering Center</div>
            <div style={{fontSize:12}} className="small-muted">Diseño • Simulación • Automatización</div>
          </div>
          <nav style={{marginLeft:'auto'}}>
            <Link href="/"><a>Inicio</a></Link>
            <Link href="/services"><a>Servicios</a></Link>
            <Link href="/projects"><a>Proyectos</a></Link>
            <Link href="/contact"><a>Contacto</a></Link>
            <Link href="/#cotiza"><a style={{marginLeft:12}} className="cta">Solicita cotización</a></Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
