import React from "react";
import logo from "../assets/images/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus as Cart } from "react-icons/fa";
import { useSelector } from "react-redux";
import cartReducer from "../redux/reducer/reducer";
import "../assets/css/navbar.css"

function Navbar() {
  const navigate = useNavigate();
  const person = localStorage.getItem("user");
  const logoutdata = () => {
    localStorage.clear();
    navigate("/");
  };

  const getData = useSelector((state) => state.cartReducer.carts)
  // console.log(getData);

  return (
    <>
      {
        person ? (
          <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ color: 'white' }}>
            <div className="container-fluid" style={{ backgroundColor: "#333333" }}>
              <Link className="navbar-brand" to="/"> <img style={{ height: "40px", width: "60px" }} src={logo} alt="" /></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/menu">
                      MENU
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/services">
                      SERVICES
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/contact">
                      CONTACT
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-light"
                      to="/signup"
                      onClick={logoutdata}
                    >
                      LOGOUT({JSON.parse(person).name})
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/cart">
                      Cart{" "}
                      <span className="badge text-bg-secondary">{getData.length>0?getData.length:''}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
          :
          (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ color: 'white' }}>
              <div className="container-fluid" style={{ backgroundColor: "#333333" }}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 mytext">
                  <li className="nav-item">
                        <Link className="nav-link text-light" to="/login">
                          LOGIN
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-light" to="/signup">
                          SIGNUP
                        </Link>
                      </li>
                  </ul>
                </div>
              </div>
            </nav>
          )
      }
    </>
  );
}

export default Navbar;
