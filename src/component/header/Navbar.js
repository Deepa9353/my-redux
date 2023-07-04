import React from "react";
import { BiLogIn } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm fixed-top ">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            LORA-COLLECTIONS
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-5 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contect">
                  Contect
                </NavLink>
              </li>
            </ul>
            <div className="d-flex me-5 px-20" role="search">
              <input
                className="form-control px-400"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="buttons  ">
              <NavLink to="/Login" className="btn btn-outline-dark me-2">
                <BiLogIn /> Login
              </NavLink>
              <NavLink to="/Register" className="btn btn-outline-dark ms-2">
                <FaUserAlt />
                Register
              </NavLink>
              <NavLink
                to="/Cart"
                className="btn btn-outline-dark ms-2 py-2 px-4"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-fill"
                    viewBox="0 0 12 12"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                  </svg>
                  <span>
                    <span>{0}</span>
                  </span>
                </div>
              </NavLink>
              <NavLink to="/Login" className="btn btn-outline-dark me-2">
                <BiLogIn /> Dashbord
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
