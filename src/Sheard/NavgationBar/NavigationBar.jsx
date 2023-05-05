import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error));
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <Link className='px-2' to='/category/0'>
                                Home
                            </Link>
                            
                            <Link className='px-2' to='/about'>
                                About
                            </Link>

                            <Link className='px-2' to='/Career'>
                                Career
                            </Link>

                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2.5rem' }}></FaUserCircle>

                           }

                            {
                                user ? <Button 
                                onClick={handleLogOut}
                                variant="secondary">Logout</Button> :

                                    <Link to='/login'>
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;