import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact } from "../pages/redux/contactReducer";

const DataList = () => {
  const { contactReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {contactReducer.contacts?.map((item, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>
                <button
                  style={{ marginRight: 5 }}
                  onClick={() => handleDelete(item.id)}
                >
                  delete
                </button>
                <Link to={`/contactupdate/${item.id}`}>update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/contact"}>back to contact</Link>
    </div>
  );
};

export default DataList;
