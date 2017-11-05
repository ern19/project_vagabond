import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class CitiesList extends Component {
    render() {
        const {cities} = this.props
        return (
            <div>
                {
                    cities.map((city) => {
                        return (
                            <Card key={city.id} style={{
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