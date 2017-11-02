import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import City from './City.js'

class PostList extends Component {
    render(props) {
        return (
            <div>
                {
                    this.props.posts.map((post) => {
                        return (
                            <div>
                                <h2>{post.title}</h2>
                                <p>{post.content}</p>
                            
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}


export default PostList;