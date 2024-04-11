import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemDetails = () => {
  const [item, setItem] = useState({}); // Initialize item state with an empty object
  const [reviews, setReviews] = useState([]); // Initialize reviews state with an empty array

  // takes the product id from the Link routing as a parameter
  const params = useParams();

  // useEffect executse on component mount (no compile errors)
  useEffect(() => {
    console.log("useEffect Item Details");
    // GET request to fetch the single product
    const fetchProduct = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/products/${params.id}`
      );
      console.log(res.data);
      setItem(res.data);

      // Fetch reviews associated with the item
      const reviewsResponse = await axios.get(
        `http://localhost:8080/api/reviews?product=${params.id}`
      );
      console.log(reviewsResponse.data);
      setReviews(reviewsResponse.data);
    };

    fetchProduct();
  }, []);

  // Handle click event for adding item to cart
  const handleClick = (name, quantity) => {};

  return (
    <>
      <Navbar />
      {/* grid grid-cols-2 auto-rows-[300px] */}
      <div class="bg-gray-100 py-8 ">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            {/* ITEM IMAGES */}
            <div class="md:flex-1 px-4">
              <div class="h-[460px] rounded-lg bg-gray-200 dark:bg-gray-200 mb-4">
                <img
                  class="w-full h-full object-cover"
                  src={item.image}
                  alt={item.productTitle}
                />
              </div>
              <div class="flex -mx-2 mb-4">
                <div class="w-full px-2">
                  <button class="w-full bg-gray-900 dark:bg-gray-500 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-500 dark:hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* ITEM DETAILS */}
            <div class="md:flex-1 px-4">
              <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-400 mb-2"> {item.productTitle} </h2>
              <div class="flex mb-4">
                <div class="mr-4">
                  <span class="font-bold text-gray-700 dark:text-gray-400"> Price: </span>
                  <span class="text-gray-600 dark:text-gray-400"> {" "} ${item.price} </span>
                </div>
                <div>
                  <span class="font-bold text-gray-700 dark:text-gray-400"> Stock: </span>
                  <span class="text-gray-600 dark:text-gray-400"> {" "} {item.stock} </span>
                </div>
              </div>
              <div>
                <span class="font-bold text-gray-700 dark:text-gray-400"> Product Description: </span>
                <p class="text-gray-600 dark:text-gray-400 text-sm mt-2"> {item.description} </p>
              </div>
            </div>
          </div>
          {/* REVIEWS */}
          <div>
              <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-400 mb-2"> Reviews </h2>
              <div>
                <ul>
                  {reviews.map((review) => {
                    console.log("Review:", review);
                    return (
                      <li key={review._id}>
                        <p>{review.thereview}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
