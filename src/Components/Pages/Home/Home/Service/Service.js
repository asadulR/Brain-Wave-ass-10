import React from 'react';
import './../Services/Services.css'
const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='col'>
            <div className='service-card'>
                <div className='img-overely'>
                    <img className='img-fluid' src={img} alt="" />
                    <div class="overlay">Price: ${price}</div>
                </div>
                <div className='service-div'>
                    <div className="service-info p-4">
                        <h5 className='mt-1 color-title fw-bold'>{name}</h5>
                        <p className='py-1'>{description}</p>
                    </div>
                    <button className='w-100 checkout-btn border-0 py-2'>CheckOut</button>
                </div>
            </div>
        </div>
    );
};

export default Service;