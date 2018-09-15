import React, { Component } from 'react';
import JourneyItem from './JourneyItem';

class Journeys extends Component {
    render() {
        const { journeys } = this.props;
        return (
            <React.Fragment>
                {journeys.map((item) => (
                    <JourneyItem key={item.id} item={item} />
                ))}
            </React.Fragment>
        );
    }
}

export default Journeys;