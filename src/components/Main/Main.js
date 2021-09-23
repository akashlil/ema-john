import React, { useEffect, useState } from 'react';
import Buycard from '../Addtocard/Buycard';
import Product from '../Products/Product';
import "./Main.css";


const Main = () => {
 
    const [datas, setData] = useState([]);
    const [cartAdd, setCartAdd] = useState([]);

    const cardheandeallder = (product) => {
        const productAdd = [...cartAdd , product];
        setCartAdd(productAdd)
    };

    useEffect(() => {
        fetch('./products.json')
            .then(resp => resp.json())
            .then(data=>setData(data))
    }, [])

    return (
        <div className="conteaner">
            <div className="product-data">
                {
                    datas.map(data=><Product key={data.key} product={data} cardheandeallder={cardheandeallder}></Product>)
                }
            </div>
            <div>
                <Buycard cartAdd={cartAdd}></Buycard>
            </div>
        </div>
    );
};

export default Main;