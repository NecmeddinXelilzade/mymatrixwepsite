// import React from "react";
import styles from "./Singlecard.module.css";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import WishlistBtn from "../WishlishBtn/wishlistBtn";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import React, { useEffect } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Singlecard = ({ product }) => {
  const { addItem } = useCart();

  useEffect(() => {
    Aos.init();
  });

  const { t } = useTranslation();

  return (
    <>
      <div data-aos="flip-up">
        <div
          className="card"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            border: "solid 2px gold",
            overflow: "hidden",
          }}
        >
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <img
              src={product.image}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              <div className={styles.context}>
                <div>
                  {t("singlecard.0")}: {product.price}€
                </div>
                <div>
                  {t("singlecard.1")}: {product.catageory}
                </div>
              </div>
            </p>
            <button
              className="btn btn-success"
              onClick={() => {
                addItem(product);
                toast.success("Product added successfully");
              }}
            >
              Add to cart
            </button>
            <div className={styles.abs}>
              <WishlistBtn oturduyumMehsul={product} />
            </div>
            <NavLink
              style={{ marginLeft: "20px", fontSize: "20px" }}
              to={`/product/${product.id}`}
            >
              <i class="fa-regular fa-eye"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singlecard;
