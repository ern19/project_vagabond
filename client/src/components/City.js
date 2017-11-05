import React, { Component } from 'react';
import axios from 'axios'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import PostList from './PostList'
import NewPostForm from './NewPostForm'
class City extends Component {

    state = {
        city: {},
        posts: [],
    }

    async componentWillMount() {
        try {
            const cityId = this.props.match.params.cityId
            const response = await axios.get(`/api/cities/${cityId}`)           
            this.setState({city: response.data})
        } catch (error) {
            console.log(error)
        }

        try {
            const cityId = this.props.match.params.cityId
            const response = await axios.get(`/api/cities/${cityId}/posts`)   
            this.setState({posts: response.data})  
        } catch (error) {
            console.log(error)
        }
    }
    render() {        
        return (
            <div>
                <Card>
                    <CardMedia
                        overlay={<CardTitle title={this.state.city.name} />}
                        >
                        <img src={this.state.city.photo_url} alt="city pic" />
                    </CardMedia>
                    <CardText>
                        {this.state.city.description}
                        <br />
                        <br />                           
                    </CardText>
                    <CardActions>
                        <FlatButton href={`/`} label="Back to Cities" style={{backgroundColor: "#72E0FF"}}/>
                    </CardActions>
                </Card>
                <NewPostForm city={this.state.city}/>
                <PostList posts={this.state.posts} city={this.state.city}/>
            </div>
        );
    }
}

export default City;