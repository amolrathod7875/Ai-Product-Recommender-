import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="product-card" style={styles.card}>
      <h3 style={styles.title}>{product.name}</h3>
      <p style={styles.price}>${product.price}</p>
      <p style={styles.category}>{product.category}</p>
      <p style={styles.specs}>{product.specs}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #e0e0e0',
    padding: '16px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  },
  title: { margin: '0 0 8px 0', fontSize: '18px' },
  price: { margin: '0 0 8px 0', fontWeight: 'bold', fontSize: '20px', color: '#007BFF' },
  category: { margin: '0 0 4px 0', fontSize: '14px', color: '#666' },
  specs: { margin: '0', fontSize: '12px', color: '#999' }
};