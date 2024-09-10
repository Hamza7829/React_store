import React, { useState, useEffect } from 'react';
import { products } from './Data';
import { useParams } from 'react-router-dom';
import Products from './Products';
import './productdetail.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetail({ cart, setCart }) {
  const { id } = useParams();
  const [filterDetail, setFilterDetail] = useState({});
  const [catagory, setCatagory] = useState([]);

  useEffect(() => {
    const filter = products.filter((prod) => prod.id == id);
    setFilterDetail(filter[0]);
    const findCatagory = products.filter((p) => p.catagory === filter[0]?.catagory);
    setCatagory(findCatagory);
  }, [id]);

  const setToCart = (id, price, name, description, image) => {
    const myObj = { id, price, name, description, image };
    setCart([...cart, myObj]);
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

  if (!filterDetail || Object.keys(filterDetail).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
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
          <div className="col-md-6">
            <div className="card">
              <img
                className="card-img-top"
                src={filterDetail.image}
                alt={filterDetail.title || 'Product image'}
              />
              <div className="card-body">
                <h5 className="card-title">{filterDetail.name}</h5>
                <p className="card-text">{filterDetail.description}</p>
                <div className="d-flex flex-column align-items-center mt-3">
                  <button className="btn btn-primary mb-2 mx-2">
                    {filterDetail.price} PKR
                  </button>
                  <button
                    onClick={() => setToCart(filterDetail.id, filterDetail.price, filterDetail.name, filterDetail.description, filterDetail.image)}
                    className="btn btn-secondary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 style={{ textAlign: 'center' }}>Related Products</h3>
          <Products cart={cart} setCart={setCart} items={catagory} />
        </div>
      </div>
    </div>
  );
}
