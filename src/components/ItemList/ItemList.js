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
            category={product.category}
            stars={product.stars}
            alcohol={product.alcohol}
            description={product.description}
          />
        ))}
      </div>
    </>
  );
};
