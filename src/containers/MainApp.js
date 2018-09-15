import React, { Component } from 'react';
import { Router } from '@reach/router';

//page
import Login from '../pages/Login/Login';
import Homepage from '../pages/HomePage/HomePage';
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';

//style
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 355px;
    margin: 0 auto;
    padding: 20px;
`;


class MainApp extends Component {
    render() {
        return (
            <Container>
                <Router>
                    <Login path="login" />
                    <Profile path="profile" />
                    <Register path="register" />
                    <Homepage path="/" />
                </Router>
            </Container>
        );
    }
}

export default MainApp;