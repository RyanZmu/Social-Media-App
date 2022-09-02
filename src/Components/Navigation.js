import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../images/logo.svg'
import { propTypes } from 'react-bootstrap/esm/Image'

const NavigatonBar = (props) => {
  return (
    <div className='main-nav-container'>
      <Navbar bg='dark' variant='dark' className='nav-bar-container' sticky='top'>
        <Navbar.Brand as={Link} to='/'>DevelopBook <img src={logo} style={{ width: '5vw', height: '5vh' }} /> </Navbar.Brand>
        <Nav className='nav-bar-navigation'>
          <Nav.Link as={Link} to={props.userId === undefined ? '/sign-in' : '/profile/' + props.userId}>Profile</Nav.Link>
          <Nav.Link as={Link} to='/friends'>Friends</Nav.Link>
          <Nav.Link as={Link} to='/find-users'>Find Users</Nav.Link>
        </Nav>

        <Nav bg='dark' variant='dark' className='nav-bar-sign-in'>
          <NavDropdown menuVariant='dark' title='Sign In/Sign Up'>
            <NavDropdown.Item as={Link} to='/sign-in'>Sign In</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/sign-up'>Sign Up</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav className='nav-bar-sign-out'>
        {props.userId === undefined ? '' : <Nav.Link as={Link} to='/sign-in'>Logged In As:{props.userName} - Sign Out</Nav.Link>}
        </Nav>
        {/* this conditonal is saying if the user name is undefined (so no name is given yet) that the navbar will not change. However if the username is valid the nav bar will then display a new Link with the option to sign out and also will display the users first and last name. We pass the name from the App component controlling state*/}
      </Navbar>
    </div>
  )
}

NavigatonBar.propTypes = {
  userId: propTypes.number,
  userName: propTypes.string
}

export default NavigatonBar
