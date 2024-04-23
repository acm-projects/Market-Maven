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
  // 472836
  const location = useLocation();

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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

  // Function to sort items based on the selected order
  const sortItems = (order) => {
    let sortedItems = [...items];
    if (order === "lowToHigh") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sortedItems.sort((a, b) => b.price - a.price);
    }
    setItems(sortedItems);
    setSortOrder(order); 
  };

// // Function to handle category selection
// const handleCategorySelect = async (category) => {
//   try {
//     const response = await axios.get(`http://localhost:8080/api/products?categories=${category}`);
//     console.log(response);
//     setItems(response.data);
//   } catch (error) {
//     console.error("Error filtering products", error);
//   }
// };

  // Function to handle category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Filter products based on the selected category
  const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items;

  // const [selectedItem, setSelectedItem] = useState([]);
  // const handleItemClick = (item) => {
  //   setSelectedItem(item);
  // };

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
      <Navbar />
      <ShopSortBar sortItems={sortItems} />
      <div className="flex flex-row">
        <Filter onCategorySelect={handleCategorySelect} />
        {/* Products Grid */}
        <section aria-labelledby="products-heading" className="pb-24 p-6">
          <div>
            <GoogleMap items={items}/>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-2 px-20 bg-white">
          {filteredItems.map((item) => (
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
                //addToCart={addToCart}
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
