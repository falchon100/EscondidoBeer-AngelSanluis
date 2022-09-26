import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { data } from "../mockData";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const db = getFirestore();

  const queryDoc = doc(db, "items", "SGx05u7RLuAiA3pyGgaO");
  getDoc(queryDoc).then((res) => {
    console.log(res.data());
  });

  const [producList, setProductList] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });

    getProducts
      .then((response) => {
        setProductList(response.find((prod) => prod.id === id));
      })
      .catch((error) => console.log(error));
  }, [id]); // Aca esta el parametro que falto.

  //Aca verifica si el producto existe y una vez que existe renderiza el componente
  return <>{producList && <ItemDetail lista={producList} />}</>;
};

export default ItemDetailContainer;
