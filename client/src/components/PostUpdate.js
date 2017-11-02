import React, { Component } from 'react';
import TextField from "material-ui/TextField"
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class PostUpdate extends Component {
    state = {
        post: {},
        redirectToPost: false
    }

    async componentWillMount () {
        const { cityId } = this.props.match.params
        const { postId } = this.props.match.params
        const res = await axios.get(`/api/cities/${cityId}/posts/${postId}`)
        console.table(res.data)
        this.setState({post: res.data})
        
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
        const { cityId } = this.props.match.params
        const { postId } = this.props.match.params
        const clonedPost = {...this.state.post}
        console.log("i'm alive")
        const res = await axios.patch(`/api/cities/${cityId}/posts/${postId}`, {
            post: clonedPost
            
        })
        console.log(res.data)
        this.setState({city: res.data, redirectToPost: true})
    }

    render() {
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