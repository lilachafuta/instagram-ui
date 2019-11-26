import React, {Component} from 'react';
import {Button, Form} from 'react-bootstrap';
import './CreatePost.scss';
import {Formik, Field, Form as FormYap, ErrorMessage} from 'formik';
import postModel from '../models/post.model';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';


class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state={tags: []}
    }
    handleChange(tags) {
        this.setState({tags})
    }
    render() {
        return (
            <div className="CreatePost">
                <h1>Create Post</h1>
                <Formik initialValues={{image: '', title: '', tags: ''}}
                        validationSchema={postModel}>
                    <FormYap className="col-xs-12 col-sm-6">
                        <div className="custom-file">
                            <Field name="image"
                                type="file"
                                className="custom-file-input"
                                id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01"/>
                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                                Choose your favorite image ✌🏻</label>
                            <ErrorMessage class="alert alert-dark" name="image" component="div"/>
                        </div>
                        <Form.Group controlId="formUploadPost">
                            <Form.Label column="false">Tittle</Form.Label>
                            <Field name="title" className="form-control"/>
                            <ErrorMessage class="alert alert-dark" name="title" component="div"/>
                        </Form.Group>
                        <Form.Group controlId="formUploadPost">
                            <Form.Label column="false">Tags</Form.Label>
                            <Field name="tags">
                                {()=> (
                                    <TagsInput value={this.state.tags} onChange={this.handleChange.bind(this)} />
                                )}
                            </Field>
                            <div className="badge badge-secondary">Press 'Tab' or 'Enter' to add new tag</div>
                            <ErrorMessage class="alert alert-dark" name="tags" component="div"/>
                        </Form.Group>
                        <Button className="button" type="submit">
                            Share
                        </Button>
                    </FormYap>
                </Formik>
            </div>

        );
    }
}

export default CreatePost;