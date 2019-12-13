import React, {Component} from 'react';
import {Button, Form} from 'react-bootstrap';
import './CreatePost.scss';
import {Formik, Field, Form as FormYap, ErrorMessage} from 'formik';
import postModel from '../models/post.model';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import config from "../config";


class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {tags: [], toggle: false}
    }

    handleChange(tags) {
        this.setState({tags: tags})
    }

    convertToFormData(values) {
        const data = new FormData();
        for (let key in values) {
            Array.isArray(values[key])
                ? values[key].forEach(value => data.append(key + '[]', value))
                : data.append(key, values[key]) ;
        }
        return data;
    }

    showComment() {
        this.setState({toggle: !this.state.toggle})
    }

    submit(values) {
        const formData = this.convertToFormData(values);
        fetch(config.apiUrl + '/api/posts', {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(post => console.log(post))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="CreatePost">
                <h1>Create Post 📸</h1>
                <Formik initialValues={{image: '', title: '', tags: []}}
                        validationSchema={postModel}
                        onSubmit={this.submit.bind(this)}
                        render={({setFieldValue}) => {
                            return <FormYap className="col-xs-12 col-sm-6">
                                <div className="custom-file">
                                    <input name="image"
                                           type="file"
                                           className="custom-file-input"
                                           id="inputGroupFile01"
                                           aria-describedby="inputGroupFileAddon01"
                                           onChange={(event) => {
                                               setFieldValue('image', event.currentTarget.files[0]);
                                           }}/>
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                                        Choose your favorite image ✌🏻</label>
                                    <ErrorMessage class="alert alert-dark" name="image" component="div"/>
                                </div>
                                <Form.Group controlId="formUploadPost">
                                    <Form.Label column="false">Tittle</Form.Label>
                                    <Field name="title" className="form-control"/>
                                    <ErrorMessage className="alert alert-dark" name="title" component="div"/>
                                </Form.Group>
                                <Form.Group controlId="formUploadPost">
                                    <Form.Label column="false">Tags</Form.Label>
                                    <div onClick={this.showComment.bind(this)}>
                                        <Field name="tags">
                                            {() => (
                                                <TagsInput value={this.state.tags}
                                                           onChange={(tags) => {
                                                               this.handleChange(tags);
                                                               setFieldValue('tags', tags);
                                                           }}/>
                                            )}
                                        </Field>
                                    </div>
                                    {this.state.toggle ?
                                        <div className="badge badge-secondary">Press 'Tab' or 'Enter' to add new
                                            tag</div> :
                                        null}
                                    <ErrorMessage className="alert alert-dark" name="tags" component="div"/>
                                </Form.Group>
                                <Button className="button" type="submit">
                                    Share
                                </Button>
                            </FormYap>
                        }}>
                </Formik>
            </div>
        );
    }
}

export default CreatePost;