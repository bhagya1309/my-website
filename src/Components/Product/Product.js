import React from "react";
import Button from "../UI/Button/Button";
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
      <Button>Add to Basket</Button>
    </div>
  );
}

export default Product;
