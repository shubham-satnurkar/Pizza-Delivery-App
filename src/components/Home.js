import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <section className='hero-heading pt-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className="card bg-light border-0 shadow py-5 px-4 text-left">
                  <div className="card-body text-left">
                    <h1 className="display-2 mb-4 ">Pizza Delivary</h1>
                    <h5 className="card-text lh-base">Welcome to Pizza Delivery Service. This is the place when you may choose the most delicious pizza you like from vide variety of options!</h5>
                    <hr className='my-4' />
                    <h6 className="card-text mb-4">We're performing delivery free of charge in case if your order is highter than 20$</h6>
                    <Link to="/login" className="btn btn-dark focus-none text-lg-center d-block w-75 mx-auto py-2">Sign In and Order</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
