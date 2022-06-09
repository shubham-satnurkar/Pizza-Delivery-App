import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Cart() {
    const userCtx = useContext(UserContext);
    const totalPrice = userCtx.user.cart.reduce((acc, cur) => acc + cur.price, 0)
    return (
        <>
            <section className='cart-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h2>Shopping Cart</h2>
                        </div>
                        <div className='col-12'>
                            {
                                userCtx.user.cart.map((item, i) => {
                                    return (
                                        <div className='row py-2' key={i}>
                                            <div className='col-2'>
                                                <img src={item.img} alt="..." width="30" height="30" />
                                            </div>
                                            <div className='col-4'>{item.name}</div>
                                            <div className='col-2'>{item.price}</div>
                                            <div className='col-2'><input type="number" placeholder='1' /></div>
                                            <div className='col-2 d-flex justify-content-end'>
                                                <button type="button" className='btn btn-dark ' onClick={() => userCtx.deleteFromCart(i)}>Delete</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>


                    <div className='row justify-content-between'>
                        <div className='align-self-center'>${totalPrice}</div>
                        <div>

                            <button type="button" className='bg-dark'><Link to="/checkout" className='bg-dark text-white' style={{ textDecoration: "none" }}>Checkout </Link></button>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}
