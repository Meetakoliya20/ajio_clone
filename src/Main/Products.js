import React from 'react'
import { useState, useEffect } from 'react';
import './products.css'
import arrow from '../images/arrow.svg'
import like from '../images/like.svg'
import cart from '../images/cart.svg'
import search from '../images/cart.svg'
import {  NavLink } from 'react-router-dom';


const Products = () => {
    const [data, setData] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('/db.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();

                setData(result);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchData();
    }, []);



    return (
        <>
            <div>
                <div className='products_header'>
                    <div className='p1'>
                        <NavLink to="/">
                            <img src={arrow} alt="..." />
                        </NavLink>
                    </div>
                    <div className='p2'>
                        <strong>Products</strong><br />
                        <span>35000 Products</span>
                    </div>
                    <div className='p3'>
                        <img src={search} alt="..." />
                        <img src={like} alt="..." />
                        <img src={cart} alt="..." />

                    </div>
                </div>
                <div className='products'>
                    {data.map(product => (
                        <NavLink to={`/product/${product.id}`} key={product.id}>
                            <div className="product-card">
                                <img src={product.image} alt={product.name} />
                                <div className="product-details">
                                    <strong>{product.brand}</strong>
                                    <div className='product'><p>{product.product}</p></div>
                                    <div className='rating'><p>{product.rating}  &#9733; | {product.people}</p></div>
                                    <div className='price'>
                                        <strong>₹{product.discount_price}</strong>
                                        <span className='o_price'>₹{product.original_price}</span>
                                        <span className='discount'>{product.discount} off</span>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Products