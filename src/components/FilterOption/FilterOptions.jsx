import { useState, useEffect } from 'react';
import axios from 'axios';

export const FilterOptions = ({ onMarkChange, onCategoryChange }) => {
  const [marks, setMarks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedMarks, setSelectedMarks] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products/marks');
        setMarks(response.data.data);
      } catch (error) {
        console.error('Error fetching marks:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/categories');
        setCategories(response.data.data.filter(category => category.use_in_menu));
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchMarks();
    fetchCategories();
  }, []);

  const handleMarkChange = (mark) => {
    const newSelectedMarks = selectedMarks.includes(mark)
      ? selectedMarks.filter(m => m !== mark)
      : [...selectedMarks, mark];
    setSelectedMarks(newSelectedMarks);
    onMarkChange(newSelectedMarks);
  };

  const handleCategoryChange = (category) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);
    onCategoryChange(newSelectedCategories);  
  };

  return (
    <div className="filter-options">
      <h3>Filtrar por</h3>
      <hr/>
      <h4>Marca</h4>
      {marks.map((mark) => (
        <div className="filter-item" key={mark}>
          <label>
            <input 
              type="checkbox"
              value={mark}
              checked={selectedMarks.includes(mark)}
              onChange={() => handleMarkChange(mark)} 
            />
            {mark}
          </label>
        </div>
      ))}

      <h4>Categoria</h4>
      {categories.map((category) => (
        <div className="filter-item" key={category.id}>
          <label>
            <input 
              type="checkbox" 
              value={category.slug}
              checked={selectedCategories.includes(category.slug)}
              onChange={() => handleCategoryChange(category.slug)} 
            />
            {category.name}
          </label>
        </div>
      ))}
    </div>
  );
};
