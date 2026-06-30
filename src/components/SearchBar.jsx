import React from 'react';

export default function SearchBar({ userInput, setUserInput, onSubmit, isLoading }) {
  return (
    <form onSubmit={onSubmit} style={styles.form}>
      <input 
        type="text" 
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder='e.g., "phone for student"'
        style={styles.input}
      />
      <button type="submit" disabled={isLoading} style={styles.button}>
        {isLoading ? "Searching..." : "Ask AI"}
      </button>
    </form>
  );
}

const styles = {
  form: { display: 'flex', gap: '15px', marginBottom: '40px', justifyContent: 'center' },
  input: { 
    width: '100%',
    maxWidth: '400px',
    padding: '12px 16px', 
    fontSize: '16px', 
    borderRadius: '8px', 
    border: '2px solid #ff8c00', // Orange border
    outline: 'none',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
  },
  button: { 
    padding: '12px 30px', 
    fontSize: '16px', 
    cursor: 'pointer', 
    background: 'linear-gradient(135deg, #ff8c00 0%, #e67e00 100%)', // Orange gradient
    color: '#fff', 
    border: 'none', 
    borderRadius: '8px',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(255, 140, 0, 0.3)',
    transition: 'transform 0.1s'
  }
};