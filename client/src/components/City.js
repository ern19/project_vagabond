import React, { Component } from 'react';
import axios from 'axios'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

import {Link} from 'react-router-dom'
class City extends Component {

    state = {
        city: {}
    }

    async componentWillMount() {
        try {
            const cityId = this.props.match.params.cityId
            const response = await axios.get(`/api/cities/${cityId}`)
            console.table(response.data)
            this.setState({city: response.data})
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
            </div>
        );
    }
}

export default City;