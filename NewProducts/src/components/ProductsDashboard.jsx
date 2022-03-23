
import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import "./Products.css"

export const Products = ({props}) => {
  const [products, setProducts] = useState([]);
  const [ flag, setFlag]= useState(false);
const navigate = useNavigate();

 
const getProducts = async () => {
 const url = "https://movie-fake-server.herokuapp.com/products";
 const response = await fetch(url);
 try {
    const data = await response.json();
    setProducts(data);
    console.log(data);
 } catch (error) {
    console.log("error", error);
 }
 setFlag(true);
};


useEffect(() => {
  getProducts();
  }, []);
  const handleSort = (e) => {
    const sortBy = e.target.value;
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (sortBy === "lowest") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProducts(sortedProducts);
  };
  return (
    <>
      <div className="container">
      <div className="sort">
            <select onChange={handleSort}>
              <option value="lowest">Lowest to highest</option>
              <option value="highest">Highest to lowest</option>
            </select>
          </div>
        <div className="row">
         
          <div>
            <div className="cards">
             {
                products.map((product, index) => {
               
                  return (
                    <div className="displayDiv" key={index}>
                      <h4 className="card-title">Brand:{product.brand}</h4>
                      <h5 className="card-title">Name:{product.title}</h5>
                      <p className="card-text">
                        {product.description}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">${product.price}</small> </p>
                      <img src={product.image} alt="product" />
                      <div>
                        <button className="btn btn-primary" onClick={() => navigate(`/single-product`)}>
                          View Product
                        </button>
                      </div>
                    </div>
                  );
                })
              }
             
            </div>
          </div>
        </div>
      </div>
    </>
      )
};

