import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const admin = {
    name: "Necmeddin",
    password: "az02mran",
  };

  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const location = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let userFromLocal = JSON.parse(localStorage.getItem("User"));

  const submitForm = (e) => {
    e.preventDefault();
    if (admin.name === user.name && admin.password === user.password) {
      location("/dasboard");
      localStorage.setItem('Admin', JSON.stringify(admin))
      window.location.reload()
    } else if (
      user.name === userFromLocal.name &&
      user.password === userFromLocal.password
    ) {
      location("/");
      localStorage.setItem('NewUser', JSON.stringify(user))
      window.location.reload()
    }
    else{
        alert('error')
    }
  };
  return (
    <>
            <section className={styles.theme}>
            <div className="container mt-5">
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <NavLink style={{marginLeft:"20px"}}  type="submit" className="btn btn-primary" to='/register'>
            Dont you have account
          </NavLink>
        </form>
      </div>
            </section>
    </>
  );
};

export default Login;