import React from "react";
import { useWishlist } from "react-use-wishlist";
import Singlecard from '../Singlecard/Singlecard';
const Wishlist = () => {
  const { items } = useWishlist();
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {items.map((item) => {
                   return (
                    <div className="col-lg-3  col-md-4 col-sm-6 col-12 p-3">
                      <Singlecard product={item} key={item.id}/>
                    </div>
                  )
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
