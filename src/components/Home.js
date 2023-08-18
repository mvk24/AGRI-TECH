import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container " id='home'>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/b1.jpg" alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <h3>Welcome to Agri-Tech</h3>
            <p>Revolutionizing agriculture with technology</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/b2.jpg" alt="Second slide" />
          <Carousel.Caption className="carousel-caption">
            <h3>Enhance Your Farming Practices</h3>
            <p>Get personalized crop and fertilizer recommendations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/b3.jpg" alt="Third slide" />
          <Carousel.Caption className="carousel-caption">
            <h3>Optimize Crop Yields</h3>
            <p>Empowering farmers for better cultivation results</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


{/* ----------------------------------------About Us-------------------------------- */}

<section className="about-us" id="about">
    <div className="container">
          <div className='head text-center'>About Us</div><br/>
          <div className='text-center'>
          <p className="about-text">
          Welcome to our Agri-Tech platform, where we're committed to revolutionizing agriculture with technology. Our mission is to provide farmers with the tools and insights they need to achieve higher yields and better results in their cultivation practices.
          Our platform offers a range of services, including crop recommendation and fertilizer recommendation. We understand the unique requirements of different crops and growing conditions, and we provide tailored recommendations to help you make informed decisions.
          With our user-friendly interface and advanced algorithms, you can input key environmental and soil parameters, and we'll provide you with the best crop choices and fertilizer recommendations to optimize your farming outcomes.
        </p>
        </div>

      <Container className="mt-5">
        <Row>
          <Col md={4} className="mb-4">
            <Card className="service-card">
              <Card.Img variant="top" src="https://plantura.garden/uk/wp-content/uploads/sites/2/2021/04/moneymaker-tomato.jpg" />
              <Card.Body>
                <Card.Title>Tomato</Card.Title>
                <Card.Text>
                Discover optimal growing conditions and cultivation practices for healthy and flavorful tomato crops.
                </Card.Text>
                <Button variant="primary">Know More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="service-card">
              <Card.Img variant="top" src="https://media.istockphoto.com/id/165646486/photo/rice-harvest.jpg?s=612x612&w=0&k=20&c=CMdTN8zAKiOzBVacLL9SDLv0DJVylKgjwoNDZ8Byy2o=" />
              <Card.Body>
                <Card.Title>Rice</Card.Title>
                <Card.Text>
                Cultivate thriving rice crops with essential insights into water management and soil conditions.
                </Card.Text>
                <Button variant="primary">Know More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="service-card">
              <Card.Img variant="top" src="https://media.istockphoto.com/id/1251268131/photo/senior-man-with-bunch-of-freshly-harvested-carrots.jpg?s=612x612&w=0&k=20&c=N-xOciVFINYbPDf0FzV1tjwtfnc7gYEMW2TpW8h3bCg=" />
              <Card.Body>
                <Card.Title>Carrots</Card.Title>
                <Card.Text>
                Learn how to grow vibrant and nutritious carrot crops with expert guidance on soil, water, and care.
                </Card.Text>
                <Button variant="primary">Know More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
     </div>
  </section>



{/* ------------------------------Services------------------------------------ */}
<br/>
  <section className="services pt-5" id="ser">
    <div className="container">
        <div className='head text-center'>Our Services</div><br/>
        <Row>
          <Col md={6} className="mb-4">
            <Card className="service-card">
              <Card.Img variant="top" src="https://1.bp.blogspot.com/-HmqApqMJ_cc/XQvkp0_QUpI/AAAAAAAAAQc/cxCPibnJ5g4k_EjZWmTvr_wDAF7lCa8uQCLcBGAs/s1600/Tractor%2B1.JPG" />
              <Card.Body>
                <Card.Title>Crop Recommendation</Card.Title>
                <Card.Text>
                  Get personalized crop recommendations based on your specific farming conditions.
                </Card.Text>
                <Button variant="primary" onClick={(e) => {
            e.preventDefault();
            window.location.href='/crop-recommend';
            }}>Try It</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="service-card">
              <Card.Img variant="top" src="https://images.pexels.com/photos/6874481/pexels-photo-6874481.jpeg?cs=srgb&dl=pexels-balazs-simon-6874481.jpg&fm=jpg" />
              <Card.Body>
                <Card.Title>Fertilizer Recommendation</Card.Title>
                <Card.Text>
                  Receive optimal fertilizer recommendations to enhance crop yield and health.
                </Card.Text>
                <Button variant="primary" onClick={(e) => {
            e.preventDefault();
            window.location.href='/fertilizer';
            }}>Try It</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </div>
      </section>



  {/* ------------------------Footer----------------- */}

  <footer class="footer bg-dark text-center text-white "><br />
    <h6>Copyright © 2010- 2023 Palle® Technologies.</h6>
    <div class="container">
    {/* <!-- Section: Social media --> */}
    <section>
      {/* <!-- Facebook --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/palletech/" role="button"><i class="fab fa-facebook"></i></a>
      {/* <!-- Linkedin --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/company/palle-technologies/mycompany/" role="button"><i class="fab fa-linkedin-in"></i></a>
      {/* <!-- Twitter --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/palletechnology" role="button"><i class="fab fa-twitter"></i></a>
      <br/><br/><br/>
    </section>
  
    </div>
  </footer>



  </div>
  );
};

export default Home;
