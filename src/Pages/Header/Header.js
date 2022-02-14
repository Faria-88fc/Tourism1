import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
// import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logout } = useFirebase();
    return (
        <div className="mx-auto w-100">
            <nav className="navbar navbar-expand-md navbar-light header ">
                <div className='d-flex'>
                    <div >
                        <p className="navbar-brand fs-2 fw-bold fst-italic text-white" > UrTravel Planner
                        </p>
                    </div>
                    <button className='navbar-toggler' data-toggle='collapse' data-target='#mynavabr'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='mynavabr'>
                        <ul className="navbar-nav d-flex flex-row ms-5 ps-4 align-items-evenly ">
                            
                            <li className="nav-item p-3 ">
                                <Link className="nav-link active text-gray fw-bold fs-5" aria-current="page" to="/home">Home</Link>
                            </li>

                            <li className="nav-item p-3">
                                <Link className="nav-link text-gray fw-bold fs-5" to="/manageAllBookings">ManageAllBookings</Link>
                            </li>
                            
                            <li className="nav-item p-3">
                                <Link className="nav-link text-gray fw-bold fs-5" to="/addnewservice">Add new service</Link>
                            </li>
                            <li className="nav-item p-3">
                                <Link className="nav-link text-gray fw-bold fs-5" to="/myBookings">My Bookings</Link>
                            </li>
                            <p className='pt-4  text-white fw-bold fs-5  text-nowrap'>{user?.displayName}</p>
                            {user?.email?
                            <li className="nav-item p-3">
                                <Link onClick={logout} className='nav-link text-white fw-normal  fs-5 border-0'>SignOut</Link>
                            </li>:
                            <li className="nav-item p-3">
                                <Link className="nav-link text-gray fw-normal fs-5" to="/LogIn">SignIn</Link>
                            </li>
                        }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;