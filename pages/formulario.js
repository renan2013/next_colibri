
import Container from "../components/Container";


const About = () => (

  <Container>
    <div className="row" id="formulario">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Registro a Colibri</h1>
      <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
    </div>
     
      
      <div className="col-md-6" id="logo_formulario"><img src="/images/logo_final.svg" width="350"/></div>
      <div className="col-md-6">
        
        <form action method="post">
          <div className="preview text-center">
            
            <span className="Error" />
          </div>
          <div className="form-group">
            <label>Nombre Completo:</label>
            <input className="form-control" type="text" name="fullname" required placeholder="Enter Your Full Name" />
            <span className="Error" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input className="form-control" type="email" name="email" required placeholder="Enter Your Email" />
            <span className="Error" />
          </div>
          <div className="form-group">
            <label>Celular:</label>
            <input className="form-control" type="password" name="password" required placeholder="Enter Password" />
            <span className="Error" />
          </div>
         <p>Nos comunicaremos lo más pronto posible con usted</p>
          <div className="form-group">
            <input className="btn btn-primary btn-block" type="submit" defaultValue="Submit" />
          </div>
        </form>
        </div>
      </div>
      <br></br>
  </Container>
);

export default About;
