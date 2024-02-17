import React, { useState } from 'react';
import './App.css';

function App() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="shopping-cart">
      <header>
        <h1>Shopping Cart</h1>
        <input type="text" placeholder="Search" className="search-bar" />
        <select className="category-filter">
          <option value="all">All Categories</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
          {/* Add more categories */}
        </select>
      </header>
      
      <main>
        <div className="product-card">
          <img src="product1.jpg" alt="Product" />
          <div className="product-info">
            <h2>Product Name</h2>
            <p>Description </p>
            <p className="price">Rs 1000</p>
            <div className="quantity-controls">
              <button className="decrement" onClick={decrementQuantity}>-</button>
              <span className="quantity">{quantity}</span>
              <button className="increment" onClick={incrementQuantity}>+</button>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        <div className="product-card">
          <img src="product1.jpg" alt="Product" />
          <div className="product-info">
            <h2>Product Name</h2>
            <p>Description </p>
            <p className="price">RS 2000</p>
            <div className="quantity-controls">
              <button className="decrement" onClick={decrementQuantity}>-</button>
              <span className="quantity">{quantity}</span>
              <button className="increment" onClick={incrementQuantity}>+</button>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        <div className="product-card">
          <img src="product1.jpg" alt="Product" />
          <div className="product-info">
            <h2>Product Name</h2>
            <p>Description </p>
            <p className="price">RS 3000</p>
            <div className="quantity-controls">
              <button className="decrement" onClick={decrementQuantity}>-</button>
              <span className="quantity">{quantity}</span>
              <button className="increment" onClick={incrementQuantity}>+</button>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
