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

const MapView = styled.img`
    width: 100%;
    border: 1px solid gray;
`

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isRequested: false,
        }
    }

    changeRequestHandler = () => {
        this.setState({ isRequested: !this.state.isRequested });
    }

    render() {
        const { info } = this.props;
        const { isRequested } = this.state;
        return (
            <Container>
                <Avatar src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/19106026_294392867697550_7365863854017209596_n.jpg?_nc_cat=0&oh=2b8c522b0e1cc19ffb68ca275c0aec89&oe=5C17DD54" />
                <ButtonGroup>
                    {!isRequested ? 
                        <Button primary fluid onClick={this.changeRequestHandler}>Send request</Button> :
                        <Button secondary fluid onClick={this.changeRequestHandler}>Cancel request</Button>}
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
                    <p><Icon name="map signs"/>Estimated Trip: {info.duration}</p>
                    <MapView src="https://cnet2.cbsistatic.com/img/H_zPLL8-QTZOLxJvgHQ1Jkz0EgY=/830x467/2013/07/10/f0bcef02-67c2-11e3-a665-14feb5ca9861/maps_routemap.png" />
                </Info>
            </Container>
        );
    }
}

export default Profile;