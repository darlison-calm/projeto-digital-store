import { useState, useEffect } from 'react';
import axios from 'axios';

export const FilterOptions = ({ onMarkChange }) => {
  const [marks, setMarks] = useState([]);
  const [selectedMarks, setSelectedMarks] = useState([]);
  
  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products/marks');
        setMarks(response.data.data);
      } catch (error) {
        console.error('Error fetching marks:', error);
      }
    };

    fetchMarks();
  }, []);

  const handleMarkChange = (mark) => {
    let newSelectedMarks;
    
    if (selectedMarks.includes(mark)) {
      newSelectedMarks = selectedMarks.filter(m => m !== mark);
    } else {
      newSelectedMarks = [...selectedMarks, mark];
    }
    
    setSelectedMarks(newSelectedMarks);
    onMarkChange(newSelectedMarks);
  };

  return (
    <div className="filter-options">
      <h3>Filtrar por</h3>
      
      {/* Marca Filter */}
      {marks.map((mark) => (
        <div className="filter-item" key={mark}>
          <label>
            <input 
              type="checkbox" 
              name="marca" 
              value={mark.toLowerCase()}
              checked={selectedMarks.includes(mark)}
              onChange={() => handleMarkChange(mark)}
            />
            {mark}
          </label>
        </div>
      ))}
      
      {/* Categoria Filter */}
      <h3>Categoria</h3>
      <div className="filter-item">
        <label>
          <input type="checkbox" name="categoria" value="esporte-e-lazer" /> Esporte e Lazer
        </label>
      </div>
      <div className="filter-item">
        <label>
          <input type="checkbox" name="categoria" value="casual" /> Casual
        </label>
      </div>
      
      {/* Gênero Filter */}
      <h3>Gênero</h3>
      <div className="filter-item">
        <label>
          <input type="checkbox" name="genero" value="masculino" /> Masculino
        </label>
      </div>
      <div className="filter-item">
        <label>
          <input type="checkbox" name="genero" value="feminino" /> Feminino
        </label>
      </div>

      {/* Estado Filter */}
      <h3>Estado</h3>
      <div className="filter-item">
        <label>
          <input type="checkbox" name="estado" value="novo" /> Novo
        </label>
      </div>
    </div>
  );
};
