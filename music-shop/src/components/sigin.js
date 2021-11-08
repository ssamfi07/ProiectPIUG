import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import './login.css'

class SignInForm extends Component 
{
    constructor() 
    {
        super();

        this.state = {
        email: "",
        password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) 
    {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        this.setState({
        [name]: value
        });
    }

    handleSubmit(event) 
    {
        event.preventDefault();

        console.log("The form was submitted with the following data:");
        console.log(this.state);
    }

    render() 
    {
        return (
        <div className="formCenter py-lg-3">
            <form className="formFields px-5" onSubmit={this.handleSubmit}>
            <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                E-Mail Address
                </label>
                <input
                type="email"
                id="email"
                className="formFieldInput"
                placeholder="Enter your email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                />
            </div>

            <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                Password
                </label>
                <input
                type="password"
                id="password"
                className="formFieldInput"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                />
            </div>

            <div className="formField">
                <button className="btn btn-primary">Sign In</button>{" "}
                <Link to="/register" className="formFieldLink">
                Create an account
                </Link>
            </div>

            <div className="socialMediaButton px-sm-5">
                <div className="facebookButton py-1">
                <FacebookLoginButton onClick={() => alert("Hello")} />
                </div>

                <div className="instagramButton py-1">
                <InstagramLoginButton onClick={() => alert("Hello")} />
                </div>

                <div className="googleButton py-1">
                <GoogleLoginButton onClick={() => alert("Hello")} />
                </div>
            </div>
            </form>
        </div>
        );
    }
}

export default SignInForm;
