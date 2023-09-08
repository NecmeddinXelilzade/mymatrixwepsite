import React, { useEffect } from "react";
import styles from "./Blog.module.scss";
import bloglast from "../../Assets/image/bloglast.jpg";
import slider1 from "../../Assets/image/blog1.jpg";
import slider2 from "../../Assets/image/blog2.jpg";
import slider3 from "../../Assets/image/blog3.jpg";
import slider4 from "../../Assets/image/blog4.jpg";
import Plamen from "../Plamen/Plamen";
import Aos from "aos";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";


const Blogs = () => {

  const blogs = useSelector((state) => state.BlogReducer);

  useEffect(()=>{
    Aos.init()
  })

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (

   

    <>
      <section className={styles.theme}>
        <img className={styles.img} src={bloglast} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.blogCard}>
                <img className={styles.images} src={slider1} alt="" />
                <h1 className={styles.contend}>{t("blog.2")}</h1>
                <div>
                {t("blog.0")}
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className={styles.blogCard}>
                <img className={styles.images} src={slider2} alt="" />
                <h1 className={styles.contend}>{t("blog.3")}</h1>
                <div>
                {t("blog.0")}
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className={styles.blogCard}>
                <img className={styles.images} src={slider3} alt="" />
                <h1 className={styles.contend}>{t("blog.4")}</h1>
                <div>
                {t("blog.0")}
                </div>
              </div>
            </div>
            
            <div className="col-lg-12">
              <div className={styles.blogCard}>
                <img className={styles.images} src={slider4} alt="" />
                <h1 className={styles.contend}>{t("blog.5")}</h1>
                <div className={styles.contendtwo} >
                {t("blog.0")}
                </div>
              </div>
            </div>

            {blogs.map((item) => {
              return (
                <>
            <div className="col-lg-12" style={{marginTop:"20px"}}>
              <div className={styles.blogCard}>
                <img className={styles.images}  src={item.imageUrl} alt="" />
                <h1 className={styles.contend}>{item.title}</h1>
                <div className={styles.contendtwo} >{item.description}</div>
              </div>
            </div>
                </>
              );
            })}

            <div className="col-lg-12" style={{marginTop:"20px"}}>
              <div className={styles.cartstil}>
                <h3> {t("blog.1")}</h3>
                <h1 className={styles.name}>DON JOHNSON </h1>
                <p className={styles.name}> 15.12.2002</p>
              </div>
            </div>

          </div>
        </div>
        <Plamen/>
      </section>
    </>
  );
};

export default Blogs;
