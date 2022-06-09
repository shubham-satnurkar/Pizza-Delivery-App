import React from 'react'

export default function Signup() {
    return (
        <>
            <section className='signup-form pt-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <form className='bg-light py-5 px-4 shadow'>
                                <h2 className='mb-4'>Sign Up</h2>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="name" placeholder='Full Name' />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="email" placeholder='email' />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="password" placeholder='password'/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="mobile" placeholder='mobile no.' />
                                </div>

                                <button type="submit" className="btn btn-dark">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
