import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const API_URL = 'https://fakestoreapi.com/products';
const API_CATEGORIES = 'https://fakestoreapi.com/products/categories';

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
        const prices = data.map(p => p.price);
        const max = Math.max(...prices);
        setMaxPrice(max);
        setPriceRange([0, max]);
      });

    fetch(API_CATEGORIES)
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  useEffect(() => {
    let temp = [...products];

    if (selectedCategory !== 'all') {
      temp = temp.filter(p => p.category === selectedCategory);
    }

    temp = temp.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      temp = temp.filter(p => p.title.toLowerCase().includes(term));
    }

    setFiltered(temp);
  }, [searchTerm, priceRange, selectedCategory, products]);

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    const name = e.target.name;

    if (name === 'min') {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  const handleAddToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1000);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalCartPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

  return (
    <div className="product-page bg-white">
      {showMessage && <div className="message-popup">Added to cart!</div>}

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <div className="filter-group">
          <label>Category:</label>
          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            <option value="all">All</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
          <div className="price-sliders opacity-0">
            <input
              type="range"
              name="min"
              min="0"
              max={maxPrice}
              value={priceRange[0]}
              onChange={handlePriceChange}
            />
            <input
              type="range"
              name="max"
              min="0"
              max={maxPrice}
              value={priceRange[1]}
              onChange={handlePriceChange}
            />
          </div>
        </div>
      </div>

      <div className="main-content ">
        <div className="product-list">
          {filtered.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filtered.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => navigate(`/product/${product.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/product/${product.id}`); }}
                style={{ cursor: 'pointer' }}
                aria-label={`View details for ${product.title}`}
              >
                <img src={product.image} alt={product.title} />
                <h4 title={product.title}>{product.title}</h4>
                <p className="price">${product.price.toFixed(2)}</p>
                <button
                  className="btn-add"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering div click
                    handleAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))
          )}
        </div>

        <div className="">
          <h3>🛒 Cart</h3>
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <>
              <ul>
                {cartItems.map(item => (
                  <li key={item.id}>
                    <div>
                      {item.title.slice(0, 25)}... x{item.qty}
                    </div>
                    <div>${(item.qty * item.price).toFixed(2)}</div>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
              <hr />
              <h4>Total: ${totalCartPrice.toFixed(2)}</h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
