import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import '../styles/CropRecommend.css';

const CropRecommend = () => {
  const [formData, setFormData] = useState({
    Nitrogen: '',
    Phosphorus: '',
    Potassium: '',
    Temperature: '',
    Humidity: '',
    pH: '',
    Rainfall: '',
  });

  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/predict', formData);
      if (response.data.result) {
        setResult(response.data.result);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='back'>
    <Container className="crop-recommend">
      <h1 className="text-dark text-center">Crop Recommendation</h1><br/>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={4}>
            <Form.Group controlId="Nitrogen">
              <Form.Label>Nitrogen (N)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Nitrogen value"
                name="Nitrogen"
                value={formData.Nitrogen}
                onChange={handleInputChange}
                required
                step="0.01"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="Phosphorus">
              <Form.Label>Phosphorus (P)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Phosphorus value"
                name="Phosphorus"
                value={formData.Phosphorus}
                onChange={handleInputChange}
                required
                step="0.01"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="Potassium">
              <Form.Label>Potassium (K)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Potassium value"
                name="Potassium"
                value={formData.Potassium}
                onChange={handleInputChange}
                required
                step="0.01"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Form.Group controlId="Temperature">
              <Form.Label>Temperature (°C)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Temperature value"
                name="Temperature"
                value={formData.Temperature}
                onChange={handleInputChange}
                required
                step="0.01"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="Humidity">
              <Form.Label>Humidity (%)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Humidity value"
                name="Humidity"
                value={formData.Humidity}
                onChange={handleInputChange}
                required
                step="0.01"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Form.Group controlId="pH">
              <Form.Label>pH</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter pH value"
                name="pH"
                value={formData.pH}
                onChange={handleInputChange}
                required
                step="0.01"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="Rainfall">
              <Form.Label>Rainfall (mm)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Rainfall value"
                name="Rainfall"
                value={formData.Rainfall}
                onChange={handleInputChange}
                required
                step="0.01"
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center mt-2">
          <Button className="submit-btn bg-dark" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      {result && (
        <Card className="result-card text-center mt-4">
          <Card.Body>
            <Card.Title>Recommended Crop</Card.Title>
            <Card.Text className="bg-success">{result}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>



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

export default CropRecommend;
