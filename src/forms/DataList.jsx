import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DataList = () => {
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    setLocalData(JSON.parse(localStorage.getItem("record")));
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          {localData?.map((item, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/contact"}>back to contact</Link>
    </div>
  );
};

export default DataList;
