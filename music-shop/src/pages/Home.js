// Home.js

import React from "react";
import ItemCard from "../components/itemCard";
import Navbar from '../components/navbar'
import './styles.css'

import Resizer from "react-image-file-resizer";

let k = 0;
let imagesArray = {}

// normally arrays are fetched from db

let namesArray = ["Slayer", "Megadeth", "Anthrax", "Metallica", "Death", "Napalm Death", "Jinjer", "Truda"];

let pricesArray = [40.00, 18.00, 25.00, 40.00, 25.00, 120.00, 18.00, 40.00];

let oldPricesArray = [0, 20.00, 50.00, 0, 50.00, 0, 0, 0];

let badgesArray = [0, 1, 1, 0, 1, 0, 1, 0];

let data = [];

function createData()
{
    for(let i = 0; i < 8; ++i)
    {
        data[i] = {
            image: imagesArray[i], 
            name: namesArray[i], 
            price: pricesArray[i],
            oldPrice: oldPricesArray[i],
            badge: badgesArray[i] 
        };
    }
}

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      450,
      300,
      "PNG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64",
      450,
      300
    );
  });

async function images()
{
    for (let i = 0; i < 8; ++i)
    {
        imagesArray[i] = process.env.PUBLIC_URL + '/assets/item' + k++ + '.png';
        // imagesArray[i] = await resizeFile(imagesArray[i]);
    }
}

export default class Home extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
            data: []
          };
    }

    componentWillMount()
    {
        k = 0;
        images();
        k = 0;
        createData();
        console.log(imagesArray);
        this.setState(
            {
                data: data
            }
        )
    }

    render()
    {
        console.log(this.state.data);
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
                            <ItemCard  data = {this.state.data[k++]}/>
                            <ItemCard  data = {this.state.data[k++]}/>
                            <ItemCard  data = {this.state.data[k++]}/>
                            <ItemCard  data = {this.state.data[k++]}/>
                            <ItemCard  data = {this.state.data[k++]}/>
                            <ItemCard  data = {this.state.data[k++]}/>
                            <ItemCard  data = {this.state.data[k++]}/>
                            <ItemCard  data = {this.state.data[k++]}/>
                        </div>
                    </div>
                </section>
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