import React, { Component } from 'react';

class CitiesList extends Component {
    render(props) {
        return (
            <div>
                {
                    this.props.cities.map((city) => {
                        return (
                            <div>
                                <p>{city.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default CitiesList;