import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./profile.css";

import Navbar from '../Components/Navbar';
import Item from "../Components/Item";
import { useAuthContext } from "../hooks/useAuthContext";

function Profile() {

  const { accessToken, user, id } = useAuthContext()

  // for demo, item will only show data from this state instead of db
  const [item, setItem] = useState({
    _id: "",
    productTitle: "",
    price: 0,
    image: "",
    description: "",
    stock: 0
  })
  const [userInfo, setUserInfo] = useState({
    _id: id,
    username: "",
    email: "",
    zip: 0,
    image: ""
  })
  const [newProduct, setNewProduct] = useState({ //will expand to encapsulate entire schema 
    productTitle: "",
    vendor: "",
    description: "",
    price: 0,
    stock: 0,
  })
  const navigate = useNavigate();

  useEffect(() => {
    const validateAuth = async () => {
      if (!localStorage.getItem("accessToken")) navigate("/profile")
    }

    const fetchUser = async () => {
      try {

        // note: acessing through .data is async safer than destructuring
        const response = await axios.get(`http://localhost:8080/api/users/${localStorage.getItem("id")}`);
        const userData = response.data;
        
        setUserInfo({
          _id: userData._id,
          username: userData.username,
          email: userData.email,
          zip: userData.zip,
          image: userData.image
        });
    
        setNewProduct({ ...newProduct, vendor: userData._id });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    

    // validateAuth();
    fetchUser();

  }, [item, navigate])

  const handleProductSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/api/products', newProduct);
      const data = response.data;
  
      // Update the state with the received data
      setItem({
        _id: data._id,
        productTitle: data.productTitle,
        price: data.price,
        image: data.image,
        description: data.description,
        stock: data.stock
      });
  
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen flex text-[#472836]">
        <div className="w-[439px] h-screen bg-dhanush-image flex flex-col items-center text-white">
          <div className="w-full h-20" />
          <img src={userInfo.image} className="border border-white rounded-3xl w-40 overflow-hidden object-cover" />        <div className="w-full h-11" />
          <div className="flex items-center gap-3">
            <div className="border w-10 h-px border-white" />
            <h1 className=" text-2xl text-[#472836]">{userInfo.username}</h1>
            <div className="border w-10 h-px border-white" />
          </div>
          <div className="w-full h-14" />
          <h2 className="text-xl text-[#472836]">Edit Profile</h2>
          <div className="w-full h-6" />
          <div className="border w-64 h-px border-white" />
          <div className="w-full h-6" />
          <h2 className="text-xl text-[#472836]">Reviews</h2>
          <div className="w-full h-6" />
          <div className="border w-64 h-px border-white" />
          <div className="w-full h-6" />
          <h2 className="text-xl text-[#472836]">Cart</h2>
          <div className="w-full h-6" />
          <div className="border w-64 h-px border-white" />
          <div className="w-full h-6" />
          <h2 className="text-xl text-[#472836]">Shopping History</h2>
          <div className="w-full h-6" />

          <div className="w-full h-14" />
          <h2 className="text-xl text-[#472836]">Contact Info</h2>
          <div className="w-full h-6" />
          <div className="border w-64 h-px border-white" />
          <div className="w-full h-6" />
          <h2 className="text-xl text-[#472836]">Message Vendor</h2>
          <div className="w-full h-6" />
          <div className="flex items-center gap-3">
            <div className="border w-16 h-px border-white" />
            <h1 className=" text-xl text-[#472836]">or</h1>
            <div className="border w-16 h-px border-white" />
          </div>
          <div className="w-full h-6" />
          <h2 className="text-l text-[#472836]">Email: {userInfo.email}</h2>
          <div className="w-full h-6" />
        </div>
        <div className="w-full h-screen flex p-12">
          <div className="w-1/2">
            {/* <div className='w-full h-12' /> */}
            <hr className="border-[#472836]" />
            <div className="w-full h-5" />
            <h2 className="text-2xl">Shop Items</h2>
            <div className="w-full h-4" />
            <div className="flex flex-wrap gap-5">
              {item._id == "" ? <></> :
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
                    quantity={item.stock}
                  //addToCart={addToCart}
                  />
                </Link>

              }
            </div>
            <hr className="border-[#472836] my-8" />
            <h2 className="text-2xl">Reviews</h2>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="w-full h-6" />
          <div className="w-full h-6" />
          <div className="w-full h-6" />
          <div className="w-full h-6" />
          <div className="w-full h-6" />
          <div className="w-full h-6" />

          <div class="flex flex-col items-center ml-100">
            <h1 class="text-2xl text-[#472836] mb-4 border-b-2 border-[#472836] pb-2">Create New Product</h1>
            <form class="flex flex-col gap-6" onSubmit={handleProductSubmit}>
              <div className="flex flex-col">
                <label class="mb-1">Product Name:</label>
                <input type="text" class="border border-gray-300 rounded-md py-1 px-2"
                  value={newProduct.productTitle}
                  onChange={(e) => { setNewProduct({ ...newProduct, productTitle: e.target.value }) }}
                  id="productTitle"
                  name="producTitle"
                />
              </div>
              <div className="flex flex-col">
                <label class="mb-1">Price $:</label>
                <input type="number" class="border border-gray-300 rounded-md py-1 px-2"
                  value={newProduct.price}
                  onChange={(e) => { setNewProduct({ ...newProduct, price: e.target.value }) }}
                  id="price"
                  name="price"
                />
              </div>
              <div className="flex flex-col">
                <label class="mb-1">Stock:</label>
                <input type="number" class="border border-gray-300 rounded-md py-1 px-2"
                  value={newProduct.stock}
                  onChange={(e) => { setNewProduct({ ...newProduct, stock: e.target.value }) }}
                  id="stock"
                  name="stock"
                />
              </div>
              <div className="flex flex-col">
                <label class="mb-1">ZIP:</label>
                <input type="number" class="border border-gray-300 rounded-md py-1 px-2"
                  value={newProduct.zip}
                  onChange={(e) => { setNewProduct({ ...newProduct, zip: e.target.value }) }}
                  id="zip"
                  name="zip"
                />
              </div>

              <button type="submit" class="rounded-md bg-[#472836] text-white py-2 px-4">Submit</button>
            </form>
          </div>


        </div>

      </div>

    </div>
  );
}

export default Profile;