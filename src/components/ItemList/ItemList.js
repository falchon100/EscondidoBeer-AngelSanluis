import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ lista }) => {
  return (
    <>
      <div className="lista">
        {lista.map((product) => (
          <Item
            key={product.id}
            title={product.title}
            precio={product.precio}
            img={product.img}
            stock={product.stock}
            id={product.id}
          />
        ))}
      </div>
    </>
  );
};
