import React, {Component} from 'react';
import './Post.scss';
import Moment from 'react-moment';
import TagList from "./TagList/TagList";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faPaperPlane, faCommentDots} from '@fortawesome/free-regular-svg-icons';
import {faUserCircle, faClock, faHeartbeat} from '@fortawesome/free-solid-svg-icons';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: false
        }
    }

    likePost() {
        this.setState({
            like: !this.state.like
        });
    }

    render() {
        return (
            <div className="Post">
                <div className="card" style={{width: '400px', height: '550px'}}>
                    <header className="header">
                        <span>{this.props.id}</span>
                        <div><FontAwesomeIcon icon={faUserCircle} className="icon-user"/></div>
                    </header>
                    <img src={this.props.url} className="card-img-top" onDoubleClick={this.likePost.bind(this)} alt="..."/>
                    <div className="post-actions">
                        <span className="number-likes">{this.props.likes} likes</span>
                        <div className="actions-icons">
                            <div className="like" onClick={this.likePost.bind(this)}>
                                {this.state.like ?
                                    <FontAwesomeIcon icon={faHeartbeat} className="icon"/> :
                                    <FontAwesomeIcon icon={faHeart} className="icon"/>}
                            </div>
                            <div className="comment">
                                <FontAwesomeIcon icon={faPaperPlane} className="icon"/>
                            </div>
                            <div className="share">
                                <FontAwesomeIcon icon={faCommentDots} className="icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text-title">{this.props.title}</p>
                        <TagList tags={this.props.tags}/>
                        <small className="text-muted">
                            Last updated <FontAwesomeIcon icon={faClock} className="icon-time"/>
                            <Moment format=" HH:MM - MMM DD" unix>{this.props.time}</Moment>
                        </small>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;