import React from 'react';
import { Link } from 'react-router-dom';
import { verifyInput, passChange } from '../Utils/helper';

export default function Login() {

    return (
        <div>
            <div className="container d-flex justify-content-center" style={{ height: "calc(100vh - 82px)", alignItems: "center" }}>
                <form autoComplete="off" method='post' className='login-form' onSubmit={verifyInput}>

                    <div className='mx-auto mb-3'>
                        <Link to="/login" className='link login-link active-link'>Login</Link>
                        <Link to="/signup" className='link signup-link'>SignUp</Link>
                    </div>
                    
                    <div className='email-in  mb-3'>
                        <label htmlFor="email">Email</label>
                        <input name="email" id="email" />
                        <div id='errMail' className='err'></div>
                    </div>
                    
                    <div className='pass-in mb-3' style={{position:"relative"}}>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                        <i className="fa-solid fa-eye" onClick={passChange} style={{position:"absolute", right: "5px", cursor: "pointer"}}></i>
                        <div id='errPass' className='err'></div>
                    </div>
                    
                    <div className='login-div-container'>
                        <button type="submit" className='btn-login'>Login</button>
                    </div>
                    
                    <div className='forgot-container text-end pt-1'>
                        <Link to='/' className='forgot-link'>Forgot Password?</Link>
                    </div>

                    <div className='text-center mt-4'>
                        Need an account? <Link to="/signup" >SignUp</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
