import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import ReactDOM from 'react-dom'

const UserProfile = (props) => {
  console.log(props.user)

  return (
    <div className='profile-page-container'>
      <Container className='profile-page-top'>
        <Row>
          <Col>
            <Card className='user-profile-card'>
              <Card.Title>{`${props.user.firstName} ${props.user.lastName}`}</Card.Title>
              <Card.Img className='user-card-image' src={props.user.image} />
              <Card.Subtitle>
                <hr />
                {props.user.isOnline ? 'Online!' : 'Currently Offline'}
                <br />
                <br />
                Current Status: {props.user.status}
                <hr />
              </Card.Subtitle>
              <Card.Body>
                My Interests: {props.user.interests}
                <hr />
                My Hobbies: <br /> {props.user.hobbies}
                <hr />
                My Favorite Shows: <br /> {props.user.favoriteShows}
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='user-profile-feed'>
              <Card.Title>What your Friends are saying!</Card.Title>
              {/* Stopping point, lets continue the profile page later and keep working on the login to show a success and an error if user enters wrong name */}

              {props.userList.map(user => {
                if (user !== props.user) {
                  return (
                    <Card key={user.id} className='user-feed-card'>
                      <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                      <Card.Img className='user-feed-image' src={user.image} />
                      <Card.Subtitle><br />{user.isOnline ? 'Online' : 'Currently Offline'}</Card.Subtitle>
                      <Card.Body>{user.status}</Card.Body>
                    </Card>
                  )
                }
              })}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserProfile
