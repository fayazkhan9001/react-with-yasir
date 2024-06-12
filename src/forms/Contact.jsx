import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const dataArray = [];
const Contact = () => {
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        contact: "",
      },
      validationSchema: Yup.object({
        fullName: Yup.string()
          .max(15, "character must be 15 or less")
          .min(4, "character must be 4 or above")
          .required("Please fill Full Name"),
        email: Yup.string()
          .matches(
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            "Please provide a valid Email"
          )
          .required("Please fill the Email"),
        contact: Yup.string()
          .matches(
            /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm,
            "Please a valid Number"
          )
          .required(),
      }),
      onSubmit: () => {
        dataArray.push(data);
        localStorage.setItem("record", JSON.stringify(dataArray));
      },
    });

  return (
    <div>
      <form className="row g-3 w-50 p-5" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            className="form-control"
            id="fullName"
            value={values.fullName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label style={{ color: "red" }}>
            {touched.fullName && errors.fullName ? errors.fullName : null}
          </label>
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            id="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label style={{ color: "red" }}>
            {touched.email && errors.email ? errors.email : null}
          </label>
        </div>
        <div className="col-12">
          <label htmlFor="contact" className="form-label">
            Contact
          </label>
          <input
            className="form-control"
            id="contact"
            value={values.contact}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label style={{ color: "red" }}>
            {errors.contact && touched.contact ? errors.contact : null}
          </label>
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
