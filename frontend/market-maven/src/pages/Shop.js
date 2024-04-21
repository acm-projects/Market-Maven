import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import data from "./data.json";
import {GoogleMap} from "../Components/GoogleMap";
import Item from "../Components/Item";
import Navbar from "../Components/Navbar";
import ShopSortBar from "../Components/ShopSortBar";
import Filter from "../Components/Filter";
import axios from "axios";

const Shop = () => {

  const location = useLocation();

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const search = new URLSearchParams(location.search).get('searchQuery');
  const zip = new URLSearchParams(location.search).get('zip');

  useEffect(() => {
    const fetchItems = async () => {
      // const response = await fetch(`/api/products`);
      const response = await fetch(`http://localhost:8080/api/products`);
      const json = await response.json(); // array of objects
      console.log(json);
      
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

  return (
    <>
      <Navbar />
      <ShopSortBar />
      <div className="flex flex-row">
        <Filter />
        {/* Products Grid */}
        <section aria-labelledby="products-heading" class="pb-24 p-6">
          <div>
            <GoogleMap items={items}/>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-2 px-20 bg-white">
          {items.map((item) => (
            <Link
              key={item._id}
              to={{ pathname: `/ItemDetails/${item._id}`, state: item }}
            >
              <Item
                key={item._id}
                name={item.productTitle}
                cost={item.price}
                image={item.image}
                description={item.description}
                quantitiy={item.stock}
                addToCart={addToCart}
                items={items}
                setItems={setItems}
              />
            </Link>
          ))}
        </div>
        </section>
      </div>
    </>
  );
};

export default Shop;
