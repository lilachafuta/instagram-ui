import React, {Component} from 'react';
import registerModel from '../models/register.model';
import {Formik, Field, Form as FormYap, ErrorMessage} from 'formik';
import {Button, Form} from "react-bootstrap";
import './Register.scss';
import { withRouter } from 'react-router-dom';
import config from "../config";

class Register extends Component {
    submit(values) {
        fetch(config.apiUrl + '/api/users', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="Register">
                <h1>Sing up!</h1>
                <Formik initialValues={{name: '', username: '', password: '', birthDate:new Date(), gender: '', about: ''}}
                        validationSchema={registerModel}
                        onSubmit={this.submit.bind(this)}>
                    <FormYap className="col-xs-8 col-sm-6">
                        <Form.Group controlId="formRegister">
                            <Form.Label htmlFor="name" column="false">Name:</Form.Label>
                            <Field name="name" className="form-control"/>
                            <ErrorMessage className="alert alert-dark" name="name" component="div"/>
                        </Form.Group>
                        <Form.Group controlId="formRegister">
                            <Form.Label column="false">Username:</Form.Label>
                            <Field name="username" className="form-control"/>
                            <ErrorMessage className="alert alert-dark" name="username" component="div"/>
                        </Form.Group>
                        <Form.Group controlId="formRegister">
                            <Form.Label column="false">Password:</Form.Label>
                            <Field name="password" className="form-control"/>
                            <ErrorMessage className="alert alert-dark" name="password" component="div"/>
                        </Form.Group>
                        <div className="form-row">
                            <div className="col-6">
                                <Form.Group controlId="formRegister">
                                    <Form.Label column="false">Birthdate:</Form.Label>
                                    <Field name="birthDate" className="form-control" type="date"/>
                                    <ErrorMessage className="alert alert-dark" name="birthDate" component="div"/>
                                </Form.Group>
                            </div>
                            <div className="col-6">
                                <Form.Group controlId="formRegister">
                                    <Form.Label column="false">Gender:</Form.Label>
                                    <Field name="gender" className="form-control" placeholder="Select Gender" component="select">
                                                <option value="f">Female</option>
                                                <option value="m">Male</option>
                                    </Field>
                                    <ErrorMessage className="alert alert-dark" name="gender" component="div"/>
                                </Form.Group>
                            </div>
                        </div>
                        <Form.Group controlId="formRegister">
                            <Form.Label column="false">About:</Form.Label>
                            <Field name="about" className="form-control"/>
                            <ErrorMessage className="alert alert-dark" name="about" component="div"/>
                        </Form.Group>
                        <Button className="button" type="submit">
                            Sign up!
                        </Button>
                    </FormYap>
                </Formik>
            </div>
        );
    }
}

export default withRouter(Register);