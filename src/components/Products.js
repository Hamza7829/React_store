import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products({ items, cart, setCart }) {
  const setToCart = (id, price, name, description, image) => {
    const myObj = { id, price, name, description, image };
    setCart((prevCart) => [...prevCart, myObj]);
    toast.success('Your item is added', {
      position: "top-right",
      autoClose: 5002,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  if (!items || items.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={5002}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="row">
        {items.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-10 mb-4" key={product.id}>
            <div className="card">
              <Link to={`/product/${product.id}`}>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.name || 'Product Image'}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-primary">
                    {product.price} PKR
                  </button>
                  <button
                    onClick={() => setToCart(product.id, product.price, product.name, product.description, product.image)}
                    className="btn btn-secondary mx-1"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
