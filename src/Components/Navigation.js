import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../images/logo.svg'

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

      </Navbar>
    </div>
  )
}

export default NavigatonBar
