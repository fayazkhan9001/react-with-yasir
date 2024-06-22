import React, { useEffect, useState } from "react";
import loader from "../assets/loader.gif";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(undefined);

  const getData = () => {
    setLoading(true);
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row">
      {loading ? (
        <img className="w-50 mx-auto" src={loader} />
      ) : (
        products.map((product, idx) => <Card product={product} key={idx} />)
      )}
    </div>
  );
};

export default Products;

const Card = ({ product }) => {
  const handleCart = () => {
    console.log("cart id...");
  };
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={product.images} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <button onClick={handleCart} className="btn btn-primary">
            Add to Card
          </button>
          <a href="#" className=" btn">
            <strong>Price</strong> : $ {product.price}
          </a>
        </div>
      </div>
    </div>
  );
};
