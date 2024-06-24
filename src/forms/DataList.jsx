import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact } from "../pages/redux/contactReducer";
import dummyAvatar from "../assets/dummyAvatar.jpg";

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
            <th scope="col">Avatar</th>
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
              <td>
                <img
                  src={item.avatar ? item.avatar : dummyAvatar}
                  alt=""
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                  }}
                />
              </td>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>
                <button
                  style={{
                    fontSize: "25px",
                    border: "none",
                    background: "transparent",
                    color: "orange",
                  }}
                  onClick={() => handleDelete(item.id)}
                >
                  <i className="bi bi-trash3"></i>
                </button>

                <Link
                  style={{ fontSize: "25px", paddingLeft: "5px" }}
                  to={`/contactupdate/${item.id}`}
                >
                  <i className="bi bi-pencil-square"></i>
                </Link>
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
