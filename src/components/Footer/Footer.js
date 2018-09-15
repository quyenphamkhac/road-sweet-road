import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { Link } from '@reach/router';

const FooterContainer = styled.div`
    color: #000;
    margin: 0 auto;
    background: white;
    padding: 15px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    display: flex;
    justify-content: space-between;
`;

class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <Link to="/app">
                    <Icon name="unordered list"/>
                </Link>
                <Link to="matching">
                    <Icon name="motorcycle"/>
                </Link>
                <Link to="request">
                    <Icon name="address card"/>
                </Link>
                {/* <Icon name="setting"/> */}
            </FooterContainer>
        );
    }
}

export default Footer;