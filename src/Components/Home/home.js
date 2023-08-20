import React, { useContext } from 'react';
import { GlobalData } from '../../Context/GlobalContext';
import Singlecard from '../Singlecard/Singlecard';
import slider from '../../Assets/image/s.jpg'
import styles from './Home.module.css'
import { Link, } from "react-router-dom";

const Home = () => {

 const{data}=useContext(GlobalData);

    return (
      
            <section> 
              
           <div className='container'>
               <div className='row'>
               <img className={styles.img} src={slider} alt="" />
               <div className={styles.contend}><Link to="/shop"><h1 className={styles.contend_h}>OUR BELOVED PRODUCTS</h1></Link></div>
                 {
                  data.map((item,index)=>{
                    return <Singlecard product={item} key={item.id}/>
                  })
                 }
               </div>
          </div>
        </section>
    );
}

export default Home;
