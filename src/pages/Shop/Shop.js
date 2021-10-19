import React, { useEffect, useState } from 'react';
import DisplayShop from './DisplayShop/DisplayShop';


const Shop = () => {
         const [shop, setShop] = useState([]);
         console.log(shop)


         useEffect(()=>{
                  fetch('/shop.json')
                  .then(res => res.json())
                  .then(data => setShop(data))
         },[])

         return (
                  <div>
                         <div id="services" className="container mb-4">
                  <h2 className="my-3 text-center fw-bold ">MediCare <span className="text-danger">Shop</span></h2>
                  <div className="row">
                  {
                           shop.map(pd => <DisplayShop
                                    key={pd.key}
                                     pd={pd}
                                     ></DisplayShop>)
                  }
                  </div>
                  </div>         
                  </div>
         );
};

export default Shop;