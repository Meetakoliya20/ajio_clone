import React from 'react';
import { useParams, NavLink, useLocation } from 'react-router-dom';
import arrow from '../images/arrow.svg';
import './Payment.css'
import sbi from '../images/sbi.avif'
import upi from '../images/upi.svg';
import google_pay from '../images/google_pay.svg';
import phone_pay from '../images/phone_pay.svg';
import paytam from '../images/paytam.svg';

const Payment = () => {
    window.scrollTo(0, 0);
    const { id } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const quantity = queryParams.get('quantity');
    const original_price = queryParams.get('original_price');
    const discount_price = queryParams.get('discount_price');
    const amount=quantity*discount_price
    const paymentUrl = `tez://upi/pay?pa=merchant1607340.augp@aubank&pn=Shop&purpose=00&am=${amount}`;
    const paymentUrl1 = `phonepe://pay?pa=merchant1607340.augp@aubank&pn=Shop&am=${amount}&tr=H2MkMGf5olejI&mc=8931&cu=INR&tn=shop;/`;

    const paymentUrl2 =`paytmmp://pay/?pa=merchant1607340.augp@aubank&pn=Shop&purpose=00&am=${amount}`;

    return (
        <div className='payment_Section'>
            <div className="payment_header">
                <div className='cart1'>

                    <NavLink to={`/cart/${id}`}>
                        <img src={arrow} alt="Back" />
                    </NavLink>
                </div>
                <div className='cart2'>
                    <span>Payment Details</span>
                </div>
            </div>


            <div className='services'>
                <strong>Assured Quality | 100% Handpicked | Easy Exchange</strong>

            </div>
            <div className='offers_promotions'>
                <div className='offers_promotions_header'>
                    <strong>Offers & Promotions</strong>
                    <p>+ 7 more offers</p></div>
                <div className='offers_details'>
                    <div className='p_details'><p>Get 10% Instant Discount of up to Rs.1000 on a minimum transaction value of Rs 3500 using SBI Credit Card <strong>T&C</strong> </p></div>
                    <div className='img'><img src={sbi} alt="..." /></div>

                </div>
            </div>
            <div className='pay_via'>
                <div className='side'><img src={upi} alt="..." /><span className='alignment'><span>UPI</span><span className='upi'>Pay By Any UPI Pay</span></span></div>
                <p><a href={paymentUrl}><span className='pays'><img src={google_pay} alt="..." /><span>GOOGLE PAY</span></span></a></p>
                <p><a href={paymentUrl1}><span className='pays'><img src={phone_pay} alt="..." /><span>PHONE PAY</span></span></a></p>
                <p><a href={paymentUrl2}><span className='pays'><img src={paytam} alt="..." /><span>PAYTAM </span></span></a></p>


            </div>
            <div className='across'>We have served 11 Million+ happy customers across India</div>
            <div className='order_details '>
                <p>Order Details</p>
                <span className='order_details_depth space'><span>Bag Total </span><span>&#x20B9;{quantity * original_price}.00</span></span>
                <span className='order_details_depth space'><span>Bag Savings </span><span style={{ color: '#008526' }}>-&#x20B9;{quantity * (original_price - discount_price)}.00</span></span>
                <span className='order_details_depth space'><span>Convenience Fee <strong> What's is this?</strong></span></span>
                <span className='order_details_depth space'><span>Delivery Fee</span>
                    <span style={{ color: '#008526' }}>Free  <span style={{ textDecoration: 'line-through', color: 'black' }}>&#x20B9;99.00</span></span></span>
                <div className='total_price space'><span>Total Amount</span><span>&#x20B9;{quantity * discount_price}</span></div>
                <div className='amount_payable space' > <span>Amount Payable</span><span>&#x20B9;{quantity * discount_price}</span></div>
            </div>

            <div className="final_bill">
                <div className='final_amounts'>
                    <p>&#x20B9;{quantity * discount_price}</p>
                    <span>View Details</span>
                </div>
                <div className='final_order'>
                    <button disabled >Place Order</button>
                </div>
            </div>

        </div>
    );
};

export default Payment;
