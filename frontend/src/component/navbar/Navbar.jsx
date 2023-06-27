import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();

  const user = localStorage?.getItem("user");
  const handleLogout = () => {
    localStorage?.clear();
    navigate("/signup");
  };
  return (
    <>
      <div>
        <ul className="nav-ul">
          <li>
            <Link to="/">Product</Link>
            <Link to="/add">Add Product</Link>
            <Link to="/update">Update Product </Link>

            <Link to="/profile">Profile</Link>
            {user ? (
              <Link onClick={() => handleLogout()} to="/signup">
                Logout
              </Link>
            ) : (
              <Link to="/signup">Sign Up</Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
