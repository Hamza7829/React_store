import React, { useState } from 'react';
import './cart.css';
import { Link } from 'react-router-dom';

function Cart({ cart, setCart }) {

  const [clearedItem, setClearedItem] = useState(false);


  const clearItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    setClearedItem(true); 
  };

  return (
    <>
    <h3 style={{textAlign:'center' , padding:'50%'}}>Empty data</h3>
      {cart.length > 0 ? (
        cart.map((p) => (
          <div className="container" key={p.id} style={{width:'20rem'}}>
            <div className="card">
              <img className="card-img" src={p.image} alt={p.name} style={{width:'18rem'}}/>
              <div className="card-body">
                <h3 className="card-title">{p.name}</h3>
                <p className="card-text">{p.description}</p>
                <div className="button-group">
                  <button className="btn btn-primary">Details</button>
                  <button className="btn btn-danger" onClick={() => clearItem(p.id)}>
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        clearedItem && (
          <div className="clear-message">
            <h4>You have cleared the item.</h4>
            <Link to="/" className="btn btn-primary">
              Go to Products
            </Link>
          </div>
        )
      )}
    </>
  );
}

export default Cart;
