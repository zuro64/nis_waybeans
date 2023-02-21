import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'


const style= {
    
    beanImg:{
        width:"30px",
        height:"20px"
    }
}
export default function navbar(){

    return (
        <Navbar style={{boxShadow: "0 15px 150px gray"}}  collapseOnSelect expand="lg" bg="light" variant="light">
        <Container  className=" py-3">
            <Nav>
                <div>
                    <Navbar.Brand className="charlesSebastian fs-1" href="#home">WaysBe<img style={style.beanImg} src="beans.png" alt="" />ns</Navbar.Brand>
                </div>
            </Nav>
            <Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Button className="me-2 py-1 px-5" variant="outline-success">Login</Button>{' '}
                        <Button className="me-2 py-1 px-5" variant="success">Register</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Nav>
        </Container>
      </Navbar>
      );
}