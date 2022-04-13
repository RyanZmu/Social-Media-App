import { Toast } from "bootstrap";
import { Alert } from "bootstrap";
import { Formik,Form,Field,useFormik } from "formik";
import React from "react";
import ReactDOM from "react";
import { Container, Row, Col, Overlay, Tooltip, Button, Card } from "react-bootstrap";
import loginImage from '../images/login-image.jpg'

const UserLoginPage = (props) => {

   
    return ( 
        <div className='login-page'>
{/* 
            <Container className="login-header">

            </Container> */}
        
        <Container className='login-container'>
            {/* <Container className='login-page-image-container'> turn this into a container either rotating images or show a row of different images from social media
                <Row>
                    <Col>
                        <img className='login-page-image' src={loginImage} />
                    </Col>
                </Row>
            </Container> */}
            <Card bg='dark'>
            <Formik
            initialValues={{
                userName:'',
                password:'',
            }}
            onSubmit= {(event) => {
                props.activeUserCheck({userName:event.userName, password:event.password})
                // console.log(props.activeUser);
                if (props.activeUser.firstName === '') {
                    console.log('success')
                }
            }}
            >
                <Form className="user-form">
                 <h1>Sign In</h1>
                 <p></p>
                 <label htmlFor="userName">User Name</label>
                 <Field id='userNameField' name='userName' placeholder='Enter User Name' required />

                 <label htmlFor="password">Password</label>
                 <Field id='passwordField' name='password' placeholder='Enter Password' required />

                <Button type='submit' variant={props.activeUser.firstName === undefined ? 'primary' : 'success'}>Sign In</Button>
                </Form>
            </Formik>
            </Card>
            </Container>

            <Container>
                <Row>
                    <p>
                        <br/>
                        Here are some logins to try out different profiles! In the future you will be able to make your own profile. Open developer console to see user objects and then check out their profile!
                        <br/><br/>
                        username: soccerfan1 password: password1
                        <br/>
                        username: kelly92 password: raptorsfan1
                        <br/>
                        username:fancypants92 password: louisvutton1
                    </p>
                </Row>
            </Container>
        </div>
    )
} 

export default UserLoginPage