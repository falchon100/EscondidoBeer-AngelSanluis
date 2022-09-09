import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { data } from "../mockData";

const ItemDetailContainer = () => {
  const [producList, setProductList] = useState([]);
  useEffect(() => {
    getProducts
      .then((response) => {
        setProductList(response.find((prod) => prod.id === 1));
      })
      .catch((error) => console.log(error));
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  return (
    <>
      <ItemDetail lista={producList} />
    </>
  );
};

export default ItemDetailContainer;
