import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import City from './City.js'
import {Link} from 'react-router-dom'

class PostList extends Component {
    render(props) {
        return (
            <div>
                {
                    this.props.posts.map((post, index) => {
                        return (
                            <div>
                                <h2>{post.title}</h2>
                                <p>{post.content}</p>
                                <Link to={`/cities/${this.props.city.id}/posts/${post.id}`}>View Post</Link>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}


export default PostList;