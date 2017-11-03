import React, { Component } from 'react';
import TextField from "material-ui/TextField"
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
class PostUpdate extends Component {
    state = {
        post: {},
        redirectToPost: false,
        flashError: false
    }

    async componentWillMount() {
        const { cityId } = this.props.match.params
        const { postId } = this.props.match.params
        const res = await axios.get(`/api/cities/${cityId}/posts/${postId}`)
        console.table(res.data)
        this.setState({ post: res.data })

    }

    handleChange = (event, postId) => {
        const attribute = event.target.name
        const clonedPost = { ...this.state.post }
        clonedPost[attribute] = event.target.value
        // submission[attribute] = event.target.value
        this.setState({ post: clonedPost })
        console.log(this.state.post)
    }
    updatePost = async (event) => {
        try {
            event.preventDefault()
            const { cityId } = this.props.match.params
            const { postId } = this.props.match.params
            const clonedPost = { ...this.state.post }
            console.log("i'm alive")
            const res = await axios.patch(`/api/cities/${cityId}/posts/${postId}`, {
                post: clonedPost

            })
            console.log(res.data)
            this.setState({ city: res.data, redirectToPost: true })
        } catch (error) {
            this.setState({ flashError: true })
            console.log(this.stateflashError)
        }
    }

    render() {
        const { cityId } = this.props.match.params
        const { postId } = this.props.match.params
        if (this.state.flashError) {
            let div = document.getElementById("flash")
            div.style.display = "block"
        }
        if (this.state.redirectToPost) {
            return <Redirect to={`/cities/${cityId}/posts/${postId}`} />
        }
        return (

            <div style={{ marginTop: "20px" }}>
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
                        <label htmlFor="content"></label>
                        <textarea

                            onChange={this.handleChange} name="content"
                            type="text" value={this.state.post.content}
                        />
                    </div>
                    <FlatButton type="submit" label="submit" style={{
                        textShadow: "1px 1px #72E0FF",
                        color: "black"
                    }} />
                    <FlatButton href={`/cities/${cityId}`} label="Go Back" />
                </form>
                <div id="flash" style={{ color: "red", display: "none" }}>Please fill out the required fields.</div>
            </div>
        );
    }
}

export default PostUpdate;