import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import data from './data.json'
import Item from '../Components/Item';
import Navbar from '../Components/Navbar';

import axios from 'axios';

const Shop = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      // const response = await fetch(`/api/products`);
      const response = await fetch(`/api/products`)
      const json = await response.json(); // array of objects
      console.log(json)

      if (response.ok) {
        setItems(json);
      }
    };

    fetchItems();
  }, []);

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

  const [selectedItem, setSelectedItem] = useState([]);
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // render shop items
  const renderShopItems = () => {
    {items.map((item) => (
      // correct implementation of Link and the to prop with its state property
      // I have no idea why ItemDetails refuses to recieve the state as anything
      // other than "null", will keep in case we can fix later since this would be
      // better than just making a GET request for each individal item for their page
      <Link key={item._id} to={{pathname: `/ItemDetails/${item._id}`, state: item}}>
      <Item
        key={item._id}
        name={item.productTitle}
        cost={item.price}
        pic={item.image}
        description={item.description}
        quantitiy={item.quantity}
        addToCart={addToCart}
        items={items}
        setItems={setItems}
        
      />
      </Link>
    ))}
  }

  return (
    <>
      <div>
        <Navbar />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-2 bg-white">
        {renderShopItems()}
        </div>
      </div>
      <div>
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