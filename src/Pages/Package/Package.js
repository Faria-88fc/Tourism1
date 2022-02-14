import React from 'react';
import { Link } from 'react-router-dom';

const Packages = (props) => {
    const {img,name,price, description,key}= props.pk;
    
    const url = `/pk/:${key}`
    
    return (
        <div className='col-md-4 g-4 '>
           <div>
           <img className='w-100 h-100 rounded' src={img} alt="" />
           </div>
           <div>
               <h3>{name}</h3>
               <p>{description}</p>
               <h5 className='text-primary'><small>Cost per Head </small> <span className='fw-bold fs-3'>৳</span> {price}</h5>
               <Link to= {url} > <button className='submit'>Add to Trip</button></Link>
           </div>

            
        </div>
    );
};

export default Packages;