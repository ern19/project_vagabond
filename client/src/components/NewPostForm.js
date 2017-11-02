import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import TextField from "material-ui/TextField"

class NewPostForm extends Component {
    state={
        post: {
            title: "",
            content: "",
        },
        refresh: false
    }
        
        
    handleChange = async (event) => {
        const attribute = event.target.name
        const updatePost = {...this.state.post}
        updatePost[attribute] = event.target.value
        this.setState ({post: updatePost})
        console.log(this.state.post)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const cityId = this.props.city.id
        const response = await axios.post(`/api/cities/${cityId}/posts`, {
            "post": this.state.post
        })
        this.setState({refresh: true})
    }

    render() {
        if (this.state.refresh){
            window.location.reload()
        }
        return (
            <div>
                <h1>New Post</h1>
                    <form onSubmit={this.handleSubmit}>
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

export default NewPostForm;