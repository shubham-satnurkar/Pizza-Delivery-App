import React, { useContext } from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import { UserContext } from '../context/UserContext';
const pizzaList = [
    {
        name: 'Cheese Burger',
        price: 18.3,
        img: img1

    },
    {
        name: 'Crane',
        price: 20,
        img: img2
    },
    {
        name: 'Don Bacon',
        price: 26.3,
        img: img3
    },
    {
        name: 'Julinee',
        price: 26.3,
        img: img4
    },
    {
        name: 'cheese',
        price: 26.3,
        img: img5
    },
    {
        name: 'Cipollo',
        price: 26.3,
        img: img6
    }
]
export default function Menu() {

    const userCtx = useContext(UserContext);
    return (

        <>
            <section className='card-menu'>
                <div className='container'>
                    <div className='row'>
                        {
                            pizzaList.map((item, index) => {
                                return (
                                    <div className='col-md-4 col-sm-6 mb-4' key={index}>
                                        <div className='card py-4'>
                                            <img src={item.img} className="card-img-top p-2 w-75 mx-auto" alt="pizza-img" />
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{item.name}</h5>
                                                <div className='d-flex justify-content-between align-items-center mt-4'>
                                                    <button type='button' onClick={() => userCtx.addToCart(item)} className="bg-dark text-white m-2">add to cart</button>
                                                    <i className='float-left'>${item.price}</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
