import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const divStyles = {
    boxShadow: "1px 7px 11px black",
    margin: "4em",
    padding: "1em",
    marginTop: "90px",
    borderRadius: "150px",
    color: "white",   
    background: "transparent",
  };

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="OnlineStore" />

          <div className="banner">
            <a href="#container">
              <button style={divStyles}>Explore</button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
