import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import City from './City.js'
import {Link} from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';

class PostList extends Component {
   
    render(props) {
        return (
            <div>
                {
                    this.props.posts.map((post, index) => {
                        return (
                            
                            <Card>
                                <CardHeader
                                title={post.title}
                                
                                />
                                <CardText>
                                    {post.content}
                                </CardText>
                                <CardActions>
                                    <FlatButton href={`/cities/${this.props.city.id}/posts/${post.id}`}
                                        label="View Post" 
                                        style={{
                                        backgroundColor: "#72E0FF"
                                    }}/>
                                </CardActions>
                                
                            </Card>
                        )
                    })
                }
            </div>
        );
    }
}


export default PostList;