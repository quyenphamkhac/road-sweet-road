import React, { Component } from 'react';
import { Button, Form, Divider } from 'semantic-ui-react'
import styled from 'styled-components';
import { Link } from '@reach/router';

const Container = styled.div`
    color: #000;
    margin: 0 auto;
    background: white;
    padding: 15px;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    margin-top: 20px;
`

const FormLogin = styled.div`
    font-size: 24px;
`

const SignUp = styled.div`
    font-size: 15px;
    margin-top:20px;
`
class Login extends Component {
    render() {
        return (
            <Container>
                <FormLogin>
                    <p>Login</p>
                    <Form>
                        <Form.Input placeholder='Username' required />
                        <Form.Input type="password" placeholder='Password' required />
                        <Button primary fluid>
                            <Link style={{color: "#fff"}} to="/app">Login</Link>
                        </Button>
                    </Form>
                </FormLogin>
                <Divider />
                <SignUp>
                    <p>Don't have a account?
                        <Link to="/register">Sign Up</Link>
                    </p>
                </SignUp>
            </Container>
        );
    }
}

export default Login;