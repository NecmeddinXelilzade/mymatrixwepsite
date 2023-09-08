import React from "react";
// import ShopLogo from "../../assets/icons/shopLogo.svg";
import InstagramLogo from "../../Assets/image/icons-instagram.svg";
import FacebookLogo from "../../Assets/image/icons-facebook.svg";
import YoutubeLogo from "../../Assets/image/icons-youtube.svg";
import PaymentsImage from "../../Assets/image/payment-getways.png";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-6  p-2">
              <div className={styles.center}>
                <h5 className={styles.footerBoldItems}>Plamen</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor libero id et, in gravida. Sit diam duis mauris nulla
                  cursus. Erat et lectus vel ut sollicitudin elit at amet.
                </p>
                  <div className={styles.link}>  <Link to="/">Flash Sale</Link></div>
                <div className={styles.link}><Link to="/">Support</Link></div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-6 p-2">
              <div className={styles.center}>
                <h5 className={styles.footerBoldItems}>About us</h5>
                <div className={styles.lefttop}>
                  <p>
                  <Link className={styles.link} to="/help">
                    FAQ
                  </Link>
                  </p>
                  <p>
                    <Link className={styles.link} to="/about">
                      About-us
                    </Link>
                  </p>
                  <div className={styles.link}>  <Link to="/">Privacy Policy</Link></div>
                <div className={styles.link}><Link to="/">Careers</Link></div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-6  p-2">
              <div className={styles.center}>
                <h5 className={styles.footerBoldItems}>Contact Us</h5>
                <p>
                  70 Washington Square South, New York, NY10012, United States
                </p>
                <p>Email: mt.help@ gmail.com</p>
                <p>Contakt: *3363</p>
                <p>Phone: +1 1123 456 780</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-6  p-2">
              <div className={styles.center}>
                <h5 className={styles.footerBoldItems}>General Links</h5>
                <p>
                  <Link className={styles.link} to="/blogs">
                    Blog
                  </Link> 
                </p>
                <div className={styles.link}>  <Link to="/">Returns & Refunds</Link></div>
                <div className={styles.link}>  <Link to="/">Terms & Conditions</Link></div>
                <div className={styles.link}><Link to="/">Corporate & Bulk Purchasing</Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className={styles.footer_last_hrTag} />
      <section>
        <div class="container">
          <div class="row">
            <div
              style={{ display: "flex", alignItems: "center" ,justifyContent:"center" }}
              class="col-lg-6 col-md-6  p-2"
            >
              <div className={styles.footerIcons}>
                <img className={styles.webLinks} src={InstagramLogo} />
                <img className={styles.webLinks} src={FacebookLogo} />
                <img className={styles.webLinks} src={YoutubeLogo} />
              </div>
              <div>
                &copy;2022 <span>All rights reserved</span>
              </div>
            </div>

            <div
              class="col-lg-6 col-md-6"
              style={{ display: "flex", alignItems: "center" ,justifyContent:"center"}}
            >
              <div className={styles.rightimg}>
                <img className={styles.images} src={PaymentsImage} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
