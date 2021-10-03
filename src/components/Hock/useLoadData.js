import { useEffect, useState } from "react";

const fetchData = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

const useLoadData = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetchData("./products.json").then((data) => setData(data));
  }, []);
  return [datas, setData];
};

export default useLoadData;
