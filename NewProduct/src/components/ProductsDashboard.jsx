import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getproductsData, sortProducts } from "../Redux/actions";
import styles from "./products.module.css";
export const Products = () => {
  // const data = useSelector((state) => state.products);
  const data = useSelector((state) => state.sortedProds);

  const nav = useNavigate();
  // to get all products list on component mounts
  const dispatch = useDispatch();
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData());
  }, [dispatch]);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
    // console.log(e.target.value)
    dispatch(sortProducts(e.target.value.trim()));
  };
  return (
    <>
      <h2>Products Page</h2>
      <select id={styles.productsSelector }onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      {console.log(data)}
      <div id={styles.container} className="products-list">
        {/* map throught th products  list and display the results */}
        {data &&
          data.map((el) => {
            return (
              <div
                className={styles.card}
                key={el.id}
                onClick={() => nav(`/products/${el.id}`)}>
                 
                <img src={el.image} alt="" />
                <h6>{el.title}</h6>
                  <p>Rs.{el.price}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};
