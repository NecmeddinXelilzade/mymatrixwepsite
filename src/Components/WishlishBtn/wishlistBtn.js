import React from "react";
import { toast } from "react-toastify";
import { useWishlist } from "react-use-wishlist";
import styles from './WishlistBtn.module.css'


const WishlistBtn = ({oturduyumMehsul}) => {
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

  const toggleFunction = (myProduct) => {
    if (inWishlist(myProduct.id)) {
      removeWishlistItem(myProduct.id);
      toast.error('Wishlist in remove')
    } else {
      addWishlistItem(myProduct);
      toast.success('Wishlist in add')
    }
  };

  return (
    <>
      <button onClick={()=>toggleFunction(oturduyumMehsul)}  className={styles.btn}>
        {
            inWishlist(oturduyumMehsul.id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
        }
      </button>
    </>
  );
};

export default WishlistBtn;