// Login.js

import React, {Component} from "react";
import Navbar from '../components/navbar'
import './styles.css'

import SignUpForm from "../components/signup";

export default class Register extends Component
{
    // constructor(props) {
    //     super(props);
    // }
    render()
    {
        return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>About</title>
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            </head>
            <body>
                <Navbar />
                <header class="bg-light py-4">
                    <div class="container px-5 px-lg-5 my-5 py-lg-3">
                        <div class="text-center text-info">
                            <h1 class="display-4 fw-bolder">Join our club!</h1>
                            
                        </div>
                        <SignUpForm />
                        </div>
                </header>
                


                <footer class="py-5 bg-dark">
                    <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Music Shop 2021</p></div>
                </footer>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="js/scripts.js"></script>
            </body>
        </html>

        )
    }
}