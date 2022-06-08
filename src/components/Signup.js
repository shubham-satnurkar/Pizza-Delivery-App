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
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="name" placeholder='Full Name' />
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="email" placeholder='email' />
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control" id="password" placeholder='password'/>
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="mobile" placeholder='mobile no.' />
                                </div>

                                <button type="submit" class="btn btn-dark">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
