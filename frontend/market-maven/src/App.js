import React, { useState } from "react";
import Landing from "./pages/landingpage";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ItemDetails from "./Components/ItemDetails";
import CartPage from "./pages/CartPage";
import AddItemPage from "./pages/AddItemPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  // what will / is this used for?
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/AddItemPage" element={<AddItemPage />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ItemDetails" element={<ItemDetails />} />
          <Route path="/ItemDetails/:id" element={<ItemDetails/>} />
          <Route path="/CartPage" element={<CartPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;