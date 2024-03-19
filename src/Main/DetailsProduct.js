import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import arrow from '../images/arrow.svg';
import like from '../images/like.svg';
import cart from '../images/cart.svg';
import cart1 from '../images/cart1.svg';
import search from '../images/sea.svg';
import percentage from '../images/percentage.svg';
import ajio from '../images/ajio.png';
import './product.css';
import upload from '../images/102.png'
import star from '../images/star.svg'
import SimilarProducts from './Similar_products';
import Model from './Model';


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

function DetailsProduct() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json');
        const jsonData = await response.json();
        // Filter the data based on id
        setAllData(jsonData)
        const filteredData = jsonData.filter(item => item.id === parseInt(id));
        setData(filteredData);
        
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, [id]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleSizeClick = (size) => {
    setSelected(size === selected ? null : size);
  };

  return (
    <div className='details'>
      <div className='product_header'>
        <div className='d1'>
          <NavLink to="/products">
            <img src={arrow} alt="..." />
          </NavLink>
        </div>
        <div className='d2'>
          <NavLink to="/ ">
            <img src={ajio} alt="..." />
          </NavLink>
        </div>
        <div className='d3'>
          <img src={search} alt="..." className='img1' />
          <img src={like} alt="..." />
          <img src={cart} alt="..." />
        </div>
      </div>
      <div className='details_images'>
        <div>
          <Slider {...settings}>
            {data[0]?.other_image.map((image, index) => (
              <div key={index} >
                <img src={image} alt="..." onClick={openModal} />
              </div>
            ))}
          </Slider>
          {isOpen && (
            <Model isOpen={isOpen} closeModal={closeModal} images={data[0]?.other_image} />
          )}


        </div>


        {data[0] &&
          <div key={id}>
            <div className="product-details desc">
              <strong>{data[0].brand}</strong>
              <div className='product'><p>{data[0].product}</p></div>
              <div className='rating'><p>{data[0].rating}  &#9733; | {data[0].people}</p></div>
              <div className='price'>
                <strong>₹{data[0].discount_price}</strong>
                <span> MRP</span>
                <span className='o_price'>₹{data[0].original_price}</span>
                <span className='discount'>{data[0].discount} off</span>
              </div>
              <div>Price inclusive of all taxes</div>
            </div>
            <div id='coupon'>
              <div className='coupon'>
                <div className='coupon1'>
                  <img src={percentage} alt="..." />
                  <span>  Get It For</span>
                  <span id="original-price">₹{data[0].discount_price - 20}</span>
                  <p> Free Shipping on 799 and above. Just for you.</p>
                  <NavLink to="/products">View All Products&gt;</NavLink>
                </div>
                <div className='coupon2'>
                  <div>Use Code</div>
                  <div>FREEDEL</div>
                  <NavLink to="/">T&C</NavLink>
                </div>
              </div>
              <div className='coupon3'>+16 More Offers</div>
            </div>
            <div className='size_header'>
              <div className='size'>
                <p><strong>Select Size</strong></p>
                <NavLink to="/">Size Chart</NavLink>
              </div>
              <div className="size-container">
                {data[0].sizes.length !== 0 ? (
                  data[0].sizes.map((size, index) => (
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
            </div>
            <div className='delivery_details'>
              <p><strong>Delivery Details</strong></p>
              <NavLink to="/delivery_details">Check Delivery date</NavLink>
            </div>

            <div className=" desc">
              <div className='products-details'><p>Product Description</p><NavLink>View</NavLink></div>
              <ul>
                {data[0]?.product_detail.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="rating_Section">
              <div className='rating-header'><p>Rating</p><NavLink>View More</NavLink></div>
              <div className="rating_content">
                <div className='rating_number'><p className='number'><span>{data[0].rating}</span><img src={star} alt="..." className='rating_star' /></p><p className='word'>{data[0].people} Rating</p></div>
                <div className='rating_words'><p><strong>Customer word</strong></p><p>Tight</p><p>Good</p></div>
              </div>
            </div>
            <div className='return_policies'>
              <p>Return</p>
              <div>Easy 10 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please <span>click here</span>
              </div>
            </div>

            <div className='add_carts'>
              <div className='upload'><img src={upload} alt="..." /></div>
              <div className='upload'><img src={like} alt="..." /></div>
              <div className='cart'><NavLink  to={`/cart/${data[0].id}`}><img src={cart1} alt="..." /><strong> Buy Now</strong></NavLink></div>
            </div>
            <div className='more_products'>
              <div><strong>More Products</strong></div>
              <div className="product-list">

                <div>
                  <NavLink to="/products"><span>All Products</span><span>&gt;</span></NavLink>
                </div>
                <div>
                  <NavLink to="/products"><span>More Shirts</span><span>&gt;</span></NavLink>
                </div>
                <div>
                  <NavLink to="/products"><span>More Tshirts</span><span>&gt;</span></NavLink>
                </div>
                <div>
                  <NavLink to="/products"><span>More Shoes</span><span>&gt;</span></NavLink>
                </div>


              </div>
            </div>
            <div className='simiar_to'>
              <p>Similar To</p>
              <span>{data[0].product}</span>
              <SimilarProducts data={allData} product={data[0].category} id={data[0].id} />
            </div>
          </div>


        }
        <div className='service'>
          <strong>Assured Quality | 100% Handpicked | Easy Exchange</strong>
          <div className='s1'>
            <div className='about'>
              About Ajio
            </div>
            <div className='more'>
              +more
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
