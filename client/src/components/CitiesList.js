import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
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
                                

                            }}>
                                <CardMedia
                                    overlay={<CardTitle title={city.name} />}
                                    >
                                    <img src={city.photo_url} alt="city pic" />
                                </CardMedia>
                                <CardText style={{
                                     margin: "5px",
                                    
                                    
                                }}>
                                    
                                    {city.description}
                                </CardText>
                                <FlatButton href={`/cities/${city.id}`} 
                                            label={`View posts for ${city.name}`}
                                            style={{backgroundColor: "#72E0FF",
                                                    margin: "3px"}}/>
                            </Card>
                        )
                    })
                }
            </div>
        );
    }
}

export default CitiesList;