import React, { useEffect, useState } from "react";
import ProductModel from "../model/ProductModel";
//import axios from 'axios';

const ListProduct = () => {
  const BASEURL = "https://fakestoreapi.com";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASEURL}/products`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="flexContainer">
      {products.length ? (
        products.map((data) => <ProductModel props={data} key={data.id} />)
      ) : (
        <div
          style={{ textAlign: "center", fontWeight: "900", fontSize: "2rem" }}
        >
          Loading...
        </div>
      )}
    </div>
  );
};

export default ListProduct;
