import React, { useEffect, useState } from 'react';
import Update from '../Update/Update';

const Updates = () => {
         const [updates, setUpdates] = useState([]);

         useEffect(()=>{
                  fetch('/update.json')
                  .then(res => res.json())
                  .then(data => setUpdates(data))
         },[])
         return (
                  <div className="container mb-4">
                  <h1 className="my-3 text-center fw-bold ">Medicare <span className="text-danger">Updates</span></h1>
                  <div className="row">
                  {
                           updates.map(update => <Update
                                    key={update.key}
                                     update={update}
                                     ></Update>)
                  }
                  </div>
                  </div>
         );
};

export default Updates;