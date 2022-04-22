import React  from 'react'
import { Link } from 'react-router-dom';
import { verifyInput,passChange } from '../Utils/helper';


export default function SignUp() {

    return (
        <div >
            <div className="container d-flex justify-content-center" style={{ height: "calc(100vh - 82px)", alignItems: "center" }}>
                <form method='post' className='signup-form' onSubmit={(e) => verifyInput(e)}>
                    <div className='mx-auto mb-3'>
                        <Link to="/login" className='link login-link'>Login</Link>
                        <Link to="/signup" className='link signup-link active-link'>SignUp</Link>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="name">Full Name</label>
                        <input name="name" id="name" />
                        <div id='errName' className='err'></div>
                    </div>

                    <div className='email-in  mb-3'>
                        <label htmlFor="email">Email</label>
                        <input name="email" id="email" />
                        <div id='errMail' className='err'></div>
                    </div>

                    <div className='pass-in mb-3' style={{position: "relative"}}>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                        <i className="fa-solid fa-eye" onClick={passChange} style={{position:"absolute", right: "5px", cursor: "pointer"}}></i>
                        <div id='errPass' className='err'></div>
                    </div>

                    <div className='login-div-container mt-2'>
                        <button type="submit" className='btn-login'>SignUp</button>
                    </div>

                    <div className='text-center mt-4'>
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
