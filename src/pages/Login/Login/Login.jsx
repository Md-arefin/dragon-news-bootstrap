import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0';

    
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        
        signIn(email, password)
        .then( result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from);
        })
        .catch(error => {
            console.log(error)
        })
        
    }


    return (
        <Container className='mx-auto w-50'>
            <h3>Please Login!!!</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Form.Text className="text-muted">

                </Form.Text>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-muted d-block">
                    Don't have an Account?
                    <Link to='/register'>
                        Register
                    </Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;