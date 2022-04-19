import React from 'react'
import { Card, Col, Container, Row, Stack } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import splash1 from '../images/splash-1.svg'
import splash2 from '../images/splash-2.svg'
import splash3 from '../images/splash-3.svg'
import githublogo from '../images/github-logo.jpeg'
import landingPageImg from '../images/landing-page.jpg'

const LandingPage = (props) => {
  return (
    <div className='splash-page'>
      <Container fluid className='splash-big-container'>
        <Row>
          <Col>
            <img src={landingPageImg} className='landing-image' alt='multiple cubes with social media logos' />
          </Col>
        </Row>
      </Container>

      <Container fluid className='splash-page-container'>
        <Row>
          <Col>
            <Card bg='dark' border='primary' className='secondary-card'>
              <Card.Title>React App</Card.Title>
              <Card.Img variant='top' src={splash1} className='card-images' alt='pc with code open' />
              <Card.Subtitle>React + Bootstrap</Card.Subtitle>
              <Card.Body>
                Welcome to my React Social Media App. This is a mock website soley made to test my own skills. You can make an account but it will not be saved after you leave. Next step is to learn MongoDB and Docker to help maintain a real database.
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg='dark' border='info' className='secondary-card'>
              <Card.Title>Front End Technologies</Card.Title>
              <Card.Img variant='top' src={splash2} className='card-images' alt='phone showing app development' />
              <Card.Subtitle>Reusable Components</Card.Subtitle>
              <Card.Body>
                Built with React,React-Bootstrap,React-Router-Dom,Formik and more.
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg='dark' border='danger' className='secondary-card'>
              <Card.Title>Web Dev Simplified</Card.Title>
              <Card.Img variant='top' src={splash3} className='card-images' alt='multiple pc displays for programming' />
              <Card.Subtitle>Learning Frameworks</Card.Subtitle>
              <Card.Body>
                Testing new technologies.
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg='dark' border='warning' className='secondary-card'>
              <Card.Title>Check out my Github!</Card.Title>
              <Card.Img variant='top' src={githublogo} className='card-images' alt='GitHub logo' />
              <Card.Subtitle>More Projects</Card.Subtitle>
              <Card.Body>
                <a href='https://github.com/RyanZmu' target='_blank' rel='noreferrer'>Github Repo!</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage
