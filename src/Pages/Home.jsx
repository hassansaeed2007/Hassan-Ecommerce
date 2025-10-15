import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const slides = [
  {
    title: 'Welcome to Hassan eCommerce',
    subtitle: 'Luxury Products, Affordable Prices',
    bg: '../../public/R.png',
  },
  {
    title: ' Elegance',
    subtitle: 'Explore premium collections now',
    bg: '../../public/banner-1-2.jpg',
  },
  {
    title: 'Fast Delivery Worldwide',
    subtitle: 'VIP Service, Hassle-Free',
    bg: '../../public/free-delivery-banner-with-courier-scooter-delivers-package-free-shipping-order-fast-delivery-badge-advertisement-express-delivery-with-man-scooter-vector-illustration_4351.jpg',
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3500); // 5s per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="custom-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        >
          <div className="content animate__animated animate__fadeIn">
            <h1 className="animate__animated animate__fadeInDown">{slide.title}</h1>
            <p className="animate__animated animate__fadeInUp">{slide.subtitle}</p>
            <Link to="/product"><button className="slider-btn animate__animated animate__zoomIn">Shop Now</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
