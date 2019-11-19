import React, {Component} from 'react';
import './Post.scss';
import Moment from 'react-moment';
import TagList from "./TagList/TagList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

class Post extends Component {
    render() {
        return (
            <div className="Post">
                <div className="card" style={{width: '400px',height: '550px'}}>
                    <header className="header">
                        <div><FontAwesomeIcon icon={faUserAlt} className="icon-user"/> </div>
                    </header>
                    <img src={this.props.url} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">{this.props.likes} <FontAwesomeIcon icon={faHeart} className="icon"/></p>
                            <p className="card-text-title">{this.props.title}</p>
                            <TagList tags={this.props.tags} />
                            <p className="card-text"><small className="text-muted">
                                Last updated at <Moment format="HH:MM - MMM DD" unix >{this.props.time}</Moment>
                            </small></p>
                        </div>
                </div>
            </div>
        );
    }
}

export default Post;