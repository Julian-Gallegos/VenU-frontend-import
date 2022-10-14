import React from 'react';
import AuthLogIn from './AuthLogIn';
import AuthLogOut from './AuthLogOut';
import Profile from './Profile';
// import SignUp from './SignUp';
// import ForgotPassword from './ForgotPassword';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Navigate } from 'react-router-dom';
import {Link} from 'react-router-dom';


class LogIn extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <h1>VenU</h1>
                    <AuthLogIn />
                    <AuthLogOut />
                    <Profile />
                    {this.props.redirectToProfile() ? <Navigate to={`/userprofile`} /> : <></>}
                    {/* <Form>
                        <Form.Label>Log In</Form.Label>
                        <Form.Group className="mb-3" controlId="formUserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign In
                        </Button>
                        <Button variant="secondary" type="submit">
                            Sign In With Google
                        </Button>
                        <Link to="/signup" className="link" style={{ color: "black" }} >Sign Up</Link>
                    </Form> */}
                </Container>
            </>
        )
    }
}

export default LogIn;
