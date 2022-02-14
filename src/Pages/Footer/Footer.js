import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-infos '>
                <div>
                    <h3>UTP</h3>
                    <p className='footer-info'>about</p>
                    <p className='footer-info'>what we offer</p>
                    <p className='footer-info'>payment</p>
                </div>
                <div>
                    <h3>Community</h3>
                    <p className='footer-info'>partners</p>
                    <p className='footer-info'>blogs</p>
                    <p className='footer-info'>FAQs</p>
                </div>
                <div>
                    <h3>More</h3>
                    <p className='footer-info'>terms</p>
                    <p className='footer-info'>policy</p>
                    <p className='footer-info'>contact</p>
                </div>
            </div>
            <p>all rights reserve©2021</p>
            
        </div>
    );
};

export default Footer;