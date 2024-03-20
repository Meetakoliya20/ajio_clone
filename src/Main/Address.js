import React from 'react'
import arrow from '../images/arrow.svg'
import { NavLink, useParams } from 'react-router-dom';

const Address = () => {
    const { id } = useParams();
    return (
        <div>
           <div className='products_header'>
                    <div className='p1'>
                        <NavLink to={`/cart/${id}`}>
                            <img src={arrow} alt="..." />
                        </NavLink>
                    </div>
                    <div className='p2'>
                       Add Address
                    </div>
                    <div className='p3'>
                       reset

                    </div>
                </div>
        </div>
    )
}

export default Address