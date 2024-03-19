import React, {  useState, useEffect } from 'react';
import { useParams,useLocation,NavLink } from 'react-router-dom';
import close from '../images/close.png';
import like from "../images/like.svg";
import './Cart.css';
import cart1 from '../images/cart.jpg';
import delivery from '../images/delivery.svg';

const Cart = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const size = searchParams.get('size');
const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json');
        const jsonData = await response.json();

        const filteredData = jsonData.filter(item => item.id === parseInt(id));
        setData(filteredData);

      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className='cart_items'>
      <div className='cart_header'>
        <div className='cart1'>
          <NavLink to={`/products/${id}`}><img src={close} alt="..." /></NavLink>
        </div>
        <div className='cart2'>
          <p>Step 1 Of 3</p>
          <span>Bag (1 Product)</span>
        </div>
        <div className='cart3'>
          <img src={like} alt="..." />
        </div>
      </div>
      <div className="cart_content">
        <img src={cart1} alt="..." />
        <div className='carts'>
          <img src={delivery} alt="..." />
          <span>Free delivery on your order</span>
        </div>
      </div>
      <div>
        {data.map((item, index) => (
          <div key={index} className='items_details'>
            <div className='i1'><img src={item.image} alt="..." /></div>
            <div className='i2'>
              <strong>{item.brand}</strong>
              <span>{item.product}</span>
              <div>
                <span className='sizes'>Size {size}</span> 
                <span className='sizes'>Quantity {}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
