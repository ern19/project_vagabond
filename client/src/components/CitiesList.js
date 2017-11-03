import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import { Link } from 'react-router-dom'
import styled from "styled-components";


class CitiesList extends Component {

    render() {
        return (
            <div>
                {
                    this.props.cities.map((city, index) => {
                        return (
                            <Card style={{
                                margin: "5px",
                                textAlign: "center"

                            }}>
                                <CardMedia
                                    overlay={<CardTitle title={city.name} />}
                                    >
                                    <img src={city.photo_url} alt="city pic" />
                                </CardMedia>
                                <CardText style={{
                                     margin: "5px",
                                    textAlign: "center",
                                    
                                }}>
                                    
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