import React from 'react';

const RecentTrip = () => {
    return (
        <div className='container'>
            <h2 className='fst-italic'>Recently Planned Trips</h2>
            <div className='row'>
                <div className='col-sm-4 g-4 mb-3 h-100'>
                    <div className='card'>
                        <div className='card bg-dark text-white fw-bold'>
                            <img className='opacity-75' src="https://s.inspirockcdn.com/ds10/photos/Bangladesh/2/sonargaon--616680257.jpg" class="card-img" alt="..." />
                            <div className='class ="card-img-overlay  mt-5"'>
                                <h5 className='card-title '>6days trip in Dhaka city</h5>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-sm-4 g-4 mb-3 h-100'>
                    <div className='card'>
                        <div className='card bg-dark text-white fw-bold'>
                            <img className='opacity-75' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5evvg4NxKPup47-vt2aTxqG_xSKggpD60g&usqp=CAU" class="card-img" alt="..." />
                            <div className='class ="card-img-overlay  mt-5"'>
                                <h5 className='card-title '>11days trip in Sundarbans</h5>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-sm-4 g-4 mb-3 h-100'>
                    <div className='card'>
                        <div className='card bg-dark text-white fw-bold'>
                            <img className='opacity-75' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuETfC_HzzWEewfpPOpb7C8igVfjWjzCuykw&usqp=CAU" class="card-img" alt="..." />
                            <div className='class ="card-img-overlay  mt-5"'>
                                <h5 className='card-title '>4days trip in Chittagong city</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button className='border-0 ronded-pill fw-bold fs-5 px-5 text-decoration-underline text-primary'>See More</button>

        </div>
    );
};

export default RecentTrip;