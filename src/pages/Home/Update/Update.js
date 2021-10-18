import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Update = (props) => {
         const {name, discription, img, by}= props.update;
         const userIcon = <FontAwesomeIcon icon={faUser} />
         return (
                  <div>
                    <div className="card mb-3">
                     <div className="row g-0 text-center">
                    <div className="col-md-6">
                      <img src={img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                      <div className="card-body">
                        <h5 className="mb-4">{userIcon} By : {by}</h5>
                        <h4 className="card-title fw-bold">{name}</h4>
                        <p className="card-text">{discription}</p>
                      </div>
                    </div>
                  </div>
                </div>     
                </div>
         );
};

export default Update;