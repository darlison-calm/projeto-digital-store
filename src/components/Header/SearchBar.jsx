import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      console.log("Searching for:", query);
      // Implement your search logic here
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyPress={handleSearch}
        placeholder="Search..."
        style={{ backgroundColor: 'white', border: '1px solid #ced4da' }}
      />
    </div>
  );
};

export default SearchBar;
