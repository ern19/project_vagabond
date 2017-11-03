import React, { Component } from 'react';
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import styled from 'styled-components'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Post extends Component {
    // this sets the state of the 'post' object
    state = {
        post: {},
        redirectToCity: false
    }

    // Component Will Mount makes sure this all happens before the page is rendered
    async componentWillMount() {
        try {
            //  this sets the variables from the passed down cityId and postId and then
            const cityId = this.props.match.params.cityId
            const postId = this.props.match.params.postId

            // requests the information on each Id from our API with Axios
            const response = await axios.get(`/api/cities/${cityId}/posts/${postId}`)
            
            // this logs all the response data to the console
            console.table(response.data)
            // this is used to set the state to match the data in the response from the API
            this.setState({post: response.data})
        } catch (error) {
            // This catches and logs any errors
            console.log(error)
        }
    }
    // this deletes a post if triggered
    deletePost = async () => {
        // this opens a confirm window asking the user to confirm if the delete button is pressed
        if(window.confirm(`Are you sure you want to delete ${this.state.post.title}?`)) {
            //  this sets the variables from the passed down cityId and postId and then
            const cityId = this.props.match.params.cityId
            const postId = this.props.match.params.postId
            
            // this requests from axios the specific post located at cityId and at postId
            const res = await axios.delete(`/api/cities/${cityId}/posts/${postId}`)
            this.setState({post: res.data, redirectToCity: true})  
        }
    }
    render() {
        //  this sets the variables from the passed down cityId and postId and then
        const cityId = this.props.match.params.cityId
        const postId = this.props.match.params.postId
        if (this.state.redirectToCity) {
            // this redirects to city if the previous condition is triggered
            return <Redirect to ={`/cities/${cityId}`}/>
        }
        return (
          <Card>
            <CardHeader
              title={this.state.post.title}
              
            />
            
            <CardText expandable={false}>
              {this.state.post.content}
            </CardText>
            <CardActions>
              <FlatButton onClick={() => {this.deletePost()}} label="Delete this post" />
              <FlatButton href={`/cities/${cityId}/posts/${postId}/edit`}label="Edit this post" />
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