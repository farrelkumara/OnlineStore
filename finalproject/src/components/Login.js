import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmailError("");
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordError("");
    setPassword(e.target.value);
  };

  const emailCheck = (email, password) => {
    if (email !== "") {
      const emailRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (emailRegex.test(email)) {
        setEmailError("");
        return true;
      } else {
        setEmailError("Invalid Email");
        return false;
      }
    } else {
      setEmailError("Email Required");
      return false;
    }
  };

  const passwordCheck = (password) => {
    if (password === "") {
      setPasswordError("Password Required");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleFormSubmit = (e) => {
    console.log(email, password);
    e.preventDefault();
    emailCheck(email);
    if (passwordCheck(password)) {
      // if (passwordCheck(password)) {
      localStorage.setItem("login", "true");
      history.push("/");
      window.location.reload(false);
      //}
    }
  };

  // const login = (e) => {
  //   e.preventDefault();
  //   console.log(email, password);
  //   localStorage.setItem("login", "true");
  //   history.push("/");
  // };
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     history.push("/loginResult");
  //   }
  // }, []);

  // async function login() {
  //   console.log(email, password);
  //   let item = { email, password };
  //   fetch("https://fakestoreapi.com/users/1", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(item),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));

  //   localStorage.setItem("user-info", JSON.stringify);
  //   history.push("/loginResult");
  // }

  return (
    <>
      <div className="mb-5">
        <h1>Login</h1>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            // type="email"
            className="form-control"
            // id="exampleInputEmail1"
            // aria-describedby="emailHelp"
            onChange={handleEmailChange}
            value={email}
          />
          <br></br>
          {emailError && <div className="error-msg">{emailError}</div>}
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handlePasswordChange}
            value={password}
          />
          <br></br>
          {passwordError && <div className="error-msg">{passwordError}</div>}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Login;
