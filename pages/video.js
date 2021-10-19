import Container from "../components/Container";

const Video = () => {
  return (
    <Container>
      <div className="row">
            <div className="col-md-4">
                  Facturero Colibrí
            </div>
            <div className="col-md-8">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
            </div>
      </div>
      <br></br>
    </Container>
  );
}

export default Video;