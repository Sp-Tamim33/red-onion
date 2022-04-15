import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../images/google.svg";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../Firebase/firebase.init";



const Signup = () => {

  const navigate = useNavigate()

  const [signInWithGoogle] = useSignInWithGoogle(auth)


  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1 className="text-3xl">Sign Up</h1>
        <form>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input

                type='email'
                name='email'
                id='email'
              />
            </div>

          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input

                type='password'
                name='password'
                id='password'
              />
            </div>

          </div>
          <div className='input-field'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <div className='input-wrapper'>
              <input

                type='password'
                name='confirmPassword'
                id='confirm-password'
              />
            </div>

          </div>
          <button type='submit' className='auth-form-submit'>
            Sign Up
          </button>
        </form>
        <p className='redirect'>
          Already have an account?{" "}
          <span onClick={() => navigate('/login')}>Login</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button onClick={() => signInWithGoogle()} className='google-auth'>
            <img src={GoogleLogo} alt='' />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
