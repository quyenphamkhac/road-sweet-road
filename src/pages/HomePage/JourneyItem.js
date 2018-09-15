import React, { Component } from 'react';

import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div`
    background: white;
    margin: 5px 0;
    border-radius: 2px;
    width: 100%;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    font-size: 14px;
`
const SeeMore = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`

const Text = styled.p`
    font-size: 12px;
    text-decoration: underline;
`


const JourneyInfo = styled.div``

class JourneyItem extends Component {
    render() {
        const { title, time } = this.props.item;
        const timeString = moment(time).fromNow();
        return (
            <Container>
                <JourneyInfo>
                    <p><Icon name="edit" /> {title}</p>
                    <p><Icon name="calendar alternate outline" /> {timeString}</p>
                </JourneyInfo>
                <SeeMore>
                    <Icon name="angle double right" size="large" />
                    <Text>See detail</Text>
                </SeeMore>
            </Container>
        );
    }
}

export default JourneyItem;