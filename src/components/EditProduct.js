import React, { useState, useEffect } from 'react';
import '../styles/addProduct.css'; 

const EditProductModal = ({ product, editProduct, closeModal }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');

  useEffect(() => {
    setName(product.name);
    setCategory(product.category);
    setPrice(product.price.toString());
    setStockQuantity(product.stockQuantity.toString());
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(product.id, { name, category, price: parseFloat(price), stockQuantity: parseInt(stockQuantity) });
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
          <label>Stock Quantity:</label>
          <input type="number" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} required />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
