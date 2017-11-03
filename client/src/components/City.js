import React, { Component } from 'react';
import axios from 'axios'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import PostList from './PostList'
import {Link} from 'react-router-dom'
import NewPostForm from './NewPostForm'
class City extends Component {
     // this sets the state of the 'city' object and the 'posts' array 
    state = {
        city: {},
        posts: [],
    }
    // Component Will Mount makes sure this all happens before the page is rendered
    async componentWillMount() {
        try {
            //  this passes down the cityId and then
            const cityId = this.props.match.params.cityId
            // requests the information on that Id from our API with Axios
            const response = await axios.get(`/api/cities/${cityId}`)
            
            // this is used to set the state to match the data in the response from the API
            this.setState({city: response.data})
        } catch (error) {
            // This catches and logs any errors
            console.log(error)
        }
        try {
            //  this passes down the cityId and then
            const cityId = this.props.match.params.cityId
            // requests the information specifically about posts on that Id from our API with Axios
            const response = await axios.get(`/api/cities/${cityId}/posts`)
            // this puts a readable table of data into the console to preview the response data
            console.table(response.data)

            // this is used to set the state to match the data in the response from the API
            this.setState({posts: response.data})

            // this puts the data into the console to preview the state data
            console.log(this.state)
        } catch (error) {
            // This catches and logs any errors
            console.log(error)
        }
    }
    render() {
        // this sets the variable of the city we are displaying to match what is in the url
        const cityId = this.props.match.params.cityId 
        // this returns all the data on the city and the posts related to that city       
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
                        </CardText>
                        
                    </Card>
                    <NewPostForm city={this.state.city}/>
                    <PostList posts={this.state.posts} city={this.state.city}/>
                    
            
                </div>
        );
    }
}

export default City;