import { useState } from "react";
import { useEffect } from "react";
import { getStrogedcart } from "../FackDB/FackBd";
import useLoadData from "./useLoadData";

const useCart = (product) => {
  const [cartAdd, setCartAdd] = useState([]);
  useEffect(() => {
    const localStoragegetData = getStrogedcart();
    if (product?.length) {
      const setcart = [];
      for (const key in localStoragegetData) {
        const findproduct = product.find((data) => data.key === key);
        const qunitity = localStoragegetData[key];
        findproduct.qunitity = qunitity;
        setcart.push(findproduct);
      }
      setCartAdd(setcart);
    }
  }, [product]);
  return [cartAdd, setCartAdd];
};

export default useCart;
