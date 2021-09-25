import React, { useEffect, useState } from 'react';
import Buycard from '../Addtocard/Buycard';
import { additemAll, getStrogedcart } from '../FackDB/FackBd';
import Product from '../Products/Product';
import "./Main.css";


const Main = () => {
 
    const [datas, setData] = useState([]);
    const [cartAdd, setCartAdd] = useState([]);
    const [searchProduct, setSearchProduct] = useState([]);

    const cardheandeallder = (product) => {
        const productAdd = [...cartAdd , product];
        setCartAdd(productAdd)
        additemAll(product.key)
    };

    useEffect(() => {
        fetch('./products.json')
            .then(resp => resp.json())
            .then(data => {
                setData(data)
                setSearchProduct(data)
            })
    }, [])

    useEffect(() => {
        const localStoragegetData = getStrogedcart();
        if (datas.length) {
        const setcart = [ ];
        for (const key in localStoragegetData) {
            const findproduct = datas.find(data => data.key === key);
            const qunitity = (localStoragegetData[key]);
                     findproduct.qunitity=qunitity;
                     setcart.push(findproduct);
            }
        setCartAdd(setcart)
    }
    }, [datas])

   
    const searchHander = (event) => {
       /*  search value
        console.log(event.target.value); */
     /*    all product json by usesatas
        console.log(datas); */
        const searchFilterData = datas.filter(data => data.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setSearchProduct(searchFilterData);
    }
    
    return (
        <>
        <input className="search-btn" onChange={searchHander} placeholder="Search Product" type="text"  id="" />
        <div className="conteaner">
         
            <div className="product-data">
                {
                    searchProduct.map(data=><Product key={data.key} product={data} cardheandeallder={cardheandeallder}></Product>)
                }
            </div>
            <div>
                <Buycard cartAdd={cartAdd}></Buycard>
            </div>
            </div>
            </>
    );
};

export default Main;