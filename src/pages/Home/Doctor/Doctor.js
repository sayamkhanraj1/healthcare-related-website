import React from 'react';

const Doctor = (props) => {
         const {name, discription, img, position}= props.doctor;
         return (
                  <div className="col-md-3 mt-4 mb-3">
                  <div className="card h-100">
                     <img className="img-fluid" src={img} alt="..."/>
                     <div className="card-body text-center">
                      <h6 className="my-3">{position}</h6>
                      <h3 className="card-title mb-3">{name}</h3>
                      <p>{discription}</p>
                     </div>
                   </div>
                  </div>
         );
};

export default Doctor;