import React from 'react';
import { Link } from 'react-router-dom';
import '../FormStyle.css';
import SocialLogin from '../SocialLogin/SocialLogin';
const Signup = () => {
    return (
        <div className='my-5 py-5'>
            <div className="formbg-outer">
                <div className="formbg p-5">
                    <div className="formbg-inner padding-horizontal--48">
                        <span className="padding-bottom--15 title-form mb-4 text-center fw-bold">Sign up</span>
                        <form id="stripe-login">
                            <div className="field mb-3 padding-bottom--24">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id='name'/>
                            </div>
                            <div className="field mb-3 padding-bottom--24">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id='email'/>
                            </div>
                            <div className="field mb-3 padding-bottom--24">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id='password' />
                            </div>

                            <div className="field padding-bottom--24">
                                <input type="submit" name="submit" value="Continue" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer-link mt-3 padding-top--24">
                    <span>Already have an account? <Link to="/login">Login</Link></span>
                    <SocialLogin/>
                </div>
            </div>

        </div>
    );
};

export default Signup;