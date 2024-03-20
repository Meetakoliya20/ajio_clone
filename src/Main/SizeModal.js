import React, { useState } from 'react';
import './SizeModal.css';

const SizeModal = ({ onClose, sizes }) => {
  const [selected, setSelected] = useState(null);
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

  return (
    <div className="sizemodal">
      <div className="sizemodal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>Select Size</p>
        <div className='sizes_box'> 
          {sizes.map((size, index) => (
            <div
              key={index}
              className={selected === size ? 'selectedSize' : ''}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </div>
          ))}
        </div>
        <div className="quantity_control">
        <p>Select Quantity</p>
        <div>
          <button onClick={handleDecreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncreaseQuantity}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeModal;
