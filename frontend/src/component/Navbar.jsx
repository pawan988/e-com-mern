import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div>
        <ul className="nav-ul">
          <li>
            <Link to="/">Product</Link>
            <Link to="/add">Add Product</Link>
            <Link to="/update">Update Product </Link>
            <Link to="/logout">Logout</Link>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
