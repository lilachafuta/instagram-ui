import React, {Component} from 'react';
import './Feed.scss'
import  Post from './Post/Post';
import BeatLoader from 'react-spinners/BeatLoader';
import config from '../config';


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : [],
            loading : false
        }
    }
    componentDidMount() {
        this.setState({loading: true});
        fetch(config.apiUrl + '/api/posts')
            .then(res=> res.json())
            .then(posts=>this.setState({posts, loading: false}))
    }
    render() {
        return (
            <div className="Feed">
                <div className="loading">
                    {this.state.loading ?
                        <div>
                            <BeatLoader
                            sizeUnit={"px"}
                            color={'#ff6377'}
                            size={50}
                            margin={2}
                            loading={this.state.loading}/>
                            <div>Loading...</div>
                        </div> : null
                    }
                </div>
                <div className="container">
                    {this.state.posts.map(post=>{
                        return <Post src={post.image}
                                     userId={post.userId}
                                     key={post._id}
                                     title={post.title}
                                     likes={post.likes}
                                     tags={post.tags}
                                     created={Number(post.created)}/>
                    })}
                </div>
            </div>
        );
    }
}

export default Feed;