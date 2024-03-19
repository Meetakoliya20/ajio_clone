
import React from 'react';
import './Model.css'
import Slider from 'react-slick';

function Model({ isOpen, closeModal, images }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        isOpen && (
            <div className="modal">

                <span className="close" onClick={closeModal}>&times;</span>

                <div className="modal-content">


                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index} >
                                <img src={image} alt="..." />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        )
    );
}

export default Model;
