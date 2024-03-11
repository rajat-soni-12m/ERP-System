import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen ,faTrash,faCartPlus} from '@fortawesome/free-solid-svg-icons';
import '../styles/Product.css'; 


import AddProductModal from './AddProduct';
import EditProductModal from './EditProduct';

const initialProducts = [
  { id: 1, name: 'Product 1', category: 'Category A', price: 10, stockQuantity: 100 },
  { id: 2, name: 'Product 2', category: 'Category B', price: 20, stockQuantity: 50 },
  { id: 3, name: 'Product 3', category: 'Category C', price: 30, stockQuantity: 500 },
  { id: 4, name: 'Product 4', category: 'Category D', price: 40, stockQuantity: 5 },
  { id: 5, name: 'Product 5', category: 'Category E', price: 50, stockQuantity: 10 },
];


const ProductsManagementPage = ({navigateTo}) => {
  const [products, setProducts] = useState(initialProducts);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const editProduct = (productId, updatedProduct) => {
    setProducts(products.map(product => (product.id === productId ? { ...product, ...updatedProduct } : product)));
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const navigateToHome = () => {
    navigateTo('/')
    console.log("Navigating to Home");
  };

  const navigateToOrders = () => {
    navigateTo('/orders')
    console.log("Navigating to Orders");
  };

  return (
    <div className="container">
    <div className="nav">
      <h2>Our Products</h2>
        <button onClick={navigateToHome}>Go to Home</button>
        <button onClick={navigateToOrders}>Go to Orders</button>
      </div>
      <div className="plus">
      <button onClick={() => setShowAddModal(true)}><FontAwesomeIcon icon={faCartPlus} /></button>
      </div>
      <ul className="product-list"> 
        {products.map(product => (
          <li key={product.id} className="product-item"> 
            <div className="product-details">
              <h4>{product.name} ({product.category})</h4>
              <div>Rs {product.price}</div>
              <div>Available Stock: {product.stockQuantity}</div>
            </div>
            <div className="product-actions">
              <button onClick={() => handleEditClick(product)}><FontAwesomeIcon icon={faPen} /></button>
              <button onClick={() => deleteProduct(product.id)}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
          </li>
        ))}
      </ul>

      {showAddModal && <AddProductModal addProduct={addProduct} closeModal={() => setShowAddModal(false)} />}
      {showEditModal && <EditProductModal product={selectedProduct} editProduct={editProduct} closeModal={() => setShowEditModal(false)} />}
    </div>
  );
};

export default ProductsManagementPage;
