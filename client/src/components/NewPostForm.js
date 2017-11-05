import React, { Component } from 'react';
import axios from 'axios'
import TextField from "material-ui/TextField"
import FlatButton from 'material-ui/FlatButton';
class NewPostForm extends Component {
    state={
        post: {
            title: "",
            content: "",
        },
        refresh: false,
        flashError: false
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
        try {
            const cityId = this.props.city.id
            await axios.post(`/api/cities/${cityId}/posts`, {
                "post": this.state.post
            })
            this.setState({refresh: true}) 
        } catch (error) {
            this.setState({flashError: true})
            console.log(this.state.flashError)
        } 
    }

    render() {
        if (this.state.refresh){
            window.location.reload()
        }
        if(this.state.flashError){
            let div = document.getElementById("flash")
            div.style.display = "block"
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
                            <label htmlFor="content"></label>
                            <textarea
                                placeholder="Your post goes here!"
                                onChange={this.handleChange} name="content"
                                type="text" value={this.state.post.content}
                            />
                        </div>
                    <FlatButton label="Submit" type="submit" style={{
                        backgroundColor: "#72E0FF"
                    }}/>
                    <div id="flash" style={{color: "red", display: "none"}}>Please fill out the required fields.</div>
                    </form>
            </div>
        );
    }
}

export default NewPostForm;