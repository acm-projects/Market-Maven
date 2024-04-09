import React, { useState } from "react";
import "./App.css"
import Landing from "./pages/landingpage";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ItemDetails from "./Components/ItemDetails";
import CartPage from "./Components/Cart";
import Profile from "./pages/profile";
import Nav from "./Components/chatNav";
import Chat from "./pages/chat";
import Searchpage from "./pages/searchpage";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ItemDetails" element={<ItemDetails />} />
          <Route path="/ItemDetails/:id" element={<ItemDetails/>} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/searchpage" element={<Searchpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;