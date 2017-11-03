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
                       const content = post.content.split(" ").splice(0, 50).join(" ")
                       const submitDate = post.created_at.split("").splice(0,10).join("")
                        return (
                            
                            <Card style={{
                                margin: "10px"
                            }}>
                                <CardHeader
                                title={post.title}
                                subtitle={`Submitted on ${submitDate}`}
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "20px"
                                }}
                                />
                                <CardText>
                                    <p>{content}... </p>
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