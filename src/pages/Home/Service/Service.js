import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
     const {name, discription, img, key}= props.service;

     const searchIcon = <FontAwesomeIcon icon={faSearch} />
         return (
                  <div className="col-md-4 mt-4 mb-3">
                 <div className="card h-100  service-card">
                    <img className="img-fluid" src={img} alt="..."/>
                    <div className="card-body text-center">
                      <h3 className="card-title mb-3">{name}</h3>
                      <p>{discription}</p>
                    </div>
                    <div>
                     <Link to={`/services/${key}`}>
                     <button  className="service-btn mb-3 text-muted">{searchIcon} Find Out More</button>
                     </Link>
                    </div>
                  </div>
                 </div>  
         );
};

export default Service;