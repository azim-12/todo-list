import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({...props}) {

    let location = useLocation();
    
    return (
        <div className=''>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">To Do List</a>
                    <button className="navbar-toggler border-nonne" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <img src="./img/user-profile.png" alt="profile" style={{height: "50ox", width: "70px"}}/>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">To Do Menu</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/' ? "active" : "" }`} aria-current="page" to="/">My Lists</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/fav' ? "active" : "" }`}  to="/fav">Favourites</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/login' ? "active" : "" }`}  to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/export' ? "active" : "" }`}  to="/export">Export</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/import' ? "active" : "" }`}  to="/import">Import</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
