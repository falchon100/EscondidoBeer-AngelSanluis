import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { data } from "../mockData";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producList, setProductList] = useState({});
  const { id } = useParams();
  const db = getFirestore();

  const queryDoc = doc(db, "items", id);

  getDoc(queryDoc)
    .then((res) => {
      setProductList({ id: res.id, ...res.data() });
    })
    .catch((err) => console.log(err));

  //Aca verifica si el producto existe y una vez que existe renderiza el componente
  return <>{producList && <ItemDetail lista={producList} />}</>;
};

export default ItemDetailContainer;
