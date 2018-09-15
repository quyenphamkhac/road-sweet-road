import React, { Component } from 'react';
import RequestItem from './RequestItem';

class Requests extends Component {
    render() {
        const { requests } = this.props;
        return (
            <React.Fragment>
                {requests.map((item) => (
                    <RequestItem key={item.id} item={item} />
                ))}
            </React.Fragment>
        );
    }
}

export default Requests;