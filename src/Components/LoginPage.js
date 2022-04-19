import { Toast, Alert } from 'bootstrap'
import { Formik, Form, Field, useFormik } from 'formik'
import React from 'react'
import ReactDOM from 'react'
import { Container, Row, Col, Overlay, Tooltip, Button, Card } from 'react-bootstrap'
import { Router } from 'react-router-dom'
import loginImage from '../images/login-image.jpg'

const UserLoginPage = (props) => {

  return (
    <div className='login-page'>
      <Container className='login-container'>
        <Card bg='dark'>
          <Formik
            enableReinitialize={true}
            displayName='login-formik'
            initialValues={{
              userName: '',
              password: ''
            }}
            onSubmit={(event) => {
              props.activeUserCheck({ userName: event.userName, password: event.password })
              
            }}
          >
            <Form className='user-form'>
              <h1>Sign In</h1>
              <p />
              <label htmlFor='userName'>User Name</label>
              <Field id='userNameField' name='userName' placeholder='Enter User Name' required />

              <label htmlFor='password'>Password</label>
              <Field id='passwordField' name='password' placeholder='Enter Password' required />

              <Button type='submit' variant={props.activeUser.firstName === undefined ? 'primary' : 'success'}>Sign In</Button> 
              {/* in the future make this redirect user to their profile on submit */}
            </Form>
          </Formik>
        </Card>
      </Container>

      <Container>
        <Row>
          <p>
            <br />
            Here are some logins to try out different profiles! In the future you will be able to make your own profile. Open developer console to see user objects and then check out their profile! Once the button turns green, click on the profile link to see the user. Will redirect in future builds.
            <br /><br />
            username: soccerfan1 password: password1
            <br />
            username: kelly92 password: raptorsfan1
            <br />
            username:fancypants92 password: louisvutton1
          </p>
        </Row>
      </Container>

    </div>
  )
}

export default UserLoginPage
