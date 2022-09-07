import React from "react";
import { Itemcount } from "../ItemCount/ItemCount.js";
import { data } from "../mockData";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
const ItemListContainer = ({ greeting }) => {
  const [producList, setProductList] = useState([]);
  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    });
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  return (
    <>
      <ItemList lista={producList} />
    </>
  );
};
export default ItemListContainer;
