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
        <h1>Cart</h1>
        <div className="place-items-center">
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
        <Button>
          Proceed to Checkout
        </Button>
      </div>
    )
}



const CartItem = (props) => {
  const event = data[0];
  return(
    <div>
    <Card sx={{ display: 'flex', maxWidth: 600, height: 200 }}>
    <CardMedia
        component="img"
        sx={{ width: 150, height: 150, alignItems: 'center' }}
        image={props.image}
        alt={props.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography gutterBottom component="div" variant="h5">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.description}
          </Typography>
        </CardContent>
        
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'right', pl: 1, pb: 1 }}>
        <p>Quantity: </p>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
          >
            <Button>+</Button>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" defaultValue="1"/>
            <Button>-</Button>
          </ButtonGroup>
        <Button size="small" color="primary">
          Remove
        </Button>
        </Box>
    </Card>
    </div>
  );
}


export default CartPage


