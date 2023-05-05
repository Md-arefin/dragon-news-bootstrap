import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheard/Footer/Footer';
import Header from '../Sheard/Header/Header';
import LeftNav from '../Sheard/LeftNav/LeftNav';
import NavigationBar from '../Sheard/NavgationBar/NavigationBar';
import RightNav from '../Sheard/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                       <Outlet/>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;