import React, { Component } from 'react';
import JourneyItem from './JourneyItem';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const FloatingButton = styled.div`
    position: absolute;
    top: 500px;
    right: 20px;
`

class Journeys extends Component {
    render() {
        const { journeys } = this.props;
        return (
            <React.Fragment>
                {journeys.map((item) => (
                    <JourneyItem key={item.id} item={item} />
                ))}
                <FloatingButton>
                    <Button circular color='white' icon='add' />
                </FloatingButton>
            </React.Fragment>
        );
    }
}

export default Journeys;