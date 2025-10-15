import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css'

const Productinfo = ({addToCart}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div style={styles.loading}>Loading product details...</div>;

  if (error) return <div style={styles.error}>Error: {error}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      style={styles.container}
    >
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px #ff4081" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate(-1)}
        style={styles.backButton}
      >
        ← Back
      </motion.button>

      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        style={styles.title}
      >
        {product.title}
      </motion.h2>

      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={styles.imageContainer}
      >
        <img
          src={product.image}
          alt={product.title}
          style={styles.image}
        />
      </motion.div>

      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        style={styles.price}
      >
        ${product.price.toFixed(2)}
      </motion.p>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        style={styles.category}
      >
        <strong>Category:</strong> {product.category}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1.2 }}
        style={styles.description}
      >
        {product.description}
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        style={styles.buttonsContainer}
      >
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px #ff4081" }}
          whileTap={{ scale: 0.95 }}
          style={{ ...styles.actionButton, backgroundColor: '#ff4081' }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px #2196f3" }}
          whileTap={{ scale: 0.95 }}
          style={{ ...styles.actionButton, backgroundColor: '#2196f3' }}
          onClick={() => alert('Added to wishlist!')}
        >
          Add to Wishlist
        </motion.button>
      </motion.div>

      {/* Animated background */}
      <motion.div
        className="animated-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        style={styles.animatedBackground}
      />
    </motion.div>
  );
};

const styles = {

  container: {
    position: 'relative',
    maxWidth: '100%',
    height: '100%',
    padding: '40px 30px',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    color: '#eee',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.8)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    overflow: 'hidden',
    zIndex: 10,
  },
  backButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '50px',
    border: 'none',
    backgroundColor: '#ff4081',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 0 10px #ff4081',
    marginBottom: '30px',
    outline: 'none',
    transition: 'background-color 0.3s ease',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '900',
    marginBottom: '30px',
    textShadow: '0 0 10px #ff4081, 0 0 20px #ff4081',
    userSelect: 'none',
  },
  imageContainer: {
    perspective: '1200px',
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '300px',
    maxHeight: '300px',
    objectFit: 'contain',
    borderRadius: '25px',
    boxShadow: '0 0 30px #ff4081, 0 0 60px #ff4081',
  },
  price: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '15px',
    color: '#ff4081',
    textShadow: '0 0 10px #ff4081',
  },
  category: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    marginBottom: '30px',
    color: '#81d4fa',
    textShadow: '0 0 8px #81d4fa',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#ddd',
    marginBottom: '40px',
    textShadow: '0 0 6px rgba(255,255,255,0.3)',
  },
  buttonsContainer: {
    display: 'flex',
    gap: '30px',
    justifyContent: 'center',
  },
  actionButton: {
    padding: '15px 30px',
    fontSize: '1.1rem',
    borderRadius: '50px',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontWeight: '700',
    boxShadow: '0 0 20px rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease',
    userSelect: 'none',
  },
  loading: {
    fontSize: '1.5rem',
    color: '#ff4081',
    textAlign: 'center',
    marginTop: '100px',
  },
  error: {
    fontSize: '1.5rem',
    color: '#f44336',
    textAlign: 'center',
    marginTop: '100px',
  },
  animatedBackground: {
    position: 'absolute',
    top: '-20%',
    left: '-20%',
    width: '140%',
    height: '140%',
    background:
      'radial-gradient(circle at 30% 30%, #ff4081, transparent 40%),' +
      'radial-gradient(circle at 70% 70%, #2196f3, transparent 40%),' +
      'radial-gradient(circle at 50% 50%, #ffea00, transparent 60%)',
    filter: 'blur(100px)',
    zIndex: 1,
    pointerEvents: 'none',
    mixBlendMode: 'screen',
  },
};

export default Productinfo;
