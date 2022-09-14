import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { data } from "../mockData";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producList, setProductList] = useState([]);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    getProducts
      .then((response) => {
        setProductList(response.find((prod) => prod.id === id));
      })
      .catch((error) => console.log(error));
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
  //Aca verifica si el producto existe y una vez que existe renderiza el componente
  return <>{producList && <ItemDetail lista={producList} />}</>;
};

export default ItemDetailContainer;
