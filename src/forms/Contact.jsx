import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const dataArray = [];
const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    contact: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dataArray.push(data);
    localStorage.setItem("record", JSON.stringify(dataArray));
  };

  return (
    <div>
      <form className="row g-3 w-50 p-5" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="contact" className="form-label">
            Contact
          </label>
          <input
            type="text"
            className="form-control"
            id="contact"
            onChange={(e) => setData({ ...data, contact: e.target.value })}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
      <Link to={"/datalist"}>Check List</Link>
    </div>
  );
};

export default Contact;
