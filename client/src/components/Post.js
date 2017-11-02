import React, { Component } from 'react';
import axios from 'axios'


class Post extends Component {

    state = {
        post: {}
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
    render() {
        return (
            <div>
                <h2>{this.state.post.title}</h2>
                <p>{this.state.post.content}</p>
            </div>
        );
    }
}

export default Post;