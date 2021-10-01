import React from 'react'
import { Container, Navbar,Nav, NavDropdown, Form } from 'react-bootstrap'
import {ButtonContainer, SearchComponent, NavWrapper, LinkWrapper, DropDownWrapper} from './styled.js'
import logo from "../logo.jpg"
import '../App.css'

const NavbarComponent = () => {
    return (
        <>
    <NavWrapper collapseOnSelect expand="lg"  variant="dark">
    <Container style={{ minWidth: "100%" }}>
    <Navbar.Brand href="/" className='navbar navbar-dark navbar-expand-md mx-5'>
                <img
                alt=""
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                />{' '}PULLOVER
                </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <LinkWrapper className='nav-link' href="/">Products  </LinkWrapper>
        <LinkWrapper className='nav-link' href="#pricing">Pricing</LinkWrapper>
        <DropDownWrapper title="HEKP" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Track Orders</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Order Cancellation</NavDropdown.Item>
            <NavDropdown.Item href="https://www.facebook.com/">Help</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
        </DropDownWrapper>
        </Nav>
        <Nav>
            <Form className="d-flex">
                <SearchComponent
                    type="search"
                    placeholder="Search Products, Brands and Categories"
                    className="mr-2 search"
                    aria-label="Search"
                />
                <ButtonContainer variant="outline-dark">Search</ButtonContainer>
                
                
        </Form>
        <LinkWrapper className='nav-link' href="/cart">
            <ButtonContainer variant="outline-dark">
                <span className="mr-2"><i className="fas fa-shopping-cart"></i> </span>
                Cart
            </ButtonContainer> 
        </LinkWrapper>
        <LinkWrapper className='nav-link' href="https://www.facebook.com/">
            <ButtonContainer variant="outline-dark"><i className="fab fa-facebook fa-1x"></i></ButtonContainer>
        </LinkWrapper>
        <LinkWrapper className='nav-link' href="https://www.instagram.com/">
            <ButtonContainer variant="outline-dark"><i className="fab fa-instagram fa-1x"></i></ButtonContainer>
        </LinkWrapper>

        </Nav>
    </Navbar.Collapse>
    </Container>
    </NavWrapper>
        
        </>
        )
    }

   


export default NavbarComponent