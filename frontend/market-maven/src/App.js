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
import Profile from "./pages/profile";
import Chat from "./pages/chat"
import { AuthContextProvider } from "./context/authContext";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  // what will / is this used for?
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
      <div className="">
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/AddItemPage" element={<AddItemPage />} />
            <Route path="/CheckoutPage" element={<CheckoutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ItemDetails" element={<ItemDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/ItemDetails/:id" element={<ItemDetails />} />
            <Route path="/CartPage" element={<CartPage />} />
          </Routes>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;