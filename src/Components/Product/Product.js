import React from "react";
import "./Product.css";

function Product({ id, title, description, image, price }) {
  return (
    <div className="product">
      <div className="product__info">
        <h5>{title}</h5>
        <p>{description}</p>
        <p className="product__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="display-sample" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
