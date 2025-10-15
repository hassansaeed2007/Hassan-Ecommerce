import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobileAlt, FaSearch, FaRocket, FaCogs } from 'react-icons/fa';
import './Service.css'; // Make sure your CSS is in the same folder or adjust the path

const services = [
  {
    icon: FaRocket,
    title: 'Store Setup & Launch',
    description: 'From branding to product uploads — we set up your eCommerce store for a successful launch.',
  },
  {
    icon: FaCogs,
    title: 'Inventory Management',
    description: 'Efficient tools to manage your product stock, SKUs, and supplier coordination.',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile Commerce',
    description: 'Fully optimized mobile shopping experience for your customers on any device.',
  },
  {
    icon: FaSearch,
    title: 'Product SEO & Listings',
    description: 'We help your products rank higher with optimized titles, descriptions, and keywords.',
  },
  {
    icon: FaCode,
    title: 'Custom Integrations',
    description: 'Connect your store with CRMs, ERPs, and third-party APIs to streamline operations.',
  },
  {
    icon: FaPalette,
    title: 'UI/UX for Conversion',
    description: 'Beautiful, user-centric design focused on increasing conversions and sales.',
  },
];

const ServiceBox = ({ icon: Icon, title, description }) => (
  <motion.div
    className="service-box"
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div className="icon" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
      <Icon />
    </motion.div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const Services = () => (
  <div className="services-page">
    <h2 className="section-title">Our eCommerce Solutions</h2>
    <div className="services-grid">
      {services.map((service, index) => (
        <ServiceBox key={index} {...service} />
      ))}
    </div>
  </div>
);

export default Services;
