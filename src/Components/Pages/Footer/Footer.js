import React from 'react';
import './Footer.css';
import facebook from '../../images/social/facebook.png'
import github from '../../images/social/github.png'
import linkedin from '../../images/social/linkedin.png';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <div className="col">
                        <h2 className='s-color s-font'>Brain Wave</h2>
                        <h5>Dr Asadul Rahman</h5>
                        <p className='line'>PSYCHIATRIST</p>

                        <p className='mb-1'>Phone: +8801786414966</p>
                        <p>Email: asad1252001@gmail.com</p>
                    </div>
                    <div className="col">
                        <h4 className='s-color'>My Time Schedule</h4>
                        <h6>Monday - Friday</h6>
                        <p>8am to 6pm</p>

                        <h6>Saturday - Sunday</h6>
                        <p>9am to 4pm</p>
                    </div>
                    <div className="col">
                        <h4 className='fw-bold mb-4 s-color'>Follow me</h4>
                        <a className='me-4' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><img className='img-size' src={github} alt="" /></a>
                        <a className='me-4' href="https://web.facebook.com/beingAsad.galib" target="_blank" rel="noopener noreferrer"><img className='img-size' src={facebook} alt="" /></a>
                        <a href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><img className='img-size' src={linkedin} alt="" /></a>
                    </div>
                </div>
                <p className='text-center'>Copyright &copy; {new Date().getFullYear()} All rights reserved. Design by <a className='my-name-link' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer">Asadul Rahman</a></p> 
            </div>
        </footer>
    );
};

export default Footer;