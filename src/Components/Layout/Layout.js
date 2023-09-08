import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import Navbar from "../Navbar/Navbar";
import { GlobalTheme } from "../../Context/Themecontext";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import AuthBtn from "../AuthBtn/AuthBtn";

const Layout = () => {
  const { items } = useCart();
  const { items: wishlistItems } = useWishlist();

  const { toggleMode, darkMode } = useContext(GlobalTheme);

  const { t } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <section className={styles.fixsed}>
      <div className="container">
        <div className="row">
          <div className=" col-12">
            <div className={styles.right}>
              <div
                className={styles.left}
                style={{ paddingRight: "100px", }}
              >
                <div className={styles.items}>
                  <Link to="/">{t("header.0")}</Link>
                </div>
                <div className={styles.items}>
                  <Link to="/about">{t("header.1")}</Link>
                </div>
                <div className={styles.items}>
                  <Link to="/shop">{t("header.2")}</Link>
                </div>
                <div className={styles.items}>
                  <Link to="/blogs">{t("header.3")}</Link>
                </div>
                <div className={styles.items}>
                  <Link to="/help">{t("header.4")}</Link>
                </div>
              </div>

              <div className={styles.burger}>
                <div className="dropdown-center">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ background: "#6c757d", color: "black" }}
                  >
                <i class="fa-solid fa-bars"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li className={styles.li}>
                      <Link to="/">
                        <h4> {t("header.0")}</h4>
                      </Link>
                    </li>
                    <li className={styles.li}>
                      <Link to="/about">
                        <h4> {t("header.1")} </h4>
                      </Link>
                    </li>
                    <li className={styles.li}>
                      <Link to="/shop">
                        <h4>{t("header.2")}</h4>
                      </Link>
                    </li>
                    <li className={styles.li}>
                      {/* <hr className="dropdown-divider" /> */}
                    </li>
                    <li className={styles.li}>
                      <Link to="/blog">
                        <h4>{t("header.3")}</h4>
                      </Link>
                    </li>
                    <li className={styles.li}>
                      <Link to="/card">
                        <h4>
                          <i className="fa-solid fa-basket-shopping"></i>
                          <div className={styles.abs}>
                            {items.length === 0 ? "" : items.length}
                          </div>
                        </h4>
                      </Link>
                    </li>
                    <li className={styles.li}>
                      <Link to="/wishlist">
                        <h4>
                          <i className="fa-regular fa-heart"></i>
                          <div className={styles.abs}>
                            {wishlistItems.length / 2 === 0
                              ? ""
                              : wishlistItems.length / 2}
                          </div>
                        </h4>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>


              <div className={styles.menyus}>

              <Select
                  defaultValue={i18n.language}
                  style={{ width: "80", marginLeft: "10px" }}
                  onChange={changeLang}
                  options={[
                    {
                      value: "en",
                      label: "En",
                    },
                    {
                      value: "az",
                      label: "Az",
                    },
                  ]}
                />

                <label
                  style={{ marginTop: "10px", marginLeft: "10px" }}
                  className={styles.switch}
                >
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onClick={toggleMode}
                  />
                  <div className={styles.slider}></div>
                </label>
                 <div className={styles.items}>
                <Link to="/card">
                  <h4>
                    <i className="fa-solid fa-basket-shopping"></i>
                    <div className={styles.abs}>
                      {items.length === 0 ? "" : items.length}
                    </div>
                  </h4>
                </Link>
              </div>
              <div className={styles.items}>
                <Link to="/wishlist">
                  <h4>
                    <i className="fa-regular fa-heart"></i>
                    <div className={styles.oneabs}>
                      {wishlistItems.length / 2 === 0
                        ? ""
                        : wishlistItems.length / 2}
                    </div>
                  </h4>
                </Link>
              </div>
                <div className={styles.adminblok}>
                  <AuthBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  );
};

export default Layout;
