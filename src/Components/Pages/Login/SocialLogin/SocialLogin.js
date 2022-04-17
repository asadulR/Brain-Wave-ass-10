import React, { useEffect } from 'react';
import '../FormStyle.css';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import auth from '../../../Auth/firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Loading/Loading';
import toast from 'react-hot-toast';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGitHub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    // console.log(user)
    const navigate = useNavigate();
    let errorElement;

    if(loading || loadingGit){
        return <Loading/>
    }
    if (error || errorGit) {

        errorElement = <p className='text-danger'>Error: {error?.message} {errorGit?.message}</p>
    }
    
    return (
        <div>
            <div className='d-flex w-90 mx-auto align-items-center'>
                <div className='left-hr'></div>
                <p className='my-0 mx-3'>Or</p>
                <div className='right-hr'></div>
            </div>
            {errorElement}
            <div className='w-75 mx-auto'>
                <button onClick={() => signInWithGoogle()} className='w-100 btn another-signin-btn my-2 btn-white'> <img className='me-3' src={google}  alt="" />Log in with Google</button>
                <button onClick={() => signInWithGitHub()} className='w-100 btn another-signin-btn my-2 btn-white'> <img className='me-3' width={30}  src={github} alt="" />Log in with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;