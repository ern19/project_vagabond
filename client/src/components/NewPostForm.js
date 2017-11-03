import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import TextField from "material-ui/TextField"
import FlatButton from 'material-ui/FlatButton';

class NewPostForm extends Component {
    // this sets the state of the 'post' object and the two values
    state={
        post: {
            title: "",
            content: "",
        },
        refresh: false
    }
        
    // this handles changes in text boxes as they happen
    handleChange = async (event) => {
        // this sets the variable to whichever item is being edited currently
        const attribute = event.target.name
        //  this updates the 'post' state
        const updatePost = {...this.state.post}
        updatePost[attribute] = event.target.value
        // this sets the updated state for post
        this.setState ({post: updatePost})
        // this logs everything to the console to confirm that everything is currently working
        console.log(this.state.post)
    }

    // this handles the processes involved with the submit button
    handleSubmit = async (event) => {
        // this prevents the page from automatically refreshing
        event.preventDefault()
        // this sets the cityId from the state
        const cityId = this.props.city.id
        // requests the information specifically about posts on that Id from our API with Axios
        const response = await axios.post(`/api/cities/${cityId}/posts`, {
            "post": this.state.post
        })
        // this sets the refresh state to true and trigger the refresh located in the render
        this.setState({refresh: true})
    }

    render() {
        if (this.state.refresh){
            window.location.reload()
        }
        return (
            <div style={{margin: "10px"}}>
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
                            <textarea 
                                onChange={this.handleChange} name="content"
                                type="text" value={this.state.post.content}
                            />
                        </div>
                    <FlatButton label="Submit" type="submit" style={{
                        backgroundColor: "#72E0FF"
                    }}/>
                    </form>
            </div>
        );
    }
}

export default NewPostForm;