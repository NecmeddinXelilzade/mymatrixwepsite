import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, } from "react-router-dom";
import styles from './Layout.module.css'
 
const Layout = () => {
    return (
        <section> 
             <Navbar/>
           <div className='container'>
               <div className='row'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                    <div className={styles.left}>
                    <div ><Link to="/"><h4>Home</h4></Link></div>
                    <div className={styles.items}><Link to="/shop"><h4>Shop</h4></Link></div> 
                    <div  ><Link to="/help"><h4>Faq</h4></Link></div>    
                    <div className={styles.items}><Link to="/blog"><h4>Blog</h4></Link></div>    
                    <div  > <Link to="/Account"><h4>Account </h4></Link> </div>   
                    
                    </div>

                  </div>

               </div>
          </div>

        </section>

    );
}

export default Layout;




<Link to="/blog"><h4>Blog-page</h4></Link>