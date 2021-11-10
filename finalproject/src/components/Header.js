import { Link, useHistory } from "react-router-dom";
import React from "react";

const Header = () => {
  const history = useHistory();
  const logout = () => {
    // localStorage.removeItem("login");
    localStorage.setItem("login", "false");
    history.push("/");
    window.location.reload(false);
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-2 px-4 justify-content-between">
      <a class="navbar-brand" href="/">Bukapedia</a>
      <div>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/" className="nav-link link-dark px-2">
              Home
            </Link>
          </li>
          {localStorage.getItem("login") === "true" ? 
          <>
            <li className="nav-item">
              <Link to="/cart" className="nav-link link-dark px-2">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <button
                to="/logout"
                className="btn btn-danger"
                onClick={logout}
                >
                Logout
              </button>
            </li>
          </>
          : 
            <li className="nav-item">
              <Link to="/login" className="nav-link link-dark px-2">
                Login
              </Link>
            </li>
           }
        </ul>
      </div>
    </nav>
  );
};

export default Header;
