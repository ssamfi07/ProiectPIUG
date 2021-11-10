// SpecialItems.js

import React from "react";
import ItemCard from "../components/itemCard";
import CustomNavbar from '../components/navbar'
import dataFetcher from "../services/dataFetcher";
import Footer from "../components/footer";

let data = dataFetcher();
export default class SpecialItems extends React.Component
{
    render()
    {
        let itemsArray = [];
        for(let i = 0; i < 12; ++i)
        {
            itemsArray.push(data[i].price >= 100 ? <ItemCard  data = {data[i]}/>: null)
        }
        return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Special Items</title>
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            </head>
            <body>
                <CustomNavbar />
                <section class="py-5">
                    <div class="container px-4 px-lg-5 mt-5">
                        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {itemsArray}
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