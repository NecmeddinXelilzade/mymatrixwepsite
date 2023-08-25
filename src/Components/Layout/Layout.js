import React from 'react';
import { Link, } from "react-router-dom";
import styles from './Layout.module.css'
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import Navbar from '../Navbar/Navbar';

 
const Layout = () => {

    const{items}=useCart()
    const{items: wishlistItems}=useWishlist()

    return (
        <section> 
           <div className='container' >
               <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className={styles.left}>
                        <div ><Link to="/"><h4>Home</h4></Link></div>
                        <div className={styles.items}><Link to="/shop"><h4>Shop</h4></Link></div> 
                        <div  ><Link to="/help"><h4>FAQ</h4></Link></div>    
                        <div className={styles.items}><Link to="/blog"><h4>Blog</h4></Link></div>    
                        <div  > <Link to="/about"><h4>About-us </h4></Link> </div>   


                    </div>
                  </div>

                   <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                       <div  className={styles.right}>
                        <div className={styles.items}><Link to="/card"><h4>  <i className="fa-solid fa-basket-shopping"></i> {items.length} </h4></Link></div>    
                        <div><Link to="/wishlist"><h4><i className="fa-regular fa-heart"></i>{wishlistItems.length / 2}</h4></Link> </div> 
                       </div>               
                   </div>


               </div>
          </div>
        <Navbar/>
         
        </section>

    );
}

export default Layout;




<Link to="/blog"><h4>Blog-page</h4></Link>