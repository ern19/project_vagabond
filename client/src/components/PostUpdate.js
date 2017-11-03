import React, { Component } from 'react';
import TextField from "material-ui/TextField"
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class PostUpdate extends Component {
    // this sets the state of the 'post' object
    state = {
        post: {},
        redirectToPost: false
    }
    // Component Will Mount makes sure this all happens before the page is rendered
    async componentWillMount () {
    try {
        //  this sets the variables from the passed down cityId and postId and then
        const { cityId } = this.props.match.params
        const { postId } = this.props.match.params
        // requests the information on each Id from our API with Axios
        const res = await axios.get(`/api/cities/${cityId}/posts/${postId}`)
        
        console.table(res.data)
        
        this.setState({post: res.data})
    } catch (error) {
        // This catches and logs any errors
        console.log(error)
    }
}    
    handleChange = (event, postId) => {
        const attribute = event.target.name
        const clonedPost = {...this.state.post}
        clonedPost[attribute] = event.target.value
        // submission[attribute] = event.target.value
        this.setState({post: clonedPost})
        console.log(this.state.post)
    }

    updatePost = async (event) => {
        event.preventDefault()
        //  this sets the variables from the passed down cityId and postId and then
        const { cityId } = this.props.match.params
        const { postId } = this.props.match.params
        // this clones the post so the user can edit that one
        const clonedPost = {...this.state.post}
        console.log("i'm alive")
        // requests the information on each Id from our API with Axios
        const res = await axios.patch(`/api/cities/${cityId}/posts/${postId}`, {
        // this sets the information in the state equal to the 'cloned post' therby updating the information
            post: clonedPost
            
        })
        console.log(res.data)
        this.setState({city: res.data, redirectToPost: true})
    }

    render() {
        //  this sets the variables from the passed down cityId and postId and then
        const { cityId } = this.props.match.params
        const { postId } = this.props.match.params
        if (this.state.redirectToPost) {
            return <Redirect to={`/cities/${cityId}/posts/${postId}`}/>
        }
        return (

            <div>
                <h1>Edit Post</h1>
                <form onSubmit={this.updatePost}>
                    <div>
                        <label htmlFor="title">Post Title:  </label>
                        <TextField
                            onChange={this.handleChange} name="title"
                            type="text" value={this.state.post.title}
                        />
                    </div>
                    <div>
                        <label htmlFor="content">Post Content:  </label>
                        <TextField
                            onChange={this.handleChange} name="content"
                            type="text" value={this.state.post.content}
                        />
                    </div>
                    <button>Submit</button>
                </form>
                   
            </div>
        );
    }
}

export default PostUpdate;