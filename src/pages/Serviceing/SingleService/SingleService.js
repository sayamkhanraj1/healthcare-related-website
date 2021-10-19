import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleService = () => {
         let {serviceId} = useParams();

         const [serviceDetails, SetServiceDetails] = useState([]);
         const [singleService, setSingleService] = useState({});

         useEffect(()=>{
                  fetch('/singleService.json')
                  .then(res => res.json())
                  .then(data => SetServiceDetails(data))
         },[])

         useEffect(()=>{
                  const foundService = serviceDetails.find(serviceDetail => (serviceDetail.id == serviceId))
                  setSingleService(foundService)
                  
         },[serviceDetails])

         return (
                  <div>
                    <div className="card mb-3">
                     <div className="row g-0 text-center">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                      <img src={singleService?.img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                      <div className="card-body">
                        <h1 className="text-danger mb-3">{singleService?.name}</h1>
                        <p>{singleService?.discription}</p>
                        <h3>{singleService?.titel1}</h3>
                        <p>{singleService?.discription2}</p>
                        <h3>{singleService?.titel2}</h3>
                        <p>{singleService?.discription3}</p>
                      </div>
                    </div>
                  </div>
                </div> 
                  </div>
         );
};

export default SingleService;