// src/components/CoolCarousel.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './coolCarousel.css';

const CoolCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = (direction) => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + direction + items.length) % items.length
    );
  };

  const item = items[currentIndex];

  return (
    <div className="carousel-container">
      <button className="carousel-button" onClick={() => paginate(-1)}>‹</button>

      <div className="carousel-slide">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="carousel-card"
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="carousel-button" onClick={() => paginate(1)}>›</button>
    </div>
  );
};

export default CoolCarousel;
