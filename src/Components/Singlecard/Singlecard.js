import React from 'react';
import styles from './Singlecard.module.css'

const Singlecard = ({product}) => {
    return (
        <>
      <div className="col-lg-3  col-md-4 col-sm-6 col-12 p-3" >
      <div className="card" style={{width: '100%', height:"100%"}}>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            <div className={styles.context}>
               <div>Price: {product.price}  </div>
                <div>Catageory: {product.catageory}</div>
            </div>
   
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
        </>
    );
}

export default Singlecard;
