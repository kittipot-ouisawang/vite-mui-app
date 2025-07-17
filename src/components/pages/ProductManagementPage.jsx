import * as React from "react";
import { useState, useEffect } from 'react';
import PageContainer from "./PageContainer.jsx";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function ProductManagementPage() {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  // Function to fetch all products
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to add a new product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const newProduct = {
        id: Date.now(), // Using timestamp as a simple unique ID
        name: newProductName,
        price: parseFloat(newProductPrice),
      };

      const response = await fetch('http://localhost:3001/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        // Refresh the product list after adding
        fetchProducts();
        setNewProductName('');
        setNewProductPrice('');
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

 // ✨ NEW: Function to handle product deletion
  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) {
        return;
    }
    try {
      await fetch(`http://localhost:3001/api/products/${productId}`, {
        method: 'DELETE',
      });
      fetchProducts(); // Refresh list
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <PageContainer>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <Button onClick={() => handleDeleteProduct(product.id)} style={{ marginLeft: '5px' }}>Delete</Button>
          </li>
        ))}
      </ul>

      <hr />

      <h2>Add a New Product</h2>
      <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleAddProduct}
      >
        <TextField
          label="Product Name" 
          color="secondary"
          type="text"
          placeholder="Product Name"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          required
        />
        <TextField
          label="Price"
          color="secondary"
          type="number"
          placeholder="Price"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
          required
        />
        <Button type="submit" sx={{ mt: '8px' }}>Add Product</Button>
      </Box>

    </PageContainer>
  );
}

export default ProductManagementPage;