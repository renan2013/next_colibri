import Container from "../components/Container";
import Saludo from "../components/Saludo";

const Equipo = () => (

  <Container>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Nuestro Equipo</h1>
      <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
          <img src="https://lh3.googleusercontent.com/-PNARvyl6Xm0/VWW37gyxezI/AAAAAAAAUec/bT352OFBCuw/s700/historia-steve-jobs.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="https://lh3.googleusercontent.com/-PNARvyl6Xm0/VWW37gyxezI/AAAAAAAAUec/bT352OFBCuw/s700/historia-steve-jobs.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="https://lh3.googleusercontent.com/-PNARvyl6Xm0/VWW37gyxezI/AAAAAAAAUec/bT352OFBCuw/s700/historia-steve-jobs.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>

    </div>
    <br></br><br></br>
    <Saludo />
  </Container>
);

export default Equipo;
