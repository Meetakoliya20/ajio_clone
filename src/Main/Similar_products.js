import React, { useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom';

const Similar_products = ({data,product,id}) => {
    const [similarData,setSimilarData]=useState([]);
   
    useEffect(() => {
        const filteredData = data.filter(item => item.category === product && item.id !==id);
        setSimilarData(filteredData);
    }, [data, product,id]);
   
   
  return (
    <div>
        
        <div className='products'>
                    {similarData.map(product => (
                        <NavLink to={`/product/${product.id}`} key={product.id}>
                            <div className="product-card">
                                <img src={product.image} alt={product.name} className="similar_images" />
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
  )
}

export default Similar_products;