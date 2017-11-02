import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

import {Link} from 'react-router-dom'
class CitiesList extends Component {
    render(props) {
        return (
            <div>
                {
                    this.props.cities.map((city) => {
                        return (
                            <Card>
                                <CardMedia
                                    overlay={<CardTitle title={city.name} />}
                                    >
                                    <img src={city.photo_url} alt="city pic" />
                                </CardMedia>
                                <CardText>
                                    {city.description}
                                </CardText>
                                <Link to={`/cities/${city.id}`}>View posts for {city.name}</Link>
                            </Card>
                        )
                    })
                }
            </div>
        );
    }
}

export default CitiesList;