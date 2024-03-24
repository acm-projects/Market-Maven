import React from 'react';
import { useState } from 'react';

const Item = (props) => {
  const handleClick = (name, quantitiy) => {
    if (quantitiy > 0) {
      props.addToCart(name);
      props.setItems(
        props.items.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  return (
    <>
    <div className="p-4 bg-white my-2 rounded-lg flex flex-col items-center">
      <h1 className='text-3xl text-black'>{props.name}</h1>
      <h2 className='text-2xl'>{props.cost}</h2>
      <div className="overflow-hidden rounded-xl shadow-xl my-4">
        <img className='w-[300px] h-[350px] object-cover bg-blue-500 hover:scale-110 duration-300' src={props.pic} alt={props.name} />
      </div>
      <h3>{props.quantitiy}</h3>
      <p>{props.description}</p>
      <button
        onClick={() => handleClick(props.name, props.quantitiy)}
        className=''
      >
        Add to Cart
      </button>
      </div>
    </>
  );
};

export default Item;