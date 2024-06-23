import React, { useEffect, useState } from "react";
import loader from "../assets/loader.gif";
import axios from "axios";
import { json } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(undefined);
  const [message, setMessage] = useState("");

  const getData = () => {
    setLoading(true);
    // fetch("https://api.escuelajs.co/api/v1/products")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setProducts(data);
    //     setLoading(false);
    //   });

    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const saveProduct = () => {
    const product = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: " in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    };

    const prod = JSON.stringify(product);

    axios
      .post("https://fakestoreapi.com/products", prod)
      .then((res) => {
        if (res.status == 200) {
          setMessage("Data has been saved.");
        }
      })
      .catch((err) => {
        setMessage(err || "Some error occure.");
      });
  };

  return (
    <div className="container">
      <button className="btn btn-primary my-4" onClick={saveProduct}>
        Save Data
      </button>
      <p className="alert">{message}</p>
      <div className="row">
        {loading ? (
          <img className="w-50 mx-auto" src={loader} />
        ) : (
          products.map((product, idx) => <Card product={product} key={idx} />)
        )}
      </div>
    </div>
  );
};

export default Products;

//------------------------------

const Card = ({ product }) => {
  const handleCart = () => {
    console.log("cart id...");
  };

  const handleDelete = (id) => {
    console.log("delete...", id);
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((res) => console.log(id, " : Item deleted."));
  };

  const handleUpdate = (id) => {
    const product = {
      id: 122,
      title: "test update",
      price: 5000,
      description: " in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    };
    console.log("item update..");
    axios
      .put(`https://fakestoreapi.com/products/${id}`, product)
      .then((res) => console.log(id, "item updated."));
  };
  return (
    <div className="col-md-3 mb-4">
      <div className="card" onClick={() => handleUpdate(product.id)}>
        <img
          src={product.image}
          className="card-img-top w-50 mx-auto pt-2"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <button onClick={handleCart} className="btn btn-primary">
            Add to Card
          </button>
          <a href="#" className=" btn">
            <strong>Price</strong> : $ {product.price}
          </a>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
