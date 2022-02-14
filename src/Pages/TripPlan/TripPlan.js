import React from 'react';

const TripPlan = () => {
    return (
        <div>
            <div className='container'>
                <h2 className='m-5 fst-italic'>Plan Your Trip</h2>
                <div className='d-flex flex-wrap '>
                    <div className='m-5'>
                        <img src="images/pic1.PNG" alt="" />
                        <h5> ① Get a Personalized trip</h5>
                        <p>Acomplete day by day trip based on your preference</p>
                    </div>
                    <div className='m-5'>
                        <img src="images/pic2.PNG" alt="" />
                        <h5> ② Customize it</h5>
                        <p>Refine your trip. We'll find the best routes and schedules</p>
                    </div>
                    <div className='m-5'>
                        <img src="images/pic3.PNG" alt="" />
                        <h5> ③ Book it</h5>
                        <p> Choose from the best hotels and activities. Up to 50% off</p>
                    </div>
                    <div className='m-5'>
                        <img src="images/pic4.PNG" alt="" />
                        <h5> ④ Manage it</h5>
                        <p>Everything in one place.
                            Everyone on the same page.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TripPlan;