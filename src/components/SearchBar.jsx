import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '1.0rem', width: '350px', borderRadius: '200px' }}
      />
    </div>
  );
};

export default SearchBar;
