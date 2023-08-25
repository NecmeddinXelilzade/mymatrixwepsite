import React, { useContext } from 'react';
import { GlobalData } from '../../Context/GlobalContext';
import Singlecard from '../Singlecard/Singlecard';
import styles from './Home.module.css'
import { Link, } from "react-router-dom";
import Slider from '../Slider/Slider';

const Home = () => {

 const{data}=useContext(GlobalData);

    return (
      
            <section> 
              
           <div className='container'>
               <div className='row'>
               <Slider/>
               <div className={styles.contend}><Link to="/shop"><h1 className={styles.contend_h}>OUR BELOVED PRODUCTS</h1></Link></div>
               
                 {/* {
                  data.map((item,index)=>{
                    return <Singlecard product={item} key={item.id}/>
                  })
                 } */}


                 {
                  data.slice(0,6).map((item,index)=>{
                    return (
                      <div className='col-lg-4 col-md-6 col-sm-12 p-4' >
                        <Singlecard product={item} key={item.id}/>
                      </div>
                    )
                  })
                 }
                 


               </div>
          </div>
        </section>
    );
}

export default Home;
