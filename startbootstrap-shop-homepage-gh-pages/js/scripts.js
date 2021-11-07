/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

window.onload = function() {
    changeImage();
  };

function changeImage() 
{
    var itemPics = document.getElementsByClassName("card-img-top");
    var length = itemPics.length;
    for(var i = 0; i < length; i++)
    {
        itemPics[i].src = "assets/item" + i + ".png";
    }
}