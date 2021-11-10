// Home.js

import React from "react";
import ItemCard from "../components/itemCard";
import Navbar from '../components/navbar'
import dataFetcher from "../services/dataFetcher";
import Footer from "../components/footer";

var k;
let data = dataFetcher();
export default class Home extends React.Component
{
    render()
    {
        {k = 0}
        return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Homepage</title>
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            </head>
            <body>
                <Navbar />
                <header class="bg-dark py-5">
                    <div class="container px-4 px-lg-5 my-5">
                        <div class="text-center text-white">
                            <h1 class="display-4 fw-bolder">Shop music in style</h1>
                            <p class="lead fw-normal text-white-50 mb-0">With this online music shop</p>
                        </div>
                    </div>
                </header>
                <section class="py-5">
                    <div class="container px-4 px-lg-5 mt-5">
                        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            <ItemCard  data = {data[k++]}/>
                            <ItemCard  data = {data[k++]}/>
                            <ItemCard  data = {data[k++]}/>
                            <ItemCard  data = {data[k++]}/>
                            <ItemCard  data = {data[k++]}/>
                            <ItemCard  data = {data[k++]}/>
                            <ItemCard  data = {data[k++]}/>
                            <ItemCard  data = {data[k++]}/>
                        </div>
                    </div>
                </section>
                <Footer />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="js/scripts.js"></script>
            </body>
        </html>
        )
    }
}