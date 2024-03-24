import React from 'react';
import { useState } from 'react';
import data from './data.json'
import Item from '../Components/Item';
import Navbar from '../Components/Navbar';

const Shop = () => {
  const [items, setItems] = useState(data);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (cart.map((cartItem) => cartItem[0]).includes(item)) {
      setCart(
        cart.map((cartItem) =>
          cartItem[0] === item ? [cartItem[0], cartItem[1] + 1] : cartItem
        )
      );
    } else {
      setCart([...cart, [item, 1]]);
    }
  };

  const removeFromCart = (item) => {
    if (cart.map((cartItem) => cartItem[0]).includes(item)) {
      setCart(cart.filter((cartItem) => cartItem[0] !== item));
    }
  };

  const handleRemove = (itemName, itemAdd) => {
    removeFromCart(itemName);
    setItems(
      items.map((item) =>
        item.name === itemName
          ? { ...item, quantity: item.quantity + itemAdd }
          : item
      )
    );
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-2">
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            cost={item.cost}
            pic={item.image}
            description={item.description}
            quantitiy={item.quantity}
            addToCart={addToCart}
            items={items}
            setItems={setItems}
          />
        ))}
        </div>
      </div>
      <div>
        <h1>Cart</h1>
        {cart.map((item) => (
          <div>
            <h1>{item[0]}</h1>
            <h2>Quantity: {item[1]}</h2>
            <button onClick={() => handleRemove(item[0], item[1])}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;

{/*import Navbar from "../Components/Navbar"
export default function Page1(){
    return(
    <div>
        <Navbar />
        <h1>Page 1</h1>
    </div>
    )
}*/}