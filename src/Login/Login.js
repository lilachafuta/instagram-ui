import React, {Component} from 'react';
import {ErrorMessage, Field, Formik, Form as FormYap} from "formik";
import {Button, Form} from "react-bootstrap";
import loginModel from '../models/login.model';
import './Login.scss';
import { withRouter } from 'react-router-dom';
import config from '../config';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incorrectLoginMessage: false
        };
    }

    submit(values) {
        console.log(values);
        this.setState({incorrectLoginMessage: false});
        fetch(config.apiUrl + '/api/users/login', {
            method: 'POST',
            body: JSON.stringify(values),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.status === 200) {
                this.props.history.push('/');
            } else if(res.status === 403) {
                this.setState({incorrectLoginMessage: true});
            } else {
                console.log('Unexpected error');
            }
        });
    }
    render() {
        return (
            <div className="Login">
                <h1>Sing in!</h1>
                <Formik initialValues={{username: '', password: ''}}
                        validationSchema={loginModel}
                        onSubmit={this.submit.bind(this)}>
                    <FormYap className="col-xs-8 col-sm-6">
                        {this.state.incorrectLoginMessage ? <div className="row alert alert-danger mt-2">Incorrect username or password</div> : null}
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
                        <Button className="button" type="submit">
                            Login!
                        </Button>
                    </FormYap>
                </Formik>
            </div>
        );
    }
}

export default withRouter(Login);