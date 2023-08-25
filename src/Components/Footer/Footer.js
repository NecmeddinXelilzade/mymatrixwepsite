import React from "react";
// import ShopLogo from "../../assets/icons/shopLogo.svg";
import InstagramLogo from "../../Assets/image/icons-instagram.svg";
import FacebookLogo from "../../Assets/image/icons-facebook.svg";
import YoutubeLogo from "../../Assets/image/icons-youtube.svg";
import PaymentsImage from "../../Assets/image/payment-getways.png";
import { Link } from "react-router-dom";

import styles from './Footer.module.scss'


const Footer = () => {
    return (
<div>
      <hr className={styles.footer_hrTag} />
      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6">
              <div>
                <h5 className={styles.footerBoldItems}>About us</h5>
                <div className={styles.lefttop}>
                <Link className={styles.link} to="/help">FAQ</Link>
                <Link  className={styles.link} to="/about">About-us </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6" >
              <div>
                <h5 className={styles.footerBoldItems}>Contact Us</h5>
                <p>*3363</p>
                <p>+994(50)-881-93-49</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6" >
              <div>
                <h5 className={styles.footerBoldItems}>General Links</h5>
                <p ><Link className={styles.link} to="/blog">Blog</Link></p>
                <p>Tracking Order</p>
              </div>
              <div></div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6" >
              <div>
                <h5 className={styles.footerBoldItems}>Helpful</h5>
                <p>Flash Sale</p>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className={styles.footer_last_hrTag} />
      <section>
        <div class="container">
          <div class="row">
            <div style={{ display: "flex",alignItems:"center" }} class="col-lg-6  p-2">
              <div className={styles.footerIcons}>
                <img className={styles.webLinks} src={InstagramLogo} />
                <img className={styles.webLinks} src={FacebookLogo} />
                <img className={styles.webLinks} src={YoutubeLogo} />
              </div>
              <div>
                &copy;2022{" "}
                <span>All rights reserved</span>
              </div>
            </div>

            <div class="col-lg-6" style={{ display: "flex",alignItems:"center" }}>
              <img src={PaymentsImage} />
            </div>
          </div>
        </div>
      </section>
    </div>
    );
}

export default Footer;
