import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const HeaderContainer = styled.div`
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
    margin-top: 20px;
    box-shadow: 0 4px 0px -2px gray;
`;

class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <Icon name="content"/>
                <span>Sweet Road</span>
                <Icon name="paper plane outline"/>
            </HeaderContainer>
        );
    }
}

export default Header;