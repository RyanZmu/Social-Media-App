import { Formik,Form,Field } from "formik";
import React from "react";
import ReactDOM from "react";

const UserLoginPage = (props) => {


    return ( 
        <div>
            <Formik
            initialValues={{
                userName:'',
                password:'',
            }}
            onSubmit= {(event) => console.log(event)}
            // on submit function goes here
            >
                <Form>
                 <label htmlFor="userName">User Name</label>
                 <Field id='userNameField' name='userName' placeholder='Enter User Name' />

                 <label htmlFor="password">Password</label>
                 <Field id='passwordField' name='password' placeholder='Enter Password' />

                <button type='submit'>Sign In</button>
                </Form>
            </Formik>
        </div>
    )
} 

export default UserLoginPage