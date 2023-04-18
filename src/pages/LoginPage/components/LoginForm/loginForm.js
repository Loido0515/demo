import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

const LoginForm = ({onSubmit}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClicked = (e) => {
        e.preventDefault();
        if(onSubmit){
            onSubmit(username, password);
        }
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Control
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                    type="email"
                    placeholder="Enter email"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    type="password"
                    placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleLoginClicked}>
                Đăng nhập
            </Button>
        </Form>
    );
};


export default LoginForm;