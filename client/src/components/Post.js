import React, { Component } from 'react';
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'

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
        if(window.confirm(`Are you sure you want to delete ${this.state.post.title}?`)) {
            const cityId = this.props.match.params.cityId
            const postId = this.props.match.params.postId
            
            const res = await axios.delete(`/api/cities/${cityId}/posts/${postId}`)
            this.setState({post: res.data, redirectToCity: true})  
        }
    }
    render() {
        const cityId = this.props.match.params.cityId
        const postId = this.props.match.params.postId
        if (this.state.redirectToCity) {
            return <Redirect to ={`/cities/${cityId}`}/>
        }
        return (
            <div>
                <h2>{this.state.post.title}</h2>
                <p>{this.state.post.content}</p>
                <button onClick={() => {this.deletePost()}}>Delete this post</button>
                <Link to={`/cities/${cityId}/posts/${postId}/edit`}>Edit</Link>
            </div>
        );
    }
}

export default Post;