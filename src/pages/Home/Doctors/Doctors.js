import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
         const [doctors , setDoctors] = useState([]);

         useEffect(()=>{
                  fetch('/doctors.json')
                  .then(res => res.json())
                  .then(data => setDoctors(data))
         },[])
         return (
                  <div id="doctors" className="container mb-4">
                  <h2 className="my-3 text-center fw-bold "><span className="text-danger">INTRODUCING</span> OUR TEAM</h2>
                  <div className="row">
                  {
                           doctors.map(doctor => <Doctor
                                    key={doctor.key}
                                     doctor={doctor}
                                     ></Doctor>)
                  }
                  </div>
                  </div>
         );
};

export default Doctors;