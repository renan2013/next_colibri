import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand">Factura Colibri</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Inicio</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/equipo">
              <a className="nav-link">Nuestro Equipo</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/planes">
              <a className="nav-link">Planes</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/video">
              <a className="nav-link">Video</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/formulario">
              <a className="nav-link">Formulario</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/quienes_somos">
              <a className="nav-link">Quienes Somos</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
