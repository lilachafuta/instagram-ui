import React, {Component} from 'react';
import registerModel from '../models/register.model';
import {Formik, Field, Form as FormYap, ErrorMessage} from 'formik';
import {Button, Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Register.scss';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state= {
            startDate: new Date()
        };
    }
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    render() {
        return (
            <div className="Register">
                <Formik initialValues={{name: '', username: '', password: '', birthdate: ''}}
                        validationSchema={registerModel}>
                    <FormYap className="col-xs-8 col-sm-6">
                        <Form.Group controlId="formRegister">
                            <Form.Label column="false">Name:</Form.Label>
                            <Field name="name" className="form-control"/>
                            <ErrorMessage class="alert alert-dark" name="name" component="div"/>
                        </Form.Group>
                        <Form.Group controlId="formRegister">
                            <Form.Label column="false">Username:</Form.Label>
                            <Field name="username" className="form-control"/>
                            <ErrorMessage class="alert alert-dark" name="username" component="div"/>
                        </Form.Group>
                        <Form.Group controlId="formRegister">
                            <Form.Label column="false">Password:</Form.Label>
                            <Field name="password" className="form-control" />
                            <ErrorMessage class="alert alert-dark" name="password" component="div"/>
                        </Form.Group>
                        <Form.Group controlId="formRegister">
                            <Form.Label column="false">Birthdate:</Form.Label>
                            <DatePicker
                                className="form-control"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                dateFormat="dd/MM/yyyy"
                            />
                            <ErrorMessage class="alert alert-dark" name="birthdate" component="div"/>
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

export default Register;