import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemDetails = () => {
  const [item, setItem] = useState({}); // Initialize item state with an empty object

  // takes the product id from the Link routing as a parameter
  const params = useParams ();

  // useEffect executse on component mount (no compile errors)
  useEffect(() => {

    // GET request to fetch the single product
    const fetchProduct = async () => {
      const res = await axios.get(`http://localhost:8080/api/products/${params.id}`);
      console.log(res.data)

      setItem(res.data);
    };

    fetchProduct()
  }, []);

  // Handle click event for adding item to cart
  const handleClick = (name, quantity) => {

  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 bg-white">
        <div className="object-left h-[600px] w-[600px] bg-white">
          {/* Render item image */}
          <img src={item.pic} alt={item.name} />
        </div>
        <div className="">
          <h1 className="text-center text-black">{item.name}</h1>
          <h2>{item.cost}</h2>
          <p className="my-4">{item.description}</p>

          {/* Render Add to Cart button */}
          <button
            onClick={() => handleClick(item.name, item.quantity)}
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
