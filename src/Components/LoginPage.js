import { Formik,Form,Field,useFormik } from "formik";
import React from "react";
import ReactDOM from "react";
import { Container, Row } from "react-bootstrap";

const UserLoginPage = (props) => {

   
    return ( 
        <div>
            <Container className='login-container'>
            <Formik
            initialValues={{
                userName:'',
                password:'',
            }}
            onSubmit= {(event) => {
                props.activeUserCheck({userName:event.userName, password:event.password})
            }}
            >
                <Form>
                 <label htmlFor="userName">User Name</label>
                 <Field id='userNameField' name='userName' placeholder='Enter User Name' required />

                 <label htmlFor="password">Password</label>
                 <Field id='passwordField' name='password' placeholder='Enter Password' required />

                <button type='submit'>Sign In</button>
                </Form>
            </Formik>
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
                    </p>
                </Row>
            </Container>
        </div>
    )
} 

export default UserLoginPage