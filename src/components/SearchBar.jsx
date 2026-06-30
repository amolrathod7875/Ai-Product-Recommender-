import React from 'react';

export default function SearchBar({ userInput, setUserInput, onSubmit, isLoading }) {
  return (
    <form onSubmit={onSubmit} style={styles.form}>
      <input 
        type="text" 
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder='e.g., "I need cheap headphones for studying"'
        style={styles.input}
      />
      <button type="submit" disabled={isLoading} style={styles.button}>
        {isLoading ? "Searching..." : "Ask AI"}
      </button>
    </form>
  );
}

const styles = {
  form: { display: 'flex', gap: '10px', marginBottom: '30px' },
  input: { flex: 1, padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc' },
  button: { 
    padding: '12px 24px', 
    fontSize: '16px', 
    cursor: 'pointer', 
    backgroundColor: '#000', 
    color: '#fff', 
    border: 'none', 
    borderRadius: '8px',
    fontWeight: 'bold'
  }
};