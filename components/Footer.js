export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} Helios Engineering Center — Todos los derechos reservados.
        <div style={{marginTop:8,fontSize:13}}>Querétaro, México · contacto@heliosengineering.com</div>
      </div>
    </footer>
  )
}
