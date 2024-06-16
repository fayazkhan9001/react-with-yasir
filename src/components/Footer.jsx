import React from "react";
import { useSelector } from "react-redux";
const Footer = () => {
  const { bank } = useSelector((a) => a);
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-text">
            Navbar text with an inline element {bank.value}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
