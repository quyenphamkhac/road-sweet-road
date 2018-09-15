import React, { Component } from 'react';
import { Router } from '@reach/router';

//page
import Login from '../pages/Login/Login';
import Homepage from '../pages/HomePage/HomePage';
import Profile from '../pages/Profile/Profile';

class MainApp extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Login path="login" />
                    <Profile path="profile" />
                    <Homepage path="/" />
                </Router>
            </div>
        );
    }
}

export default MainApp;