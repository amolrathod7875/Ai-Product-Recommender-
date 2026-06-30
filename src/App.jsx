import React, { useState } from 'react';
import './App.css'; // MUST IMPORT THIS FOR ANIMATIONS
import { MOCK_PRODUCTS } from './data/mockData';
import { fetchAIRecommendations } from './services/aiService';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState(MOCK_PRODUCTS);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) {
      setDisplayedProducts(MOCK_PRODUCTS);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const recommendedIds = await fetchAIRecommendations(userInput);
      
      if (recommendedIds.length > 0) {
        const filtered = MOCK_PRODUCTS.filter(product => recommendedIds.includes(product.id));
        setDisplayedProducts(filtered);
      } else {
        setDisplayedProducts([]); 
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 className="title">Smart Product Finder</h1>
      
      <SearchBar 
        userInput={userInput} 
        setUserInput={setUserInput} 
        onSubmit={handleSearch} 
        isLoading={isLoading} 
      />

      {error && <p style={{ color: '#d32f2f', padding: '10px', backgroundColor: '#ffebee', borderRadius: '4px', textAlign: 'center' }}>{error}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
        {displayedProducts.length > 0 ? (
          displayedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: '#666' }}>No products match your criteria. Try adjusting your search.</p>
        )}
      </div>
    </div>
  );
}