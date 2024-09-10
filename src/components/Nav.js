import React, { useState } from 'react';
import { ImAidKit } from "react-icons/im";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { products } from './Data';
import "./Nav.css";

function Nav({ setData ,cart }) {
  const navigate = useNavigate();
  const location=useLocation();

  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${search}`);
  };

  const handleFilter = (category) => {
    const element = products.filter((cat) => cat.catagory=== category);
    setData(element);
  };

  const handlePrice = (price) => {
    const pr = products.filter((p) => p.price >= price);
    setData(pr);
  };

  return (
    <>
      <header className="sticky-top">
        <div className='nav-bar'>
          <div className='brand'>
            <Link to="/"><IoHome /></Link>
          </div>
          <form className='input-box' onSubmit={handleSubmit}>
            <input
              type='text'
              value={search}
              placeholder='search your data'
              onChange={(event) => setSearch(event.target.value)}
            />
          </form>
          <div className='cart'>
            <Link to={'cart'} className="btn btn-primary">
              <ImAidKit />
              <span className="badge">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
        {
          location.pathname=='/' &&(
            <div className='nav-bar-wrapper'>
            <div className='items'onClick={() => setData(products)}>Filter Items</div>
            <div className='items' onClick={() => setData(products)}>No Filter</div>
            <div className='items' onClick={() => handleFilter('Laptop')}>Laptop</div>
            <div className='items' onClick={() => handleFilter('Tablet')}>Tablet</div>
            <div className='items' onClick={() => handleFilter('Mobile')}>Mobile</div>
            <div className='items' onClick={() => handleFilter('WATCH')}>Watch</div>
            <div className='items' onClick={() => handlePrice(30000)}>{">="} 30000</div>
            <div className='items' onClick={() => handlePrice(60000)}>{">="} 60000</div>
          </div>
          )
        }
       
      </header>
    </>
  );
}

export default Nav;
