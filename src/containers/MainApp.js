import React, { Component } from 'react';
import { Router } from '@reach/router';

//page
import Login from '../pages/Login/Login';
import Homepage from '../pages/HomePage/HomePage';
import Register from '../pages/Register/Register';

//style
import styled from 'styled-components';

const Container = styled.div`
    width: 355px;
    margin: 0 auto;
    position: relative;
`;


class MainApp extends Component {
    render() {
        return (
            <Container>
                <Router>
                    <Login path="login" />
                    <Register path="register" />
                    <Homepage path="app/*" />
                </Router>
            </Container>
        );
    }
}

export default MainApp;