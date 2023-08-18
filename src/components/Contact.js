import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='mt-5'>
    <Container className="contact-container">
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5" // Set the number of rows for the textarea
          />
        </Form.Group>
        <div class="form text-center">
		      <button  class="btn btn-dark">Submit</button>
	      </div>
      </Form>
    </Container>

    {/*---------------------------- footer------------------------------ */}
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


export default Contact;


