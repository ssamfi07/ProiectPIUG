// Contact.js

import React, {Component} from "react";
import Navbar from '../components/navbar'
import Form from 'react-bootstrap/Form';
import './styles.css'

// for email sending (max 500 per day)
import { send } from 'emailjs-com';

export default class Contact extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {form:
            {
                from_user: '',
                message: '',
                to_dev: 'simsafir@gmail.com'
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        const target = event.target;
        if(target.type === 'email')
        {
            this.setState({
                form: {from_user: target.value}
            });
        }
        else
        {
            this.setState({
                form:{message: target.value}
        });
        }
      };
    handleSubmit(event)
    {
        alert('A message was submitted: ' + this.state.form.message);
        event.preventDefault();
        send(
            'service_z559gie',
            'template_mo5q4m8',
            this.state.form,
            'user_vFuDrnCAk0Rhb3HyVtqjp'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
    }

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
                    <Form onSubmit = {this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your e-mail address</Form.Label>
                            <Form.Control type="email" placeholder="username@example.com" name = "from_user" value = {this.state.from_user} onChange = {this.handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your message</Form.Label>
                            <Form.Control name = "message" as="textarea" rows={4} value = {this.state.message} onChange = {this.handleChange}/>
                        </Form.Group>
                        <button class="btn btn-primary" type="submit">Send</button>
                    </Form>
                    </div>
                </header>
                <footer class="py-lg-5 bg-dark stick-bottom">
                    <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Music Shop 2021</p></div>
                </footer>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="js/scripts.js"></script>
            </body>
        </html>
        )
    }
}