import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                </CardText>
                            </Card>
                        )
                    })
                }
            </div>
        );
    }
}

export default CitiesList;