import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../api/Myservices';

import { UserContext } from '../context/UserContext';

export default function Login() {
    const [state, setState] = useState({"email": "", "pass": ""})
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();

    function LoginHandler(event){
        event.preventDefault();
        getUser(state.email, state.pass).then( res => {
            if(res.data.length > 0){
                userCtx.loginUser({name:res.data[0].email});
                navigate("/menu")
            }else{
                alert("invalid Credentials")
            }
        })
    }
    const handler = (event) => {
        let { name, value } = event.target;
        setState({ ...state, [name]: value });
    }

    return (
        <>
            <section className='login-form pt-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <form onSubmit={LoginHandler} className='bg-light py-5 px-4 shadow'>
                                <h2 className='mb-4'>Login</h2>
                                <div className="mb-3">
                                    <input type="email" name='email' onChange={handler} className="form-control" id="email" placeholder='email' />
                                       
                                </div>
                                <div className="mb-3">
                                    <input type="password" name='pass' onChange={handler} className="form-control" id="password" placeholder='password' />
                                </div>
                                
                                <button type="submit" className="btn btn-dark">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
