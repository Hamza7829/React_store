import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';
import { products } from './Data'; // Ensure this imports correctly

function Search({cart , setCart}) {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    console.log('Search term:', term); // Check if the term is received correctly
    console.log('Products:', products); // Check if products data is correct

    const FilterItems = () => {
      const filterElement = products.filter((p) =>
        p.name.toLowerCase().includes(term.toLowerCase()) // Assuming 'title' exists in products
      );
      setFilterData(filterElement);
    };
    FilterItems();
  }, [term]);

  return (
    <div className='container'>
      {filterData.length === 0 ? (
        <p>No products found for "{term}"</p>
      ) : (
        <Products cart={cart} setCart={setCart} items={filterData} />
      )}
    </div>
  );
}

export default Search;
