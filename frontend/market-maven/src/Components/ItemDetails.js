import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
//import data from "../pages/data.json";

const ItemDetails = ({ item, addToCart }) => {
  const handleClick = (name, quantitiy) => {
    if (quantitiy > 0) {
      item.addToCart(name);
      item.setItems(
        item.items.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const handleAddToCart = () => {
    addToCart(item.name);
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 bg-white">
        <div className="object-left h-[600px] w-[600px] bg-white">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="">
          <h1 className="text-center text-black">{item.name}</h1>
          <h2>{item.price}</h2>
          <p className="my-4">{item.description}</p>

          {/*<button 
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleAddToCart}>
        Add to Cart
  </button>*/}
          <button
            onClick={() => handleClick(item.name, item.quantitiy)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
