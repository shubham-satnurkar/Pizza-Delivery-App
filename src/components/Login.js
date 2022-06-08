import React from 'react'

export default function Login() {
    return (
        <>
            <section className='login-form pt-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <form className='bg-light py-5 px-4 shadow'>
                                <h2 className='mb-4'>Login</h2>
                                <div class="mb-3">
                                    
                                    <input type="email" class="form-control" id="email" placeholder='email' />
                                       
                                </div>
                                <div class="mb-3">
                                    
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='password' />
                                </div>
                                
                                <button type="submit" class="btn btn-dark">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
