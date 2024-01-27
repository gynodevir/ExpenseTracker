import React from 'react';
import { auth, provider } from '../../config/firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate();

    const signinWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log('result', result);

        const authinfo = {
            userID: result.user.uid,
            name: result.user.displayName,
            profilePhoto: result.user.photoURL,
            isAuth: true,
        };

        localStorage.setItem('auth', JSON.stringify(authinfo));
        navigate("/expense");
    };

    return (
        <div className='login-page'>
            <p>Sign-in with Google to continue</p>
            <button className='login-btn' onClick={signinWithGoogle}>
                Sign in with Google
            </button>
        </div>
    );
};

export default Auth;
