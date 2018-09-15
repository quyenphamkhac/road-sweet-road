import React, { Component } from 'react';

import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import moment from 'moment';

import { Link } from '@reach/router';

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


const MatchingInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Avatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 5px;
`

const Info = styled.div`
    margin-left: 20px;
`

const TextUnderline = styled.p`
    text-decoration: underline;
`

class MatchingItem extends Component {
    render() {
        const { title, location,time } = this.props.item;
        const timeString = moment(time).fromNow();
        return (
            <Container>
                <MatchingInfo>
                    <Avatar src="https://semantic-ui.com/images/avatar2/large/kristy.png" />
                    <Info>
                        <p><Icon name="edit" />{title}</p>
                        <TextUnderline><Icon name="map marker alternate"/>{location}</TextUnderline>
                        <p><Icon name="clock"/>{timeString}</p>
                    </Info>
                </MatchingInfo>
                <SeeMore>
                    <Icon name="angle double right" size="large" />
                    <Link to="/app/profile">
                        <Text>See profile</Text>
                    </Link> 
                </SeeMore>
            </Container>
        );
    }
}

export default MatchingItem;