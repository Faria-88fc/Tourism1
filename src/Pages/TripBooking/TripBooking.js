import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './TripBooking.css';
import useFirebase from '../../hooks/useFirebase';

const TripBooking = () => {
    const { pkkey } = useParams();
    const [packages, setPackages] = useState([]);
    const [singleTrip, setSingleTrip] = useState({});
    const { user } = useFirebase();

    useEffect(() => {
        fetch('https://serene-taiga-16616.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))

    }, []);

    useEffect(() => {
        const TripDetail = packages.find(pk => (pk?.id) === pkkey)
        setSingleTrip(TripDetail);

    }, [packages, pkkey]);


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user?.email;
        data.pkname = singleTrip?.name;
        data.pkimg = singleTrip?.img;
        data.pkprice = singleTrip?.price;
        data.status = "pending";
        axios.post('https://serene-taiga-16616.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('your trip booking completed successfully');
                    reset();
                }
            })
    };

    return (
        <div className='container'>
            <div className="row g-0  ms-4 mt-4 ">
                <div className="col-md-5 mt-4">
                    <img className='img-fluid rounded' src={singleTrip?.img} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{singleTrip?.name}</h5>
                        <p className="card-text">{singleTrip?.description}</p>
                        <h5 className='text-primary'><small>Cost per Head  </small><span className='fw-bold fs-3'>৳</span>{singleTrip?.price}</h5>
                        <Link to='/home' className='btn btn-danger text-white fw-bold'>Go Back</Link>
                    </div>
                </div>

                <div className="col-md-6 order m-4 p-5 rounded service-form">
                    <h5 className='text-white fs-4 fw-bold'>Want to Go for the Trip ?</h5>
                    <h4 className='fw-bold mt-3'>Place Your Booking Here</h4>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true, maxLength: 20 })} placeholder='Your Name' />
                            <input {...register("address", { required: true })} placeholder='Your Address' />
                            <input type='number' {...register("phone_number")} placeholder='Contact Number' />
                            <input {...register("img")} placeholder='Your Photo' />

                            <input className='submit' type="submit" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TripBooking;