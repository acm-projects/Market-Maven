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

        try {
          const vendorResponse = await axios.get(
            `http://localhost:8080/api/vendors/${res.data.vendor}`
          );
          console.log("Vendor Data:", vendorResponse.data);
          setVendor(vendorResponse.data);

        // stop gap for demo:
        // since users and vendors exist on different collections, ids cant exists between vendor and user
        } catch (error) {
          const userResponse = await axios.get(
            `http://localhost:8080/api/users/${res.data.vendor}`
          )
          
          setVendor(userResponse.data);
        }

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
      <div className="bg-gray-100 py-8 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* ITEM IMAGES */}
            <div className="md:flex-1 px-4">
              <div className="h-[500px] rounded-lg bg-gray-200 dark:bg-gray-200 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.productTitle}
                />
              </div>
            </div>

            {/* ITEM DETAILS */}
            <div className="md:flex-1 px-4">
              {/* Vendor Profile Image */}
              <figcaption className="relative flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="overflow-hidden rounded-full bg-slate-50 mr-4">
                    <img
                      alt="image"
                      className="h-14 w-14 object-cover"
                      src={vendor.image}
                    />
                  </div>
                  <div>
                    <div
                      className="font-display text-lg text-slate-900"
                      style={{ color: "#472836" }}
                    >
                      {vendor.username}
                    </div>
                  </div>
                </div>
              </figcaption>

              {/* Product Information */}
              <h2
                className="text-2xl font-bold text-gray-800 dark:text-gray-400 mb-2 text-center"
                style={{ color: "#472836" }}
              >
                {item.productTitle}
              </h2>
              <div className="flex mb-4 justify-between">
                {/* Price */}
                <div className="flex items-center mr-4">
                  {/* <span
                    className="font-bold text-gray-700 dark:text-gray-400"
                    style={{ color: "#472836" }}
                  >
                    Price:
                  </span> */}
                  <span
                    className="text-gray-600 dark:text-gray-400"
                    style={{ color: "#472836" }}
                  >
                    ${item.price}
                  </span>
                </div>

                {/* Stock */}
                <div className="flex items-center">
                  <span
                    className="font-bold text-gray-700 dark:text-gray-400"
                    style={{ color: "#472836" }}
                  >
                    {item.stock}{" "}
                  </span>
                  <span
                    className="text-gray-600 dark:text-gray-400 ml-2"
                    style={{ color: "#472836" }}
                  >
                    left in stock
                  </span>
                </div>
              </div>
              <div>
                <span
                  className="font-bold text-gray-700 dark:text-gray-400"
                  style={{ color: "#472836" }}
                >
                  Product Description:
                </span>
                <p
                  className="text-gray-600 dark:text-gray-400 text-sm mt-2"
                  style={{ color: "#472836" }}
                >
                  {item.description}
                </p>
              </div>

              <div className="flex my-4 -mx-2 mb-4">
                <div className="w-full px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-500 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-500 dark:hover:bg-gray-700">
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
            <h2
              className="text-2xl font-bold text-gray-800 dark:text-gray-400 mb-2"
              style={{ color: "#472836" }}
            >
              Reviews
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
