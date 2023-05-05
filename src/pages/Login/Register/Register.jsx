import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {

    const [accepted, setAccepted] = useState(false);

    const { createUser,  updateUserProfile } = useContext(AuthContext);

    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password);


        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            updateUserProfile( {
                displayName:name, photoURL: photo
            } )
        })
        .catch(error =>{
            console.log(error)
        })
    } 

    const handleAccepted = (event) =>{
            setAccepted(event.target.checked)
    }

    return (
        <Container className='mx-auto w-50'>
            <h3>Please Register!!!</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter your photo link" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    <Form.Check 
                    onClick={handleAccepted}
                   
                    type="checkbox" 
                    name='accept' 
                    label= {<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
                </Form.Group>



                <Button 
                 disabled={!accepted}
                variant="primary" 
                type="submit">
                    SignUp
                </Button>

                <br />

                <Form.Text className="text-success">

                </Form.Text>

                <br />

                <Form.Text className="text-danger">

                </Form.Text>
                <Form.Text className="text-muted d-block">
                    Already have an Account?
                    <Link to='/login'>
                        Login
                    </Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;