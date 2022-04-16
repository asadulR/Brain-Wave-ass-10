import React from 'react';
import '../FormStyle.css';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
const SocialLogin = () => {
    return (
        <div className=''>
            <div className='d-flex w-90 mx-auto align-items-center'>
                <div className='left-hr'></div>
                <p className='my-0 mx-3'>Or</p>
                <div className='right-hr'></div>
            </div>
            {/* {errorElement} */}
            <div className='w-75 mx-auto'>
                <button  className='w-100 btn another-signin-btn my-2 btn-white'> <img className='me-3' src={google}  alt="" />Log in with Google</button>
                <button className='w-100 btn another-signin-btn my-2 btn-white'> <img className='me-3' width={30}  src={facebook} alt="" />Log in with facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;