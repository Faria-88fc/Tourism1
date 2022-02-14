import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Package from '../Package/Package';
import RecentTrip from '../RecentTrip/RecentTrip';
import TripPlan from '../TripPlan/TripPlan';
import './Home.css'

const Home = () => {
    <Spinner animation="border" variant="success" />
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://serene-taiga-16616.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))

    }, []);
    return (
        <div>
            <img className='w-100 img-fluid' src="https://t4.ftcdn.net/jpg/02/63/72/11/240_F_263721164_NY471O67qONNx07XuuFstMyRqIhcJKVW.jpg" alt="" />

            <div className='banner-info '>
                <h2 className='text-primary fst-italic fw-bold'>Planning For a Tour? We are Here!!</h2>
                <button className='submit mt-2'><h4>Let's make a plan</h4></button>
            </div>

            <div className='container'>
                <h2 className='mt-4 fst-italic'>Our Most Popular Packages</h2>
                <div className=' row shadow-sm p-4 '>
                    {
                        packages.map(pk => <Package key={pk._id} pk={pk}></Package>)
                    }
                </div>
            </div>

            <TripPlan></TripPlan>
            <RecentTrip></RecentTrip>

        </div>
    );
};

export default Home;