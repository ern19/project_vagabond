import React, { Component } from 'react';
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import styled from 'styled-components'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';




// const Title = styled.div`
// text-align: center;
// border-radius:10px;
// `
// const Content = styled.div`
// align-items:center;
// flex-direction:row;
// text-align: center;
// border-radius: 10px;
//     box-shadow: 0 0 5px -1px rgba(0,0,0,0.6);
// `
// const DeleteButton = styled.div`
// align-content: center;



// `


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
            <Card>
            <CardHeader
              title="Without Avatar"
              subtitle="Subtitle"
              actAsExpander={true}
              showExpandableButton={false}
            />
            <CardActions>
              <FlatButton onClick={() => {this.deletePost()}} label="Delete this post" />
              <FlatButton href={`/cities/${cityId}/posts/${postId}/edit`}label="Edit this post" />
            </CardActions>
            <CardText expandable={false}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
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