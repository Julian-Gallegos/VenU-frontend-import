import React from 'react';
import LogIn from './LogIn';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

class SignUp extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <h1>VenU</h1>
                    <Form>
                        <Form.Label>Sign Up</Form.Label>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Create Username</Form.Label>
                            <Form.Control type="username" placeholder="username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Create Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Router>
                            <Routes>
                                <Route
                                    exact path="/LogIn"
                                    element={<LogIn />}
                                >
                                </Route>
                            </Routes>
                        </Router>
                    </Form>
                </Container>
            </>
        )
    }
}

export default SignUp;
