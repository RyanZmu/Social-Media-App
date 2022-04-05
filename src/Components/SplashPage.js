import React from 'react'
import { Card, Col, Container, Row, Stack } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import splash1 from '../images/splash-1.svg'
import splash2 from '../images/splash-2.svg'
import splash3 from '../images/splash-3.svg'
import githublogo from '../images/github-logo.jpeg'
import landingPage from '../images/landing-page.jpg'

const SplashPage = (props) => {

    return (
        <div className='splash-page'>
    
        <Stack direection='horizontal' className='splash-stacked'>
        
            <Container fluid='xl' className='splash-big-container'>
            <Row>
                    <Col>
                    <img src={landingPage} style={{width:'100vw',height:'50vh'}} alt='multiple cubes with social media logos' /> 
                    {/* Photo by <a href="https://unsplash.com/@alexbemore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexander Shatov</a> on <a href="https://unsplash.com/s/photos/social-media?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  */}
                    </Col>
                </Row>
            </Container>

            <Container fluid className='splash-page-container'>
            <Row>
                <Col>
             <Card bg='dark' border='primary' className='secondary-card'>
                <Card.Title>React App</Card.Title>   
                <Card.Img variant='top' src={splash1} style={{marginBottom:'1em'}} alt='pc with code open'/>
                <Card.Subtitle>React + Bootstrap</Card.Subtitle>
                <Card.Body>
                Welcome to my React Social Media App. This is a mock website soley made to test my own skills. You can make an account but it will not be saved after you leave. Next step is to learn MongoDB and Docker to help maintain a real database.
                </Card.Body>
            </Card></Col>
            <Col>
            <Card bg='dark' border='info' className='secondary-card'>
                <Card.Title>Front End Technologies</Card.Title>
                <Card.Img variant='top' src={splash2} style={{marginBottom:'1em'}} alt='phone showing app development'/>
                <Card.Subtitle>Reusable Components</Card.Subtitle>
                <Card.Body>
                Built with React,React-Bootstrap,React-Router-Dom,Formik and more to come.
                 </Card.Body>
                </Card></Col>
                <Col>
            <Card bg='dark' border='danger' className='secondary-card'>
                <Card.Title>Web Dev Simplified</Card.Title>
                <Card.Img variant='top' src={splash3} style={{marginBottom:'1em'}} alt='multiple pc displays for programming'/>
                <Card.Subtitle>Learning Frameworks</Card.Subtitle>
                <Card.Body>
                    Testing new technologies. 
                </Card.Body>
            </Card></Col>
            <Col>
            <Card bg='dark' border='warning' className='secondary-card'>
                <Card.Title>Check out my Github!</Card.Title>
                <Card.Img variant='top' src={githublogo} style={{marginBottom:'1em',height:'48vh',objectFit:'cover'}} alt='GitHub logo'/>
                <Card.Subtitle>More Projects</Card.Subtitle>
                <Card.Body>
                    <a href='https://github.com/RyanZmu' target='_blank'>Github Repo!</a>
                </Card.Body>
            </Card></Col>
            </Row>
            </Container>
            </Stack>
         
        </div>
    )
}

export default SplashPage