import React, { Component } from 'react';
import { Link } from '@reach/router';

class HomePage extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="profile">Profile</Link>
                    <Link to="/">Home</Link>
                    <Link to="login">Login</Link>
                </nav>
                Home Page
            </div>
        );
    }
}

export default HomePage;