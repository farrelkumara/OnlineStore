import { Link, useHistory } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">Bukapedia</li>
            <li className="nav-item">
              <Link to="/" className="nav-link link-dark px-2">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link link-dark px-2">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link link-dark px-2">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-link link-dark px-2">
                Logout
              </Link>
            </li>
          </ul>
          {/* <ul className="nav">
            <li className="nav-item">
              <a
                disable={disable}
                onClick={condition}
                href="/login"
                className="btn btn-primary nav-link link-dark px-2"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-danger nav-link link-dark px-2"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </ul> */}
        </div>
      </nav>
      {/* <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
          >
            <span className="fs-4">My First React App</span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </header> */}
    </>
  );
};

export default Header;
