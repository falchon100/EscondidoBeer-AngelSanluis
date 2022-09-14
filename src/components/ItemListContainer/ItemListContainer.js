import React from "react";
import { data } from "../mockData";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [producList, setProductList] = useState([]);
  const { categoryName } = useParams();
  console.log(categoryName);

  const filtrado = (info) => {
    if (categoryName) {
      setProductList(info.filter((info) => info.category == categoryName));
    } else {
      setProductList(info);
    }
  };

  useEffect(() => {
    getProducts.then((response) => {
      filtrado(response);
    });
  }, [categoryName]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });

  return (
    <>
      <p className="titulo">{greeting} </p>
      <ItemList lista={producList} />
    </>
  );
};
export default ItemListContainer;
