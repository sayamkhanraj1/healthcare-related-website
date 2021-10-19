import React from 'react';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DisplayShop.css'

const DisplayShop = (props) => {
         const {name, discription, img, price}= props.pd;

         const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
         return (
                        <div className="col-md-4 mt-4 mb-3">
                 <div className="card h-100  shop-card">
                    <img className="img-fluid" src={img} alt="..."/>
                    <div className="card-body text-center">
                      <h3 className="card-title mb-3">{name}</h3>
                      <h4>$ {price}</h4>
                      <p>{discription}</p>
                    </div>
                    <div>
                     <button  className="service-btn mb-3 text-muted">{cartIcon} Add to cart</button>
                    </div>
                  </div>
                 </div>       
         );
};

export default DisplayShop;