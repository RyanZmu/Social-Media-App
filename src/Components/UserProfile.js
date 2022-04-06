import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import ReactDOM from 'react-dom'

const UserProfile = (props) => {
    console.log(props.user)

    return (
        <div className='profile-page-container'>
            <Container className='profile-page-top' >
                <Row>
                    <Col>
              <Card className='user-profile-card'>
                <Card.Title>{`${props.user.firstName} ${props.user.lastName}`}</Card.Title>
                <Card.Img className='user-card-image' src={props.user.image} />
                <Card.Subtitle>
                    {props.user.isOnline ? 'Online!': 'Currently Offline'}
                    <hr/>
                    {props.user.status}
                </Card.Subtitle>
                <Card.Body>
                    My Interests: {props.user.interests}
                    <hr/>
                    My Hobbies: {props.user.hobbies}
                    <hr/>
                    My Favorite Shows: {props.user.favoriteShows}
                </Card.Body>
              </Card>
              </Col>

              <Col>
              <Card>
                  <Card.Title>What your Friends are saying!</Card.Title>
                  {/* Stopping point, lets continue the profile page later and keep working on the login to show a success and an error if user enters wrong name */}
              </Card>
              </Col>
              </Row>
            </Container>
        </div>
    )
}

export default UserProfile