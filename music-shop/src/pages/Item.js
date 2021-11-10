// Item.js

import React from "react";
import Footer from "../components/footer";
import CustomNavbar from '../components/navbar'
import dataFetcher from "../services/dataFetcher";
import idFetcher from "../services/idFetcher";
import ItemCard from "../components/itemCard";
import Carousel from 'react-bootstrap/Carousel'

let data = dataFetcher();
export default class Item extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            path: location.pathname,
            id: idFetcher(location.pathname, "id")
        }
        this.id = this.state.id;
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        if(this.props.location !== prevProps.location)
        {
            console.log(location.pathname);
        }
    }

    render()
    {
        let k = 0;
        console.log(this.state.path);
        return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Item</title>
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            </head>
            <body>
                <CustomNavbar />
                 <section class="py-5">
                    <div class="container px-4 px-lg-5 my-5">
                        <div class="row gx-4 gx-lg-5 align-items-center">
                            <div class="col-md-6">
                                <img class="card-img-top mb-5 mb-md-0" src={data[this.id].image} alt="..." />
                            </div>
                            <div class="col-md-6">
                            
                                <div class="small mb-1">Product id: {this.id}</div>
                                <h1 class="display-5 fw-bolder">{data[this.id].name}</h1>
                                {data[this.id].badge ? <div class="badge bg-danger text-white" style={{top: 0.5, right: 0.5}}>Sale</div> : null}
                                <div class="fs-5 mb-5">
                                    {data[this.id].oldPrice ? <span class="text-decoration-line-through">${data[this.id].oldPrice}</span> : null}
                                    <span>${data[this.id].price}</span>
                                </div>
                                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                                <div class="d-flex">
                                    <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{width: '3rem'}} />
                                    <button class="btn btn-primary flex-shrink-0" type="button">
                                        <i class="bi-cart-fill me-1"></i>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-5 bg-light">
                    <div class="container px-4 px-lg-5 mt-5">
                        <h2 class="fw-bolder mb-4">Related products</h2>
                        {/* <Carousel variant = "dark">
                            <Carousel.Item>
                                <ItemCard data = {data[k++]}/>
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <ItemCard data = {data[k++]}/>
                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item >
                            <Carousel.Item>
                                <ItemCard data = {data[k++]}/>
                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel> */}
                        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            <ItemCard data = {data[k++]}/>
                            <ItemCard data = {data[k++]}/>
                            <ItemCard data = {data[k++]}/>
                            <ItemCard data = {data[k++]}/>
                        </div>
                    </div>
                </section>
                <Footer />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            </body>
        </html>

        )
    }
}