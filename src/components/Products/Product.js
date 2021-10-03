import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, price, seller, img, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>by : {seller}</p>
        <h5>$ : {price}</h5>
        <p>
          <span>only {stock} left in stock - order soon</span>
        </p>
        {props.children ? (
          props.children
        ) : (
          <button
            onClick={() => props.cardheandeallder(props.product)}
            className="card-btn"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
