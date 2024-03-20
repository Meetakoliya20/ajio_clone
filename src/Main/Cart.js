import React, { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import close from '../images/close.png';
import like from "../images/like.svg";
import './Cart.css';
import cart1 from '../images/cart.jpg';
import delivery from '../images/delivery.svg';
import dropdown from '../images/down-arrow.png'
import discount from '../images/discount.png'

function SizeBox({ size, isSelected, onClick }) {
  return (

    <div
      className={`size-box ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {size}
    </div>
  );
}

const Cart = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const size = searchParams.get('size');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [Sizes, setSizes] = useState([]);
  const [selected, setSelected] = useState(size);
  const [quantity, setQuantity] = useState(1);

  const handleSizeClick = (size) => {
    setSelected(size);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json');
        const jsonData = await response.json();

        const filteredData = jsonData.filter(item => item.id === parseInt(id));
        setData(filteredData);
        setSizes(filteredData[0].sizes)

      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, [id]);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="cart_items">
      <div className={`cart_header ${isModalOpen ? 'hide_header_footer' : ''}`}>

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
          <div key={index}>
            <div className="items_main">
              <div className='items_details'>
                <div className='i1'><img src={item.image} alt="..." /></div>
                <div className='i2'>
                  <strong>{item.brand}</strong>
                  <span>{item.product}</span>
                  <div className='size_quantity'>
                    {size !== "undefined" && (
                      <span className='sizes' onClick={openModal}><span>Size <strong className='size_selection'>{selected}</strong></span><img src={dropdown} alt="..." /></span>
                    )}
                    <span className='sizes' onClick={openModal}><span>Quantity <strong className='size_selection'>{quantity}</strong></span><img src={dropdown} alt="..." /></span>
                  </div>

                  <div>
                    <div className='final_price'>
                      <strong>&#x20B9;{item.discount_price}.00</strong>
                      <span>   &#x20B9;{item.original_price}.00 </span>
                      <p>({item.discount} off)</p>
                    </div>
                    <div className='saving'>You Save &#x20B9;{item.original_price - item.discount_price}.00</div>

                  </div>
                </div>
              </div>
              <div className='items_links'>Remove
              </div>
            </div>

            <div className='items_packing'>
              <strong>Assured Quality | 100% Handpicked | Easy Exchange</strong>
            </div>
            <div className='apply_coupon'>
              <p><img src={discount} alt="..." />  Apply Coupon</p>
              <span>Select</span>
            </div>

            <div className='order_details'>
              <p>Order Details</p>
              <span className='order_details_depth'><span>Bag Total </span><span>&#x20B9;{quantity*item.original_price}.00</span></span>
              <span className='order_details_depth'><span>Bag Savings </span><span style={{ color: '#008526' }}>-&#x20B9;{quantity*(item.original_price - item.discount_price)}.00</span></span>
              <span className='order_details_depth'><span>Convenience Fee <strong> What's is this?</strong></span></span>
              <span className='order_details_depth'><span>Delivery Fee</span>
                <span style={{ color: '#008526' }}>Free  <span style={{ textDecoration: 'line-through', color: 'black' }}>&#x20B9;99.00</span></span></span>
              <div className='total_price'><span>Total Amount</span><span>&#x20B9;{quantity*item.discount_price}</span></div>
            </div>

            <div className='return_refund_policy'>
              <p>Return Refund Policy</p>
              <span>In case of return, we ensure quick refunds. Full amount will be refunded excluding Convenience Fee</span>
              <strong><p>Read Policy</p></strong>
            </div>

            <div className={`final_bill ${isModalOpen ? 'hide_header_footer' : ''}`}>
              <div className='final_amounts'>
                <p>&#x20B9;{quantity*item.discount_price}</p>
                <span>View Details</span>
              </div>
              <div className='final_order'>
                <button>Place Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className='modal-batches'>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          contentLabel='sizes'
          className='ModalContent-batches'
          overlayClassName='ModalOverlay'>
          <div className="closediv">
            <p><strong>Select Size</strong></p>
            <button className="closeButton" onClick={closeModal}>&#10006;</button>

          </div>
          <div className='sizes_box'>
            {Sizes.length !== 0 ? (
              Sizes.map((size, index) => (

                <SizeBox
                  key={index}
                  size={size}
                  isSelected={size === selected}
                  onClick={() => handleSizeClick(size)}
                />

              ))
            ) : (
              <p>No sizes available</p>
            )}
          </div>
          <div className="quantity_control">
            <p><strong>Select Quantity</strong></p>
            <div>
              <button onClick={handleDecreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncreaseQuantity}>+</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Cart;
