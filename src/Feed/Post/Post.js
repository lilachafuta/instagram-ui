import React, {Component} from 'react';
import './Post.scss';
import Moment from 'react-moment';
import TagList from "./TagList/TagList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faUserCircle, faClock, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like : false
        }
    }
    likePost () {
        this.setState({
            like: !this.state.like
        });
    }
    render() {
        return (
            <div className="Post">
                <div className="card" style={{width: '400px',height: '550px'}}>
                    <header className="header">
                        <span>{this.props.id}</span>
                        <div><FontAwesomeIcon icon={faUserCircle} className="icon-user"/></div>
                    </header>
                    <img src={this.props.url} className="card-img-top" onDoubleClick={this.likePost.bind(this)} alt="..."/>
                    <p className="likes" onClick={this.likePost.bind(this)}>
                        {this.state.like ?
                            <span>{this.props.likes} <FontAwesomeIcon icon={faHeartbeat} className="icon"/></span> :
                            <span>{this.props.likes} <FontAwesomeIcon icon={faHeart} className="icon"/></span>}

                    </p>
                        <div className="card-body">
                            <p className="card-text-title">{this.props.title}</p>
                            <TagList tags={this.props.tags} />
                            <small className="text-muted">
                                Last updated <FontAwesomeIcon icon={faClock} className="icon-time"/>
                                <Moment format=" HH:MM - MMM DD" unix >{this.props.time}</Moment>
                            </small>
                        </div>
                </div>
            </div>
        );
    }
}

export default Post;