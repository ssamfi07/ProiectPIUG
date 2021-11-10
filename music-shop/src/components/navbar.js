// navbar.js

import React, {Component} from "react";
import { Navbar, Nav,  NavDropdown}from 'react-bootstrap';
import { NavLink, Link} from "react-router-dom";

import { GoogleLogout } from 'react-google-login';

import Metallica from '../../public/assets/fonts/PastorofMuppets.TTF'

const responseGoogle = (response) => 
{
    console.log(response);
}

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

export default class CustomNavbar extends Component
{
    render()
    {
    return (
        <Navbar  sticky="top"
            id="navbar"
            bg="light"
            expand="lg"
            className="navbar navbar-dark bg-black "
            collapseOnSelect={true}
            >
            <style type = "text/css">
                {`
                    .btn-outline-light
                    {
                        color: rgba(255, 255, 255, 0.55);
                        border-width: 0;
                    }
                    .btn-outline-light:hover
                    {
                        background-color: var(--purple-1);
                        color: #fff;
                        border-color: #fff;
                    }
                `}
            </style>
            <Navbar.Brand className = "btn btn-outline-light" href = "/" >Music Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className = "justify-content-md-center">
                <Nav className="ml-auto">
                    <NavLink eventKey = "1" activeClassName="nav-link active" className="nav-link" aria-current="page" to = "/">Home</NavLink>
                    <NavLink activeClassName="nav-link active" className="nav-link" to = "/about">About</NavLink>
                    <NavLink activeClassName="nav-link active" className="nav-link" to = "/contact">Contact Us</NavLink>
                    <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Shop"
                            menuVariant="dark"
                            className = "bg-black"
                    >
                        <NavLink className="nav-link" aria-current="page" to = "/allitems">All Items</NavLink>
                        <NavDropdown.Divider />
                        <NavLink className="nav-link" aria-current="page" to = "/specialItems">Special Items</NavLink>
                        <NavLink className="nav-link" aria-current="page" to = "/saleItems">Sale Items</NavLink>
                    </NavDropdown>
                    <form class="d-flex ms-lg-5">
                        <button class="btn btn-primary" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                        {false && <GoogleLogout
                            clientId={clientId}
                            buttonText="Logout"
                            onSuccess={responseGoogle}
                            style = {
                                {
                                    display: "hidden"
                                }
                            }
                        />}
                        <NavLink activeClassName="nav-link active" className="nav-link d-flex ms-lg-5" to = "/login">Log In</NavLink>
                        <NavLink activeClassName="nav-link active" className="btn btn-primary align-self-start" to = "/register">Sign Up</NavLink>
                        
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}