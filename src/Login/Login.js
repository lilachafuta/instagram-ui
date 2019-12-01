import React, {Component} from 'react';
import {ErrorMessage, Field, Formik, Form as FormYap} from "formik";
import {Button, Form} from "react-bootstrap";
import loginModel from '../models/login.model';
import './Login.scss';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <h1>Sing in!</h1>
                <Formik initialValues={{username: '', password: ''}}
                        validationSchema={loginModel}>
                    <FormYap className="col-xs-8 col-sm-6">
                        <Form.Group controlId="formRegister">
                            <Form.Label column="false">Username:</Form.Label>
                            <Field name="username" className="form-control"/>
                            <ErrorMessage class="alert alert-dark" name="username" component="div"/>
                        </Form.Group>
                        <Form.Group controlId="formRegister">
                            <Form.Label column="false">Password:</Form.Label>
                            <Field name="password" className="form-control"/>
                            <ErrorMessage class="alert alert-dark" name="password" component="div"/>
                        </Form.Group>
                        <Button className="button" type="submit">
                            Login!
                        </Button>
                    </FormYap>
                </Formik>
            </div>
        );
    }
}

export default Login;