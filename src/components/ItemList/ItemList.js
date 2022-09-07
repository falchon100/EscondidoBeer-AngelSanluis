import React from "react";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";

export const ItemList = ({ lista }) => {
  console.log(lista);
  return (
    <>
      <div className="lista">
        {lista.map((product) => (
          <Item
            key={product.id}
            title={product.title}
            precio={product.precio}
            img={product.img}
          />
        ))}
      </div>
    </>
  );
};
