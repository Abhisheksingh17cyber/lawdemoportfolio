import React from 'react';
import { motion } from 'framer-motion';
import './LawBooks.css';

const LawBooks = () => {
  const books = [
    { color: '#d4af37', title: 'Constitution', height: 120, delay: 0 },
    { color: '#8b7355', title: 'Criminal Law', height: 100, delay: 0.1 },
    { color: '#cd7f32', title: 'Civil Code', height: 110, delay: 0.2 },
    { color: '#b8860b', title: 'Case Studies', height: 95, delay: 0.3 },
  ];

  return (
    <div className="law-books-container">
      <div className="bookshelf">
        {books.map((book, index) => (
          <motion.div
            key={index}
            className="book"
            style={{ 
              background: `linear-gradient(180deg, ${book.color}, ${book.color}dd)`,
              height: `${book.height}px`
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: book.delay, duration: 0.5 }}
            whileHover={{ 
              y: -10,
              scale: 1.05,
              boxShadow: `0 15px 40px ${book.color}66`
            }}
          >
            <div className="book-spine">
              <div className="book-title">{book.title}</div>
              <div className="book-details">
                <div className="book-line"></div>
                <div className="book-line short"></div>
              </div>
            </div>
            <div className="book-top"></div>
            <div className="book-page"></div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="reading-symbol"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        ⚖️
      </motion.div>

      <div className="shelf-base"></div>
    </div>
  );
};

export default LawBooks;
