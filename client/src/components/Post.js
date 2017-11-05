import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import timeago from 'timeago.js'


class Post extends Component {

    state = {
        post: {},
        redirectToCity: false
    }

    async componentWillMount() {
        try {
            const cityId = this.props.match.params.cityId
            const postId = this.props.match.params.postId

            const response = await axios.get(`/api/cities/${cityId}/posts/${postId}`)
            console.table(response.data)
            this.setState({post: response.data})
        } catch (error) {
            console.log(error)
        }
        console.log(this.props)
        console.log(this.state)
    }
    deletePost = async () => {
        if(window.confirm(`Are you sure you want to delete ${this.state.post.title}?`)) {
            const cityId = this.props.match.params.cityId
            const postId = this.props.match.params.postId
            
            const res = await axios.delete(`/api/cities/${cityId}/posts/${postId}`)
            this.setState({post: res.data, redirectToCity: true})  
        }
    }
    render() {
        const timeAgo = timeago().format(this.state.post.created_at)
        const cityId = this.props.match.params.cityId
        const postId = this.props.match.params.postId
        
        if (this.state.redirectToCity) {
            return <Redirect to ={`/cities/${cityId}`}/>
        }
        return (
          <Card>
            <CardHeader
              title={this.state.post.title}
              subtitle={timeAgo}
            />
            
            <CardText expandable={false}>
              {this.state.post.content}
            </CardText>
            <CardActions>
              <FlatButton
                style={{
                    textShadow: "1px 1px rgb(255, 109, 18)"
                }}
                onClick={() => {this.deletePost()}} label="Delete this post" />
              <FlatButton href={`/cities/${cityId}/posts/${postId}/edit`}label="Edit this post" />
              <FlatButton href={`/cities/${cityId}`}label="Go Back"/>
            </CardActions>
          </Card>

        );
        

    }
}

export default Post;

{/* <div>
<div>
<Title> <h2>{this.state.post.title}</h2></Title>
</div>
<div>
<Content>  <p>{this.state.post.content}</p></Content>
</div>
<DeleteButton>
<button onClick={() => {this.deletePost()}}>Delete this post</button>
</DeleteButton>
<Link to={`/cities/${cityId}/posts/${postId}/edit`}>Edit</Link>
</div> */}