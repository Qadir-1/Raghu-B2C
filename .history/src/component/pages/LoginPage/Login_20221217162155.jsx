/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  async function login() {
    const temp = {
      userIdentifier: number,
      password: password,
    };
    try {
      // const url = "https://r-education-flyweis.herokuapp.com/user/login";
      // const response = await axios.post(url, temp);
      // console.log("response", response.data);

      // localStorage.setItem("token", response.data.data.token);
      navigate("/home");
    } catch (err) {
      console.log("error", err);
    }
  }
  return (
    <>
      <div className="login_main_container">
        <div className="login_container">
          <div className="nav">
            <div className="nav_items_containers">
              <div className="logo">
                <Link to="/" className="links">
                  <h1>LOGO</h1>
                </Link>
              </div>

              <div className="buttons">
                <button>LOGIN</button>
                <button>LOGIN WITH FREE</button>
              </div>
            </div>

            <div className="loginForm">
              <div action="" className="inputForm">
                <div className="logo">
                  <h1 style={{ textAlign: "center" }}>WELCOME</h1>
                  <p style={{ textAlign: "center" }}>
                    Welcome to Expert-Works! A top cloud-based e-learning
                    platform specially developed for professionals looking for
                    self-paced learning models. Sign Up Now!
                  </p>
                  <p style={{ textAlign: "center" }}>
                    You are about to join a vibrant community of learners who
                    are committed to achieving their goals and reaching their
                    full potential. Join us today to access our vast library of
                    courses, interactive assignments, projects, and personalized
                    learning plans.
                  </p>
                  <p style={{ textAlign: "center" }}>
                    Sign up now to take your education to the next level. You
                    can get the most out of Expert-works quickly and easily
                    thanks to our simple interface and helpful customer service
                    team. So, don't put it off any longer - sign up now and
                    begin achieving your learning goals!
                  </p>
                </div>

                <input
                  type="text"
                  placeholder="Email or Phone"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="loginbtn">
                  <button onClick={login}>LOG IN</button>
                </div>

                <span onClick={() => navigate("/emailVerify")}>
                  forget Password
                </span>

                <div className="create">
                  <Link to="/create-acount" className="links">
                    <button>Create an account</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
