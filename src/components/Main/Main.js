import React, { useEffect, useState } from "react";
import Buycard from "../Addtocard/Buycard";
import { additemAll, getStrogedcart } from "../FackDB/FackBd";
import useCart from "../Hock/uesCart";
import useLoadData from "../Hock/useLoadData";
// import loadData from "../Hock/useLoadData";
import Product from "../Products/Product";
import "./Main.css";

const Main = () => {
  const [datas, setData] = useLoadData();
  const [cartAdd, setCartAdd] = useCart(datas);
  const [searchProduct, setSearchProduct] = useState([]);

  const cardheandeallder = (product) => {
    const sameProduct = cartAdd.find((cData) => cData.key === product.key);
    let newCart = [];
    if (sameProduct) {
      const ntSameProduct = cartAdd.filter((sp) => sp.key !== product.key);
      sameProduct.qunitity = sameProduct.qunitity + 1;
      newCart = [...ntSameProduct, sameProduct];
      setCartAdd(newCart);
    } else {
      product.qunitity = 1;
      newCart = [...cartAdd, product];
    }
    setCartAdd(newCart);
    additemAll(product.key);
  };

  useEffect(() => {
    setSearchProduct(datas);
  }, [datas]);

  const searchHander = (event) => {
    const searchFilterData = datas.filter((data) =>
      data.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchProduct(searchFilterData);
  };

  return (
    <>
      <input
        className="search-btn"
        onChange={searchHander}
        placeholder="Search Product"
        type="text"
        id=""
      />
      <div className="conteaner">
        <div className="product-data">
          {searchProduct.map((data) => (
            <Product
              key={data.key}
              product={data}
              cardheandeallder={cardheandeallder}
            ></Product>
          ))}
        </div>
        <div>
          <Buycard cartAdd={cartAdd}></Buycard>
        </div>
      </div>
    </>
  );
};

export default Main;
