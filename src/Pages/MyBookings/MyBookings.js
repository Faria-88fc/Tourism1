import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';


const MyBookings = () => {
    const { user } = useFirebase();
    const email = user?.email;
    const [myBookings, setMyBookings] = useState([]);
    const [control,setControl] = useState(false)

    useEffect(() => {
        fetch(`https://serene-taiga-16616.herokuapp.com/myBookings/${email}`)
            .then((res) => res.json())
            .then((data) => setMyBookings(data));

    }, [control,email]);
    const handleDelete = (id) =>{
        if(id){ (window.confirm('Are you sure you want to delete this item?')) };

        fetch(`https://serene-taiga-16616.herokuapp.com/deletebookings/${id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data => {
            if(data.deleteCount){
                setControl(!control);
            }
        });
    }

    return (
        <div>
            <div className='row container'>
                {
                    myBookings.map(mb => (

                        <div className='col-md-3 g-4 m-3'>
                            <div>
                            <p className='text-warning fw-bold'>Booking Status: {mb?.status}</p>
                                <img className='w-100 h-100 rounded' src={mb?.pkimg} alt="" />
                            </div>
                            <div>
                                <h3>{mb?.pkname}</h3>
                                <h5 className='text-primary'><small>Cost per Head </small> <span className='fw-bold fs-3'>৳</span> {mb?.pkprice}</h5>
                                
                                <button onClick= {
                                    ()=>handleDelete(mb._id)}className='submit'>Cancel</button>
                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    );
};

export default MyBookings;