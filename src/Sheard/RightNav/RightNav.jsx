import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from '../../assets/bg.png'


const RightNav = () => {
    return (
        <div >
            <h3 className='mb-3'>Login with</h3>
            <Button className='mb-2 ' variant="outline-primary"> <FcGoogle /> Login with Google</Button>
            <Button variant="outline-primary"> <FaGithub /> Login with Github</Button>

            <div className='mt-5'>
                <h4 className='mb-3'>Find  Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>

            <div className='position-relative'>
                <img src={bg} alt="" />

                <div className='text-white relative top-5 position-absolute top-50 start-0 bottom-0 px-5'>
                    <h2>Create an <br />
                        Amazing <br />
                        Newspaper
                    </h2>

                    <p>
                    Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RightNav;