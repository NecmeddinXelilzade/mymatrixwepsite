import React from 'react';
import styles from './Singlecard.module.css'
import { useCart } from 'react-use-cart';
import { toast } from "react-toastify";
import WishlistBtn from '../WishlishBtn/wishlistBtn';

const Singlecard = ({product}) => {


  const{addItem}=useCart()
    return (
        <>
       <div  className="card" style={{width: '100%', height:"100%",position:"relative"}}>
        <img src={product.image}  className="card-img-top" alt="..." />
        <div className="card-body" >
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            <div className={styles.context}>
               <div>Price: {product.price}  </div>
                <div>Catageory: {product.catageory}</div>
            </div>
          </p>
          <button className="btn btn-success" onClick={()=>{
              addItem(product)
              toast.success('Product added successfully')
            }}>Add to cart</button>
          <div  className={styles.abs}>
            <WishlistBtn oturduyumMehsul={product}/>
          </div>
         
        </div>
      </div>
        </>
    );
}

export default Singlecard;
