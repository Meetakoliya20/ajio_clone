import React from 'react';
import { useState } from 'react';
import arrow from '../images/arrow.svg';
import { InputText } from 'primereact/inputtext';
import { NavLink, useParams, useLocation } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css'; // Import PrimeReact theme CSS
import 'primereact/resources/primereact.min.css'; // Import PrimeReact core CSS
import 'primeicons/primeicons.css'; // Import PrimeIcons CSS
import './Address.css'; // Import your custom CSS file

const Address = () => {
    const { id } = useParams(); 
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const quantity = queryParams.get('quantity');
    const original_price = queryParams.get('original_price');
    const discount_price = queryParams.get('discount_price');
    const [inputs, setInputs] = useState({
        username: '',
        mobileNumber: '',
        pincode: '',
        city: '',
        state: '',
        street: '',
        buildingName: '',
        landmark: '',
        addressType: 'home',
        defaultAddress: false
    });

    const handleReset = () => {
        setInputs({
            username: '',
            mobileNumber: '',
            pincode: '',
            city: '',
            state: '',
            street: '',
            buildingName: '',
            landmark: '',
            addressType: 'home',
            defaultAddress: false
        });
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setInputs({
            ...inputs,
            [name]: inputValue
        });
    };

    return (
        <div className='Address'>
            <div className='address_header'>
                <div className='z1'>
                    <NavLink to={`/cart/${id}`}>
                        <img src={arrow} alt="..." />
                    </NavLink>
                </div>
                <div className='z2'>
                    Add Address
                </div>
                <div className='z3' onClick={handleReset}>
                    reset
                </div>
            </div>
            <div className='user_details'>
                <p>Contact Info</p>

                <span className="p-float-label">
                    <InputText id="username" name="username" value={inputs.username} onChange={handleInputChange} className="custom-input" />
                    <label htmlFor="username" className='userName'>Name</label>
                </span>
                <span className="p-float-label">
                    <InputText id="username" name="mobileNumber" value={inputs.mobileNumber} onChange={handleInputChange} className="custom-input" />
                    <label htmlFor="Mobile_number" className='userName'>Phone Number(+91)</label>
                </span>
            </div>
            <div className='user_details'>
                <p>Address Info</p>

                <div className='add_info'>
                    <span className="p-float-label">
                        <InputText id="address" name="pincode" value={inputs.pincode} onChange={handleInputChange} className="custom-input" />
                        <label htmlFor="username" className='userName'>Pincode</label>
                    </span>
                    <span className="p-float-label">
                        <InputText id="address" name="city" value={inputs.city} onChange={handleInputChange} className="custom-input" />
                        <label htmlFor="Mobile_number" className='userName'>City</label>
                    </span>
                </div>
                <span className="p-float-label">
                    <InputText id="username" name="state" value={inputs.state} onChange={handleInputChange} className="custom-input" />
                    <label htmlFor="State" className='userName'>State</label>
                </span>
                <span className="p-float-label">
                    <InputText id="username" name="street" value={inputs.street} onChange={handleInputChange} className="custom-input" />
                    <label htmlFor="Locality / Area / Street" className='userName'>Locality / Area / Street</label>
                </span>
                <span className="p-float-label">
                    <InputText id="username" name="buildingName" value={inputs.buildingName} onChange={handleInputChange} className="custom-input" />
                    <label htmlFor="Flat no / Building Name" className='userName'>Flat no / Building Name</label>
                </span>
                <span className="p-float-label">
                    <InputText id="username" name="landmark" value={inputs.landmark} onChange={handleInputChange} className="custom-input" />
                    <label htmlFor="Landmark" className='userName'>Landmark (optional)</label>
                </span>
            </div>

            <div className='address_details'>
                <p>Type Of Address</p>

                <div className='address_type'>
                    <label>
                        <input
                            type="radio"
                            name="addressType"
                            value="home"
                            style={{ color: 'black' }}
                            defaultChecked
                            onChange={handleInputChange}
                        />
                        <span >Home</span>
                    </label>
                    <label className='label'>
                        <input
                            type="radio"
                            name="addressType"
                            value="work"
                            style={{ color: 'black' }}
                            onChange={handleInputChange}
                        />
                        <span >Work</span>
                    </label>
                    <label className='label'>
                        <input
                            type="radio"
                            name="addressType"
                            value="others"
                            style={{ color: 'black' }}
                            onChange={handleInputChange}
                        />
                        <span >Others</span>
                    </label>

                </div>
                <div className='address_type'>
                    <label>
                        <input
                            type="checkbox"
                            name="defaultAddress"
                            checked={inputs.defaultAddress}
                            onChange={handleInputChange}
                        />   Make default address
                    </label>
                </div>


                <div className='save_address'>
                    <NavLink to={`/payment/${id}?quantity=${quantity}&original_price=${original_price}&discount_price=${discount_price}`}>Save Address</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Address;
