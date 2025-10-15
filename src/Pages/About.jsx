import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { id: 1, name: 'Ali Hassan', role: 'CEO', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: 2, name: 'Sara Khan', role: 'CTO', avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: 3, name: 'Ahmed Ali', role: 'Lead Developer', avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: 4, name: 'Fatima Noor', role: 'Designer', avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
];

const stats = {
  ordersShipped: 12000,
  customers: 8000,
  products: 150,
  ratings: 4.8,
};

const testimonials = [
  { id: 1, quote: 'Amazing service and products!', name: 'John Doe', location: 'Karachi' },
  { id: 2, quote: 'Highly recommend this platform.', name: 'Jane Smith', location: 'Lahore' },
  { id: 3, quote: 'A game changer in e-commerce.', name: 'Ali Raza', location: 'Islamabad' },
];

const AboutPage = () => {
  return (
    <motion.div className="about-page" style={{ backgroundColor: '#F0F4F8', minHeight: '100vh' }}>
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          position: 'relative',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          background: 'linear-gradient(135deg, #111412ff, #3a1408ff)',
        }}
      >
        <motion.div
          className="hero-content"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ textAlign: 'center', padding: '0 2rem' }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hassan E‑Commerce</h1>
          <p style={{ fontSize: '1.3rem' }}>Revolutionizing online shopping with innovation and trust.</p>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: '#2B2F5F' }}>Our Mission</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#333' }}>
            We aim to transform e-commerce into an immersive experience: eco‑friendly, transparent, and community-driven. We believe in products that tell stories, and shopping that feels like connection.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#E8EDF7' }}>
        <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '2rem', color: '#2B2F5F' }}>Our Impact</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          {Object.entries(stats).map(([key, value]) => (
            <motion.div key={key}>
              <div style={{ fontSize: '2.8rem', color: '#FF6B35', fontWeight: 'bold' }}>
                {value}{key === 'ratings' ? '★' : '+'}
              </div>
              <div style={{ marginTop: '0.4rem', fontSize: '1rem', color: '#555' }}>
                {key === 'ordersShipped' && 'Orders Shipped'}
                {key === 'customers' && 'Happy Customers'}
                {key === 'products' && 'Live Products'}
                {key === 'ratings' && 'Avg Rating'}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '2rem', color: '#2B2F5F' }}>Meet Our Team</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
          }}
        >
          {team.map(member => (
            <motion.div key={member.id} whileHover={{ scale: 1.05 }} style={{ cursor: 'pointer' }}>
              <div style={{
                background: 'white',
                borderRadius: '10px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              }}>
                <img
                  src={member.avatarUrl}
                  alt={member.name}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '1rem',
                  }}
                />
                <h3 style={{ marginBottom: '0.3rem', color: '#2B2F5F' }}>{member.name}</h3>
                <p style={{ fontStyle: 'italic', color: '#777', marginBottom: 0 }}>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#E0E7FF' }}>
        <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '2rem', color: '#2B2F5F' }}>What Our Customers Say</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {testimonials.map(testimonial => (
            <motion.div
              key={testimonial.id}
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                maxWidth: '300px',
                flex: '1 1 300px',
                cursor: 'pointer',
              }}
            >
              <p style={{ fontStyle: 'italic', color: '#444' }}>"{testimonial.quote}"</p>
              <p style={{ marginTop: '1rem', fontWeight: 'bold', color: '#2B2F5F', marginBottom: '0.2rem' }}>{testimonial.name}</p>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: 0 }}>{testimonial.location}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
