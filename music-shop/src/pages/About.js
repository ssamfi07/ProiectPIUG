// About.js

import React, {Component} from "react";
import Footer from "../components/footer";
import Navbar from '../components/navbar'

export default class About extends Component
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
                <header class="py-5">
                    <div class="container px-4 px-lg-5 my-5">
                        <div class="text-center text-black-50">
                            <h1 class="display-4 fw-bolder">About the project</h1>
                        </div>
                        <div class="text-left text-black-50">
                                <ul>
                                    <li>
                                        <p class="lead fw-normal">This project was a one-man effort</p>
                                    </li>
                                    <li>
                                        <p class="lead fw-normal">The purpose of this interface is to allow users to search and shop for music records</p>
                                    </li>
                                    <li>
                                        <p class="lead fw-normal">Being purely front-end, the functionalities that would require a back-end will not work</p>
                                    </li>
                                    <li>
                                        <p class="lead fw-normal">Still, field validation was included and some alerts that replace real functionalities</p>
                                    </li>
                                    <li>
                                        <p class="lead fw-normal">A customized bootstrap was used to personalize the appearance and element positioning</p>
                                    </li>
                                    <li>
                                        <p class="lead fw-normal">All assets used belong to the public domain, this app does not provide any royalties to the owners of the content possibly displayed</p>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </header>
                
                <Footer />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="js/scripts.js"></script>
            </body>
        </html>

        )
    }
}