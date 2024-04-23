import Navbar from "../Components/Navbar"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import data from "./data.json"
import { Button } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const CartPage = () => {
  const location = useLocation();

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  

  useEffect(() => {
    const fetchItems = async () => {
      // const response = await fetch(`/api/products`);
      const response = await fetch(`/api/products`);
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


    return(
      <div>
        <Navbar/>
        <h1 className="align-center color-black">Cart</h1>
        <div className="flex align-center">
        <div sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {items.map((item) => (
              <CartItem
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
          ))}
        </div>
        <div className="bg-slate-200 p-4 ml-7">
          <h2>Subtotal: </h2>
          <h2>Tax: </h2>
          <h2>Total: </h2>
          <Button sx={{alignSelf: 'center'}}>
          Proceed to Checkout
          </Button>
        </div>
        </div>
      </div>
    )
}



const CartItem = (props) => {
  const [quantity, setQuantity] = useState(1); // State for the quantity

  // Function to handle incrementing the quantity
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle decrementing the quantity
  const handleDecrement = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };
  return(
    <Card sx={{ width: 600, height: 200}}>
      <div className="flex justify-between">
    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
      <CardMedia
          component="img"
          sx={{ maxWidth: 150, maxHeight: 150, alignItems: 'center', objectFit: 'cover'}}
          image={props.image}
          alt={props.name}
        />
      </Box>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography gutterBottom component="div" variant="h5">
            {props.name}
          </Typography>
          
        </CardContent>
      <div className="flex items-center pl-1 pb-1 pr-3 justify-end">
        <p>Quantity: </p>
        <div className="flex-grow" />
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Quantity"
        >
          <Button onClick={handleDecrement}>-</Button>
          <TextField id="outlined-basic" variant="outlined" value={quantity} sx={{ width: 60 }} />
          <Button onClick={handleIncrement}>+</Button>
        </ButtonGroup>
      </div>
        </div>
    </Card>
  );
}


export default CartPage


