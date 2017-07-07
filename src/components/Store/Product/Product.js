import React from "react";
import './Product.css';
import {Link} from 'react-router-dom';

export default function Product( { id, title, img, price, addToCart } ) {
  return (
    <div id="StoreProduct__container">
      <Link to={`/details/${id}`}>
      <img src={ img } alt="Product" width="200px" height="139.39px" />
      </Link>
      <div id="StoreProduct__details">
        <div id="StoreProduct__title">
          <Link className="StoreProduct__navLink" to={`/details/${id}`}>
          <span> { title } </span>
          </Link>
        </div>
        <div id="StoreProduct__addToCart" onClick={ () => { addToCart( id ) } }>
          <span> ${ price } </span>
          <span> Add to Cart </span>
        </div>
      </div>
    </div>
  )
}