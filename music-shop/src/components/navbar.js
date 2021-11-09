// navbar.js

import React, {Component} from "react";
import '../pages/styles.css'
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";

import { GoogleLogout } from 'react-google-login';

import Metallica from '../../public/assets/fonts/PastorofMuppets.TTF'

const responseGoogle = (response) => 
{
    console.log(response);
}

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

export default class Navbar extends Component
{
    render()
    {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-black">
                    <div class="container px-4 px-lg-5">
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
                        <Button href = "/" variant="outline-light">Music Shop</Button>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li class="nav-item"><NavLink activeClassName="nav-link active" className="nav-link" aria-current="page" to = "/">Home</NavLink></li>
                                <li class="nav-item"><NavLink activeClassName="nav-link active" className="nav-link" to = "/about">About</NavLink></li>
                                <li class="nav-item"><NavLink activeClassName="nav-link active" className="nav-link" to = "/contact">Contact Us</NavLink></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="pages/allProducts.html">All Products</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="pages/popularItems.html">Popular Items</a></li>
                                        <li><a class="dropdown-item" href="pages/specialItems.html">Special Items</a></li>
                                        <li><a class="dropdown-item" href="pages/saleItems.html">Sale Items</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <button class="btn btn-primary" type="submit">
                                    <i class="bi-cart-fill me-1"></i>
                                    Cart
                                    <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                                </button>
                            </form>
                        </div>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li class="nav-item"><NavLink activeClassName="nav-link active" className="nav-link" to = "/login">Log In</NavLink></li>
                                <li class="nav-item"><NavLink activeClassName="nav-link active" className="btn btn-primary" to = "/register">Sign Up</NavLink></li>
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
                            </ul>
                    </div>
        </nav>
        )
    }
}