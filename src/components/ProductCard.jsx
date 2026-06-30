import React from 'react';

export default function ProductCard({ product }) {
  // Generates a clean placeholder with the product name if the real image fails
  const fallbackImage = `https://placehold.co/300x300/f8f9fa/ff8c00?text=${encodeURIComponent(product.name)}`;

  return (
    <div className="product-card">
      <img 
        src={product.image || fallbackImage} 
        alt={product.name} 
        className="product-image" 
        onError={(e) => {
          e.target.onerror = null; // Prevents infinite looping
          e.target.src = fallbackImage; // Swaps to placeholder if fetch fails
        }}
      />
      <h3 style={styles.title}>{product.name}</h3>
      <p style={styles.price}>${product.price}</p>
      <p style={styles.category}>{product.category}</p>
      <p style={styles.specs}>Specs: {product.specs}</p>
    </div>
  );
}

const styles = {
  title: { margin: '0 0 8px 0', fontSize: '18px', fontWeight: 'bold' },
  price: { margin: '0 0 12px 0', fontWeight: 'bold', fontSize: '22px', color: '#ff8c00' },
  category: { margin: '0 0 4px 0', fontSize: '14px', color: '#888' },
  specs: { margin: '0', fontSize: '13px', color: '#555' }
};