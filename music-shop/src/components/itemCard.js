// itemCard.js

import React from "react";
import { Link } from "react-router-dom";

export default class ItemCard extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const data = this.props.data;
        return(
            <div class="col mb-5">
                <div class="card h-100">
                    {data.badge ? <div class="badge bg-dark text-white position-absolute" style={{top: 0.5, right: 0.5}}>Sale</div> : null}
                    <img class="card-img-top" src={data.image} alt="..."/>
                    <div class="card-body p-4">
                        <div class="text-center">
                            <Link to = {`/item/${data.id}`} className = "nav-link"><span><h5 class="fw-bolder">{data.name}</h5></span></Link>
                            <div class="d-flex justify-content-center small text-warning mb-2">
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                            </div>
                            {data.oldPrice ? <span class="text-muted text-decoration-line-through">${data.oldPrice}  </span> : null}
                              ${data.price}
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 ">
                        <div class="text-center"><a class="btn btn-primary mt-auto" href="#">Add to cart</a></div>
                    </div>
                </div>
            </div>
        );
    }
}