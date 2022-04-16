import React from 'react';
import { Link } from 'react-router-dom';
import '../FormStyle.css';
const Login = () => {
    return (
        <div className='my-5 py-5'>
            <div className="formbg-outer">
                <div className="formbg p-5">
                    <div className="formbg-inner padding-horizontal--48">
                        <span className="padding-bottom--15 title-form mb-4 text-center fw-bold">Login</span>
                        <form id="stripe-login">
                            <div className="field mb-3 padding-bottom--24">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" />
                            </div>
                            <div className="field mb-3 padding-bottom--24">
                                <div className="grid--50-50">
                                    <label htmlFor="password">Password</label>
                                    <div className="reset-pass">
                                        <p className=''>Forgot your password?</p>
                                    </div>
                                </div>
                                <input type="password" name="password" />
                            </div>

                            <div className="field padding-bottom--24">
                                <input type="submit" name="submit" value="Continue" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer-link mt-3 padding-top--24">
                    <span>Don't have an account? <Link to="/signup">Signup</Link></span>

                </div>
            </div>

        </div>
    );
};

export default Login;