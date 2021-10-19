const footer = () => {
  return (
    <footer className="bg-primary text-center text-lg-start text-white">
      {/* Grid container */}
      <div className="container p-4">
        {/*Grid row*/}
        <div className="row my-4">
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: '150px', height: '150px' }}>
              <img src="/images/logo_final.svg" height={115} alt="" loading="lazy" />
            </div>
            <h2 className="text-center">FACTURA COLIBRI</h2>
            <ul className="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <a className="text-white px-2" href="#!">
                  <i className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a className="text-white px-2" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a className="text-white ps-2" href="#!">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Factura Colibri</h5>
            <div className="Linea"><hr></hr></div>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Quienes Somos</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Nuestros Beneficios</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Preguntas frecuentes</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Casos de Exitos</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Registro</a>
              </li>

            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Servicios</h5>
            <div className="Linea"><hr></hr></div>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Planes Personales</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Planes Pymes</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Planes Empresariales</a>
              </li>

            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contacto</h5>
            <div className="Linea"><hr></hr></div>
            <ul className="list-unstyled">
              <li>
                <p><i className="fas fa-map-marker-alt pe-2" />San José, Puriscal</p>
              </li>
              <li>
                <p><i className="fas fa-phone pe-2" />+ 01 234 567 89</p>
              </li>
              <li>
                <p><i className="fas fa-envelope pe-2 mb-0" />info@grupodivisoft.com</p>
              </li>
              <li>
                <p><i className="fas fa-envelope pe-2 mb-0" />2021</p>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <img src="/images/logo_divisoft.svg" height={55} alt="" loading="lazy" /><br></br>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      
        <a className="text-white" href="">Diseños Visionarios de Software</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default footer;