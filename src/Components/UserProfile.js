import React from 'react'
import { Container, Card } from 'react-bootstrap'
import ReactDOM from 'react-dom'

const UserProfile = (props) => {
    console.log(props.user)

    return (
        <div className='profile-page-container'>
            <Container className='profile-page-top'>
              <Card className='user-profile-card'>
                <Card.Title>{`${props.user.firstName} ${props.user.lastName}`}</Card.Title>
              </Card>
            </Container>
        </div>
    )
}

export default UserProfile