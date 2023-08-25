import React, { useContext } from "react";
import { GlobalData } from "../../Context/GlobalContext";
import Singlecard from "../Singlecard/Singlecard";
import styles from "./Shop.module.css";
import img from "../../Assets/image/ins.jpg";

const Shop = () => {
  const { data } = useContext(GlobalData);

  return (
    <section>
      <img className={styles.img} src={img} alt="" />
      {/* <div className={styles.imgcontend}>About Us</div> */}
      <div className="container">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-lg-3  col-md-4 col-sm-6 col-12 p-3">
                <Singlecard product={item} key={item.id} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Shop;
