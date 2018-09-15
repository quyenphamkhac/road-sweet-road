import React, { Component } from 'react';
import styled from 'styled-components';

import { Button, Icon } from 'semantic-ui-react';

const Container = styled.div`
    background: white;
    margin: 5px 0;
    border-radius: 2px;
    width: 100%;
    padding-left: 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-size: 14px;
`

const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`

const ButtonGroup = styled.div`
    width: 100%;
    margin-top: 20px;
`

const Info = styled.div`
    margin-top: 20px;
    text-align: left;
    width: 100%;
`

class Profile extends Component {
    render() {
        const { isRequested, info } = this.props;
        return (
            <Container>
                <Avatar src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/19106026_294392867697550_7365863854017209596_n.jpg?_nc_cat=0&oh=2b8c522b0e1cc19ffb68ca275c0aec89&oe=5C17DD54" />
                <ButtonGroup>
                    {isRequested ? 
                        <Button primary fluid>Send request</Button> :
                        <Button secondary fluid>Cancel request</Button>}
                </ButtonGroup>
                    
                <Info>
                    <p><Icon name="address card outline"/>Name: {info.name}</p>
                    <p><Icon name="phone"/>Phone: {info.phone}</p>
                    <p><Icon name="facebook"/>Facebook: {info.facebook}</p>
                    <p><Icon name="map marker"/>Address: {info.address}</p>
                    <p><Icon name="university"/> School: {info.school}</p>
                    <p><Icon name="calendar alternate outline"/>Schedule: {info.schedule}</p>
                    <p><Icon name="clock"/>Time: {info.time}</p>
                    <p><Icon name="edit"/>Bio: {info.bio}</p>
                </Info>
            </Container>
        );
    }
}

export default Profile;