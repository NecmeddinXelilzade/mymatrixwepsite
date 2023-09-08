import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddBlogFunc } from "../../redux/Actions/Actions";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddBlog.module.css";

const AddBlog = () => {
  const dispatch = useDispatch();

  const [newBlog, setNewBlog] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const location = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(AddBlogFunc(newBlog));
    location("/blogs");
  };
  return (
    <>
      <section className={styles.theme}>
        <div className="container mt-5">
          <form
            onSubmit={submitForm}
            style={{ paddingTop: "150px", paddingBottom: "150px" }}
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                name="description"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Image
              </label>
              <input
                type="text"
                className="form-control"
                name="imageUrl"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add blog
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddBlog;
