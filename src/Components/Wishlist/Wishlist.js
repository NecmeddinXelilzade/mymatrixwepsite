import React, { useEffect } from "react";
import { useWishlist } from "react-use-wishlist";
import Singlecard from '../Singlecard/Singlecard';
import styles from './Wislist.module.css'
import Plamen from "../Plamen/Plamen";

const Wishlist = () => {
  const { items } = useWishlist();

  const myArray = [...new Map(items.map((item) => [item.id, item])).values()];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <section className={styles.theme}>
          <div className={styles.top}>
          <div className="container">
          <div className="row">
            {myArray.map((item) => {
                   return (
                    <div className="col-lg-3  col-md-6 col-sm-6 col-12 p-3 ">
                      <Singlecard product={item} key={item.id}/>
                    </div>
                  )
            })}
          </div>
        </div>
          </div>
        <Plamen/>
      </section>
    </>
  );
};

export default Wishlist;
