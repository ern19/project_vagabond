import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import timeago from 'timeago.js'

class PostList extends Component {
   
    render() {
       const {posts} = this.props
        return (
            <div>
                {
                    posts.map((post) => {
                       const content = post.content.split(" ").splice(0, 50).join(" ")
                       const timeAgo = timeago().format(post.created_at)
                        return (
                            
                            <Card key={post.id} style={{
                                margin: "10px",
                                color: "rgba(32.86. 33.14. 33.99, 0.4)"
                            }}>
                                <CardHeader
                                title={post.title}
                                subtitle={timeAgo}
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