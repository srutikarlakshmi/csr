import { useState } from "react";
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { account } from "../../../config/appwrite";

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // APPWRITE CONFIGURATION
  const loginFunc = async (e) => {
    e.preventDefault(); 
    try {
      await account.createEmailSession(userData.email, userData.password);
      navigate("/company");
    } catch (error) {
      console.log(error);
    }
  };
  const loginFunc1 = async (e) => {
    e.preventDefault(); 
    try {
      await account.createEmailSession(userData.email, userData.password);
      navigate("/org");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login1">
      <form>
        <div className="cirlce1-parent">
          <div className="cirlce1"></div>
          <Link to="/">
      
        <div className="head">Elevate Ethics</div>
        </Link>
          <div className="sub-head">Login</div>

          <div className="email">Email</div>
          <input
            className="mail"
            type="email"
            id="login-input"
            placeholder="Enter email..."
            required
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <div className="password">Password</div>
          <input
            className="pwd"
            type="password"
            id="login-input"
            placeholder="Enter password..."
            autoComplete="password"
            required
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <div className="para1">
            <span className="dont-have-an">Don’t have an account?</span>
            <span className="span"> </span>
          </div>
          <Link to="/register">
            <div className="sign-up">Sign up</div>
          </Link>

          <div className="comp-login">
            <button
              className="org-login-child"
              type="submit"
              value="Login"
              onClick={loginFunc}
              id="login-btn"
            >
              <b className="login-comp">Login to Company</b>
            </button>
          </div>
          <div className="org-login">
            <button
              className="org-login-child"
              type="submit"
              value="Login"
              onClick={loginFunc1}
              id="login-btn"
            >
              <b className="login-comp">Login to Org</b>
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Login;
