import React, { Component } from 'react';
import axios from 'axios'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import PostList from './PostList'
import {Link} from 'react-router-dom'
class City extends Component {

    state = {
        city: {},
        posts: []
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
            console.table(response.data)
            this.setState({posts: response.data})
            console.log(this.state)
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
                    </CardText>
                    
                </Card>
                <PostList posts={this.state.posts}/>
            </div>
        );
    }
}

export default City;