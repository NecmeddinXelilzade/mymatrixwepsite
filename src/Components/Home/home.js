import React, { useContext, useEffect } from "react";
import { GlobalData } from "../../Context/GlobalContext";
import Singlecard from "../Singlecard/Singlecard";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import banner3 from "../../Assets/image/banner2.jpg";
import banner2 from "../../Assets/image/banner3.jpg";
import banner1 from "../../Assets/video/banner1.mp4";
import Plamen from "../Plamen/Plamen";
import Aos from "aos";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

// import clients1 from "../../Assets/image/clients1.png";
// import clients2 from "../../Assets/image/clients2.png";
// import clients3 from "../../Assets/image/clients3.png";
// import clients4 from "../../Assets/image/clients4.png";
// import clients5 from "../../Assets/image/clients5.png";
// import clients6 from "../../Assets/image/clients6.png";

const Home = () => {
  const { data } = useContext(GlobalData);
  useEffect(() => {
    Aos.init();
  });


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { t } = useTranslation();

  return (
    <section className={styles.theme}>
      <div className="container">
        <div className="row">
          <Slider />
          <div className={styles.contend}>
            <Link to="/shop">
              <h1 className={styles.contend_h}>{t("home.0")}</h1>
            </Link>
          </div>

          {data.slice(0, 6).map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-6 p-3">
                <Singlecard product={item} key={item.id} />
              </div>
            );
          })}
          <div className="col-lg-6 col-md-6  p-3">
            <div data-aos="flip-down" className={styles.leftitem}>
              <h2>  {t("home.1")}</h2>
              <h1>  {t("home.2")} </h1>
              <p>
              {t("home.3")}
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 p-3">
            <div data-aos="flip-down" className={styles.rightitem}>
              <div className={styles.workday}>
                <h3>{t("home.4")}</h3>
                <div>9:00-10:00</div>
              </div>
              <hr className={styles.line} />
              <div className={styles.workday}>
                <h3>{t("home.5")}</h3>
                <div>9:00-3:00</div>
              </div>
              <hr className={styles.line} />
              <div className={styles.workday}>
                <h3>{t("home.6")}</h3>
                <div>{t("home.8")}</div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <video
              className={styles.bannervideo}
              src={banner1}
              type="video/mp4"
              // autoPlay={true} 
              // loop
              controls
            ></video>
          </div>
          <div className="col-lg-6 col-md-6 col-12 p-2">
            <img className={styles.bannerimg} src={banner3} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-12 p-2">
            <img className={styles.bannerimg} src={banner2} alt="" />
          </div>
          {/* <div className="col-lg-2 col-md-4 col-sm-4 col-6 p-2 ">
           <img src={clients1} alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-6 p-2">
           <img src={clients2} alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-6 p-2">
           <img src={clients3} alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-6 p-2">
           <img src={clients4} alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-6 p-2">
           <img src={clients5} alt="" />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-6 p-2">
           <img src={clients6} alt="" />
          </div> */}
        </div>
      </div>
      <Plamen />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.18588939894!2d49.8549596!3d40.394592499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLE!5e0!3m2!1saz!2saz!4v1693401543581!5m2!1saz!2saz"  style={{border: 0, width:'100%', height:'400px'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </section>
  );
};

export default Home;

// <img src={clients2} alt="" />
// <img src={clients3} alt="" />
// <img src={clients4} alt="" />
// <img src={clients5} alt="" />
// <img src={clients6} alt="" />
