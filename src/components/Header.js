import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className='header py-3 '>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <Link to='/home' className="navbar-brand" >
                                    <img src={process.env.PUBLIC_URL+"images/logo.png"} />
                                    </Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                            <li className="nav-item me-3">
                                                <Link className=" btn btn-outline-dark" to='/signup'>Sign Up</Link>
                                            </li>  
                                            <li className="nav-item">
                                                <Link className=" btn btn-outline-dark" to='/login'>Login</Link>
                                            </li>                                            
                                        </ul>
                                        
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
