import React, {Component} from 'react';
import registerModel from '../models/register.model';
import {Formik, Field, Form as FormYap, ErrorMessage} from 'formik';
import {Button, Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Register.scss';
import TagsInput from "react-tagsinput";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                <Formik initialValues={{name: '', username: '', password: '', birthDate: '', gender: '', about: ''}}
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
                            <Field name="password" className="form-control"/>
                            <ErrorMessage class="alert alert-dark" name="password" component="div"/>
                        </Form.Group>
                        <div className="form-row">
                            <div className="col-6">
                                <Form.Group controlId="formRegister">
                                    <Form.Label column="false">Birthdate:</Form.Label>
                                    <Field name="birthDate" className="form-control" type="date"/>
                                    <ErrorMessage class="alert alert-dark" name="birthDate" component="div"/>
                                </Form.Group>
                            </div>
                            <div className="col-6">
                                <Form.Group controlId="formRegister">
                                    <Form.Label column="false">Gender:</Form.Label>
                                    <Field name="gender" className="form-control">
                                        {()=> (
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option value={null}>Choose Gender</option>
                                                <option value="f">Female</option>
                                                <option value="m">Male</option>
                                            </select>
                                        )}
                                    </Field>
                                    <ErrorMessage class="alert alert-dark" name="gender" component="div"/>
                                </Form.Group>
                            </div>
                        </div>
                        <Form.Group controlId="formRegister">
                            <Form.Label column="false">About:</Form.Label>
                            <Field name="about" className="form-control"/>
                            <ErrorMessage class="alert alert-dark" name="about" component="div"/>
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