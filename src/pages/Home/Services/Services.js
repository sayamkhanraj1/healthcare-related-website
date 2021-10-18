import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'

const Services = () => {
         const [services, setServices] = useState([]);

         useEffect(()=>{
                  fetch('/services.json')
                  .then(res => res.json())
                  .then(data => setServices(data))
         },[])
         return (
                  <div id="services" className="container mb-4">
                  <h2 className="my-3 text-center fw-bold ">Popular <span className="text-danger">Services</span></h2>
                  <div className="row">
                  {
                           services.map(service => <Service
                                    key={service.key}
                                     service={service}
                                     ></Service>)
                  }
                  </div>
                  </div>
         );
};

export default Services;