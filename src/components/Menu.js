import React, { useContext } from 'react'
// import img1 from '../../public/images/img1';
// import img2 from '../../public/images/img2';
// import img3 from '../../public/images/img3';
// import img4 from '../../public/images/img4';
// import img5 from '../../public/images/img5';
// import img6 from '../../public/images/img6';
import { UserContext } from '../context/UserContext';
const pizzaList = [
    {
        name: 'Cheese Burger',
        price: 18.3,
        
    },
    {
        name: 'Crane',
        price: 20,
        
    },
    {
        name: 'Don Bacon',
        price: 26.3,
        
    },
    {
        name: 'Julinee',
        price: 26.3,
        
    },
    {
        name: 'cheese',
        price: 26.3,
        
    },
    {
        name: 'Cipollo',
        price: 26.3,
        
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
                                    <div className='col-md-4 col-sm-6' key={index}>
                                        <div className='card'>
                                            <img src={item.process.env.PUBLIC_URL + "images/*.png"} className="card-img-top p-2" alt="pizza-img"  />
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{item.name}</h5>
                                                <button type='button' onClick={() => userCtx.addToCart(item)} className="bg-dark text-white m-2">add to cart</button>
                                                <i>${item.price}</i>
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
