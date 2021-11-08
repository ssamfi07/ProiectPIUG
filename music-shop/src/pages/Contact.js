// Contact.js

import React, {Component} from "react";
import Navbar from '../components/navbar'
import Form from 'react-bootstrap/Form';
import './styles.css'

var sendemail = require('sendemail')
var email = sendemail.email;

var person = {
  name : "Jenny",
  email: "your.name+test" + Math.random() + "@gmail.com", // person.email can also accept an array of emails
  subject:"Welcome to DWYL :)"
}

email('welcome', person, function(error, result){
  console.log(' - - - - - - - - - - - - - - - - - - - - -> email sent: ');
  console.log(result);
  console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - -')
})

export default class Contact extends Component
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
                <title>Contact</title>
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            </head>
            <body>
                <Navbar />
                <header class="bg-light py-5">
                    <div class="container px-4 px-lg-5 my-5 py-lg-5">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your e-mail address</Form.Label>
                            <Form.Control type="email" placeholder="username@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your message</Form.Label>
                            <Form.Control as="textarea" rows={4} />
                        </Form.Group>
                    </Form>
                    <button class="btn btn-primary" type="submit">Send</button>
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