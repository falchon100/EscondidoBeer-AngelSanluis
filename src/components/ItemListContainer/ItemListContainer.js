import React from "react";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [producList, setProductList] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    getProducts();
  }, [categoryName]);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "items");

    if (categoryName) {
      const queryFilter = query(
        querySnapshot,
        where("category", "==", categoryName)
      );
      getDocs(queryFilter).then((response) => {
        const data = response.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setProductList(data);
      });
    } else {
      getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((product) => {
            return { id: product.id, ...product.data() };
          });
          setProductList(data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <p className="titulo">{greeting} </p>
      <Link to={"/cart"}>Carrito</Link>
      <ItemList lista={producList} />
    </>
  );
};
export default ItemListContainer;

/* const getProducts = () =>{
  const db = getFirestore();
  const querySnapshot = collection(db, item);
  if (categoryName) {
    const queryFilter = query(querySnapshot, where("category", "==", categoryName))
    getDocs(queryFilter)
      .then((response)=> {
      const data = response.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    })
    setProductList(data)
  }).catch((err)=> console.log(err))
  }else {
    getDocs(querySnapshot)
      .then((response)=> {
      const data = response.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    })
    setProductList(data)
  }).catch((err)=> console.log(err))
  }

} */
