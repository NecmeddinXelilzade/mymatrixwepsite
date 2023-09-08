import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalData } from "../../Context/GlobalContext";
import styles from './ProductDetails.module.scss'


const ProductDetails = () => {
  const {id} = useParams();
  const { data } = useContext(GlobalData);

  let myDetailedProduct = data.find((item) => item.id === parseInt(id));

  return (
    <>
     <div className={styles.container}>
     <div className="card mb-3 " style={{maxWidth: '700px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={myDetailedProduct.image}  className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{myDetailedProduct.title}</h5>
              <h5 className="card-title">Catageory: {myDetailedProduct.catageory}</h5>
              <p className="card-text" style={{fontSize:'20px'}}>Description: {myDetailedProduct.description}</p>
              <h5 className="card-title">Price: {myDetailedProduct.price}€</h5>
              {/* <p className="card-text"><small className="text-body-secondary">{myDetailedProduct.price}</small></p> */}
            </div>
          </div>
        </div>
      </div>

     </div>
    </>
  );
};

export default ProductDetails;




