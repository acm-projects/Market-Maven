import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Button } from '@mui/material';

function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zip: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      country: '',
      zip: ''
    });
  };

  return (
    <div>
      <Navbar/>
      <h1>Checkout</h1>
      <div>
      <form onSubmit={handleSubmit}>
        <div className='inline-flex'>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </div>
        <div>
          <label>ZIP Code:</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
        </div>
        <Button type="submit">Add Item</Button>
      </form>
      <div> 
        <p>Subtotal</p>
        <p>Tax</p>
        <p>Total</p>
      </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
