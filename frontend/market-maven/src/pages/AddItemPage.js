import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Button } from '@mui/material';

function AddItemPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
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
    console.log(formData);
    setFormData({
      name: '',
      description: '',
      price: ''
    });
  };

  return (
    <div className='text-center'>
      <Navbar/>
      <h1 className='text-black text-center'>Add New Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <Button type="submit">Add Item</Button>
      </form>
    </div>
  );
}

export default AddItemPage;
