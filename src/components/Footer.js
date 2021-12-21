import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer>
      <Row className='top'>
        <Col md={2}>
          <h5>Subscribe to our newsletter</h5>
          <Row>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
            <img src='/images/submit.png' />
          </Row>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
        </Col>
        <Col md={2}>
          <h4>Information</h4>
          <Link to='/about-us'>About Us</Link> <br />
          <Link to='/information'>Information</Link> <br />
          <Link to='/privacy-policy'>Privacy Policy</Link> <br />
          <Link to='/terms-conditions'>Terms &amp; Conditions</Link> <br />
        </Col>
        <Col md={2}>
          <h4>Services</h4>
          <Link to='/about-us'>About Us</Link> <br />
          <Link to='/information'>Information</Link> <br />
          <Link to='/privacy-policy'>Privacy Policy</Link> <br />
          <Link to='/terms-conditions'>Terms &amp; Conditions</Link> <br />
        </Col>
        <Col md={2}>
          <h4>My Account</h4>
          <Link to='/about-us'>About Us</Link> <br />
          <Link to='/information'>Information</Link> <br />
          <Link to='/privacy-policy'>Privacy Policy</Link> <br />
          <Link to='/terms-conditions'>Terms &amp; Conditions</Link> <br />
        </Col>
        <Col md={2}>
          <h4>Our Offers</h4>
          <Link to='/about-us'>About Us</Link> <br />
          <Link to='/information'>Information</Link> <br />
          <Link to='/privacy-policy'>Privacy Policy</Link> <br />
          <Link to='/terms-conditions'>Terms &amp; Conditions</Link> <br />
        </Col>
        <Col md={2} className='info'>
          <Row>
            <img src='/images/call.png' style={{width: '10%', height: '10%', marginRight: '.5rem'}} /> <h5>+216 123456789</h5>
          </Row>
          <Row>
            <img src='/images/email.png' style={{width: '10%', height: '10%', marginRight: '.5rem'}} /> <h5 className='email'>Email@email.com</h5>
          </Row>
          <Row>
            <img src='/images/location.png' style={{width: '10%', height: '10%', marginRight: '.5rem'}} /> <h5>00 Rue exemple</h5>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row className='bottom'>
        <div className='icons'>
          <img src='/images/facebook.png' />
          <img src='/images/twitter.png' />
          <img src='/images/instagram.png' />
        </div>
        <div>
          Ecommerce website 2021, all rights reserved
        </div>
        <div>
          <img src='/images/brands.png' alt='cards' />
        </div>
      </Row>
    </footer>
  )
}

export default Footer
