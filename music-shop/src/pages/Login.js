// Login.js

import React, {Component} from "react";
import CustomNavbar from '../components/navbar'
import SignInForm from "../components/sigin";
import Footer from "../components/footer";

// const responseGoogle = (response) => 
// {
//     console.log(response);
// }

// const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

export default class Login extends Component
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
                <title>Login</title>
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            </head>
            <body>
                <CustomNavbar />
                <header class="bg-light">
                    <div class="container px-5 px-lg-5 my-5">
                        <div class="text-center text-black-50">
                            <h1 class="display-4 fw-bolder">Log in to buy music!</h1>
                            
                        </div>
                        <SignInForm />
                            {/* <GoogleLogin
                                clientId={clientId}
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                style = 
                                {
                                    {display: "hidden"}
                                }
                            /> */}
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