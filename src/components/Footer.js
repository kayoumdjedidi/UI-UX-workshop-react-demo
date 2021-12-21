import React, {useState} from 'react'
import {Form, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer>
      <Row className='top'>
        <Col md={2}>
          <h2>Subscribe to our newsletter</h2>
          <Row>
            <Form.Control
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            ></Form.Control>
            <img />
          </Row>
        </Col>
        <Col md={2}>
          <h2>Information</h2>
          <Link to='/about-us'>About Us</Link> <br />
          <Link to='/information'>Information</Link> <br />
          <Link to='/privacy-policy'>Privacy Policy</Link> <br />
          <Link to='/terms-conditions'>Terms &amp; Conditions</Link> <br />
        </Col>
        <Col md={2}>
          <h2>Services</h2>
          <Link to='/about-us'>About Us</Link> <br />
          <Link to='/information'>Information</Link> <br />
          <Link to='/privacy-policy'>Privacy Policy</Link> <br />
          <Link to='/terms-conditions'>Terms &amp; Conditions</Link> <br />
        </Col>
        <Col md={2}>
          <h2>My Account</h2>
          <Link to='/about-us'>About Us</Link> <br />
          <Link to='/information'>Information</Link> <br />
          <Link to='/privacy-policy'>Privacy Policy</Link> <br />
          <Link to='/terms-conditions'>Terms &amp; Conditions</Link> <br />
        </Col>
        <Col md={2}>
          <h2>Our Offers</h2>
          <Link to='/about-us'>About Us</Link> <br />
          <Link to='/information'>Information</Link> <br />
          <Link to='/privacy-policy'>Privacy Policy</Link> <br />
          <Link to='/terms-conditions'>Terms &amp; Conditions</Link> <br />
        </Col>
        <Col md={2}>
          <img /> <p>+216 123456789</p>
          <img /> <p className='email'>Email@email.com</p>
          <img /> <p>00 Rue exemple</p>
        </Col>
      </Row>
      <hr />
      <div className='bottom'>
        <Row md={3}>
          <img />
          <img />
          <img />
        </Row>
        <Row md={6}>
          Ecommerce website 2021, all rights reserved
        </Row>
        <Row md={3}>
          <img src='/images/brands.png' alt='cards' />
        </Row>
      </div>
    </footer>
  )
}

export default Footer
