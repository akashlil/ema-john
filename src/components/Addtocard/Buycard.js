import React from 'react';
import "./Buycard.css"

const Buycard = (props) => {
    let price = 0;
    let Qunitity = 0;
    for (const allproduct of props.cartAdd) {
       const  productQunitity = !allproduct.qunitity ? 1 : allproduct.qunitity;
        price =( price + allproduct.price) * productQunitity;
        Qunitity = Qunitity + productQunitity;
    }

    let shipping = 50;
    if ( price > 200 ) {
        shipping=100
    } 
    const tax = ((price / 100) * 10);
    const total = price + shipping + tax;
    return (
        <div className="add-to-cart">
            <div>
            <h1>Order Summary</h1>
                <p>Items ordered: {Qunitity}</p>
            <ul>
                    <li>Items : $ {price.toFixed(2) }</li>
                    <li>Shipping & Handling : $ { shipping.toFixed(2)}</li>
                    <li>Total  tax : $ { tax.toFixed(2)}</li>
                    <li>Order Total : $ { total.toFixed(2)}</li>
            </ul>
            <button className="card-btn">Review your order</button>
         </div>
        </div>
    );
};

export default Buycard;