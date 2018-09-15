import React, { Component } from 'react';

import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

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



const ButtonGroup = styled.div`
`

class RequestItem extends Component {
    render() {
        const { title } = this.props.item;
        return (
            <Container>
                <MatchingInfo>
                    <Avatar src="https://semantic-ui.com/images/avatar2/large/kristy.png" />
                    <Info>
                        <p><Icon name="envelope" />{title}</p>
                        <ButtonGroup>
                            <Button primary>Accept</Button>
                            <Button basic>Deline</Button>
                        </ButtonGroup>
                    </Info>
                </MatchingInfo>
            </Container>
        );
    }
}

export default RequestItem;