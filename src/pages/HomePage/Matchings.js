import React, { Component } from 'react';
import MatchingItem from './MatchingItem';

class Matchings extends Component {
    render() {
        const { matchings } = this.props;
        return (
            <React.Fragment>
                {matchings.map((item) => (
                    <MatchingItem key={item.id} item={item} />
                ))}
            </React.Fragment>
        );
    }
}

export default Matchings;