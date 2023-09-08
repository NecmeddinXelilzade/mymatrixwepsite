import React, { useEffect } from 'react';
import styles from "./About.module.css";
import about from "../../Assets/image/about.jpg";
import aboutartur from "../../Assets/image/about-autor-img.png";
import Plamen from "../Plamen/Plamen";
import { useTranslation } from "react-i18next";

const About = () => { 

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className={styles.theme}>
      <img className={styles.img} src={about} alt="" />
        <div className="container">
          <div className="row">
          <div className="col-lg-12">
              <div className={styles.blogCard}>
                <img className={styles.images} src={aboutartur} alt="" />
                <div className={styles.contend}>
                 <h1 className={styles.contend}>  {t("about.0")}</h1>
                <div>
                {t("about.1")}
                </div> 
                </div>
              </div>

            </div>

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
                <div>Closed</div>
              </div>
            </div>
          </div>

            
          </div>
        </div>
        <Plamen/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.18588939894!2d49.8549596!3d40.394592499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLE!5e0!3m2!1saz!2saz!4v1693401543581!5m2!1saz!2saz"  style={{border: 0, width:'100%', height:'400px'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </>
  );
}

export default About;

