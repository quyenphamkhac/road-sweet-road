import React, { Component } from 'react';
import { driverRef } from '../../firebase/firebase';
//style
import styled from 'styled-components';
import { Form, Button, Select, Checkbox } from 'semantic-ui-react'


const Title = styled.div`
    color: #000;
    margin: 0 auto;
    background: white;
    padding: 15px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    margin-top: 20px;
`;

const FormRegister = styled.div`
    margin: 0 auto;
    color: white;
    font-weight: bold;
    margin-top: 20px;
`


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: "",
                password: "",
                address: "",
                schoolAddress: "",
                type: "DRIVER",
                isProcessing: false,
            }
        }
    }

    changeTextHandler = (event) => {
        const { name, value } = event.target;
        const { user } = this.state;
        user[name] = value;
        this.setState({ user });
    }

    registerSubmitHandler = (event) => {
        event.preventDefault();
        const { user } = this.state;
        driverRef.push(user);
    }

    render() {
        const options = [
            { key: 'd', text: 'Driver', value: 'DRIVER' },
            { key: 'u', text: 'User', value: 'USER' },
        ];
        return (
            <div>
                <Title>Register new account</Title>
                <FormRegister>
                    <Form>
                        <Form.Input label='Username' placeholder='Username' />
                        <Form.Input label='Password' type="password" placeholder='Password' />
                        <Form.Input label='Address' placeholder='Your address...' />
                        <Form.Input label='School address' placeholder='Your school address...' />
                        <Form.Field control={Select} label='You are' options={options} placeholder='You are' />
                        <Form.Field control={Checkbox} label={<label>I agree to the Terms and Conditions</label>} />
                        <Button secondary fluid>Submit</Button>
                    </Form>
                </FormRegister>
            </div>
        );
    }
}

export default Register;