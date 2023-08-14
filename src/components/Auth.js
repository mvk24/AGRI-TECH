import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import '../styles/Auth.css';

const Auth = ({ show, handleClose, isSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Add new state for confirmPassword

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isSignUp ? 'Sign Up' : 'Login'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="auth-form-group" controlId="email">
            <Form.Label className="auth-form-label">Email address</Form.Label>
            <Form.Control
              className="auth-form-input"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="auth-form-group" controlId="password">
            <Form.Label className="auth-form-label">Password</Form.Label>
            <Form.Control
              className="auth-form-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {/* Add Confirm Password field for SignUp */}
          {isSignUp && (
            <Form.Group className="auth-form-group" controlId="confirmPassword">
              <Form.Label className="auth-form-label">Confirm Password</Form.Label>
              <Form.Control
                className="auth-form-input"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
          )}
          <Button className="auth-form-submit btn-dark" type="submit">
            {isSignUp ? 'Sign Up' : 'Login'}
          </Button><br/><br/>
          <p>
            {isSignUp
              ? 'Already have an account?'
              : "Don't have an account yet?"}
            <span className="auth-link" onClick={handleClose}>
              Close
            </span>
          </p>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Auth;
