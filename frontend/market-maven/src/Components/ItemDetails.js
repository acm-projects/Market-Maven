import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useParams, Link } from "react-router-dom";
import {GoogleMap} from "../Components/GoogleMap"
import axios from "axios";
import Review from "../Components/Review";

const ItemDetails = () => {
  const [item, setItem] = useState({}); // Initialize item state with an empty object
  const [reviews, setReviews] = useState([]); // Initialize reviews state with an empty array
  const [vendor, setVendor] = useState("");

  // takes the product id from the Link routing as a parameter
  const params = useParams();

  // useEffect executse on component mount (no compile errors)
  useEffect(() => {
    console.log("useEffect Item Details");
    // GET request to fetch the single product
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/products/${params.id}`
        );
        console.log("Product Data:", res.data);
        setItem(res.data);

        const reviewsResponse = await axios.get(
          `http://localhost:8080/api/reviews?product=${params.id}`
        );
        console.log("Reviews Data:", reviewsResponse.data);
        setReviews(reviewsResponse.data);

        const vendorResponse = await axios.get(
          `http://localhost:8080/api/vendors/${res.data.vendor}`
        );
        console.log("Vendor Data:", vendorResponse.data);
        setVendor(vendorResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProduct();
  }, []);

  // Handle click event for adding item to cart
  const handleClick = (name, quantity) => {};

  return (
    <>
      <Navbar />
      <div class="bg-gray-100 py-8 ">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            {/* ITEM IMAGES */}
            <div class="md:flex-1 px-4">
              <div class="h-[500px] rounded-lg bg-gray-200 dark:bg-gray-200 mb-4">
                <img
                  class="w-full h-full object-cover"
                  src={item.image}
                  alt={item.productTitle}
                />
              </div>
              {/* <div class="flex -mx-2 mb-4">
                <div class="w-full px-2">
                  <button class="w-full bg-gray-900 dark:bg-gray-500 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-500 dark:hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
              </div> */}
            </div>

            {/* ITEM DETAILS */}
            <div class="md:flex-1 px-4">
              {/* Vendor Profile Image */}
              <figcaption class="relative flex items-center justify-between mb-6">
                <div class="overflow-hidden rounded-full bg-slate-50">
                  <img
                    alt="image"
                    class="h-14 w-14 object-cover"
                    src={vendor.image}
                  />
                </div>
                <div>
                  <div class="font-display text-base text-slate-900">
                    {" "}
                    {vendor.username}{" "}
                  </div>
                </div>
              </figcaption>

              {/* Product Information */}
              <h2 class="text-4xl font-bold text-gray-800 dark:text-gray-400 mb-2">
                {" "}
                {item.productTitle}{" "}
              </h2>
              <div class="flex mb-4">
                <div class="mr-4 text-2xl">
                  <span class="font-bold text-gray-700 dark:text-gray-400">
                    {" "}
                    Price:{" "}
                  </span>
                  <span class="text-gray-600 dark:text-gray-400">
                    {" "}
                    ${item.price}{" "}
                  </span>
                </div>
                <div class="text-2xl">
                  <span class="font-bold text-gray-700 dark:text-gray-400">
                    {" "}
                    Stock:{" "}
                  </span>
                  <span class="text-gray-600 dark:text-gray-400">
                    {" "}
                    {item.stock}{" "}
                  </span>
                </div>
              </div>
              <div>
                <span class="font-bold text-gray-700 dark:text-gray-400">
                  {" "}
                  Product Description:{" "}
                </span>
                <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  {" "}
                  {item.description}{" "}
                </p>
              </div>

              <div class="flex my-4 -mx-2 mb-4">
                <div class="w-full px-2">
                  <button class="w-full bg-gray-900 dark:bg-gray-500 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-500 dark:hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
                <div class="w-full px-2">

                  {/* needs proper routing, probablyty won't finish in time */}
                  <Link to="/chat" class="flex w-full bg-gray-900 dark:bg-gray-500 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-500 dark:hover:bg-gray-700 justify-center">
                    Chat w/ Vendor
                  </Link>
                </div>

              </div>
            </div>
          </div>

          <div className="my-4 mb-8">
          <GoogleMap items={[item]} zoom={10} single={false}/>

          </div>

          {/* REVIEWS */}
          <div>
            <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-400 mb-2">
              {" "}
              Reviews{" "}
            </h2>
            <div>
              <ul>
                {reviews.map((review) => {
                  console.log("Review:", review);
                  return (
                    <li key={review._id}>
                      <Review
                        userid={review.user}
                        thereview={review.thereview}
                      />
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
