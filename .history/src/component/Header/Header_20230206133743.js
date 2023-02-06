/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../images/logo.png";
import "./Header.css";
import CartImg from "../../images/cart 5.png";
import img1 from "../../images/person 1.jpg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [ userModal , setuserModal ] = useState(false)

  const token = localStorage.getItem("token");

  return (
    <>
      <div className="HomeNewnav">
        <div className="left">
          <img src={img} alt="" />
        </div>
        <div className="right">
          <ul>
            <Link to={"/"}>
              <li className="normalList">Home</li>
            </Link>
            <li className="normalList">About </li>
            <Link to={"/allCou"}>
              <li className="normalList">Courses</li>
            </Link>
            <li className="normalList">Resources</li>

            {token ? (
              <>
                <li>
                  <input type={"search"} placeholder="Search" />
                </li>
                <li>
                  <i
                    class="fa-solid fa-heart normalList"
                    style={{ color: "red" }}
                  >
                    {" "}
                  </i>
                </li>
                <li>
                  <img
                    src={CartImg}
                    alt="Cart"
                    className="CartImg"
                    style={{ marginTop: "5px" }}
                  />
                </li>
                <li>
                  <img src={img1} alt="" className="personImg" />
                </li>
              </>
            ) : (
              <>
                <li style={{ fontWeight: "bold" }}>Login</li>
                <Link to={"/freeTrial"}>
                  <button>Free Trial </button>
                </Link>
                <li>
                  <i
                    class="fa-solid fa-magnifying-glass"
                    style={{ cursor: "pointer" }}
                  ></i>
                </li>
              </>
            )}
          </ul>
          <div className="sideBarMenu">
            <i class="fa-solid fa-bars" onClick={() => setOpen(!open)}></i>
          </div>
        </div>
      </div>

      {open ? (
        <div className="sideMenuRes" style={{ marginLeft: "10px" }}>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li>About </li>
            <Link to={"/allCou"}>
              <li>Courses</li>
            </Link>
            <li>Resources</li>
            <li style={{ fontWeight: "bold" }}>Login</li>
            <Link to={"/freeTrial"}>
              <button>Free Trial </button>
            </Link>
          </ul>
        </div>
      ) : (
        <div className="sideMenuRes">
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li>About </li>
            <Link to={"/allCou"}>
              <li>Courses</li>
            </Link>
            <li>Resources</li>
            <li style={{ fontWeight: "bold" }}>Login</li>
            <Link to={"/freeTrial"}>
              <button>Free Trial </button>
            </Link>
          </ul>
        </div>
      )}





      <div className="Userinfo">
        <button type="button">My Account</button>
        <button type="button">Go to Cart</button>
        <button type="button">Notification</button>
        <button type="button" onClick={()}>Sign out</button>
      </div>
    </>
  );
};

export default Header;
