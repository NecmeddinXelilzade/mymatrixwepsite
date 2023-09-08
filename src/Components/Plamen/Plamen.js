import logo from '../../Assets/image/logo2.jpg'
import styles from './Plamen.module.scss'
import React, { useEffect } from "react";
import Aos from "aos";
import { useTranslation } from "react-i18next";

const Plamen = () => {

  useEffect(()=>{
    Aos.init()
  })

  const { t } = useTranslation();
  
  return (
    <>
      <section>

       <div data-aos="zoom-in" >
       <div className="container" >
          <div className="row">
            <div className="col-12">
            <div className={styles.plamen}>
                <img   className={styles.img} src={logo} alt="" />
                 <div>{t("home.7")}</div>
            </div>
            </div>
          </div>
        </div>
       </div>
      </section>
    </>
  );
};


export default Plamen;
