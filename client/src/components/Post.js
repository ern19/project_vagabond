import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

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
    }

    deletePost = async () => {
        const cityId = this.props.match.params.cityId
        const postId  = this.props.match.params.postId
        
        const res = await axios.delete(`/api/cities/${cityId}/posts/${postId}`)
        this.setState({post: res.data, redirectToCity: true})  
    }
    render() {
        const cityId = this.props.match.params.cityId
        if (this.state.redirectToCity) {
            return <Redirect to ={`/cities/${cityId}`}/>
        }
        return (
            <div>
                <h2>{this.state.post.title}</h2>
                <p>{this.state.post.content}</p>
                <button onClick={() => this.deletePost()}>Delete this post</button>
            </div>
        );
    }
}

export default Post;