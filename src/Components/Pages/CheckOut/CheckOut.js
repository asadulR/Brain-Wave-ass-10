import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CheckOut = () => {
    const navigate = useNavigate();
    const { serviceId } = useParams();
    const handleCheckOutForm = (event) => {
        event.preventDefault();
        navigate('/')
        
    }

   
    return (

        <div className='container my-5'>
            <h2 className='text-center fw-bold'>Appointment Form</h2>
            <h2 className='my-5 py-5'>For Service ID: {serviceId}</h2>
            <form onSubmit={handleCheckOutForm} className="row g-3">
                <div className="col-md-6">
                    <input type="text" className="form-control" id="inputName" placeholder='Your name*' required />
                </div>
                <div className="col-md-6">
                    <input type="number" className="form-control" id="inputAge" placeholder='Your age*' required />
                </div>
                <div className="col-md-6">
                    <input type="email" className="form-control" id="inputEmail4" placeholder='Your email*' required />
                </div>
                <div className="col-md-6">
                    <input type="number" className="form-control" id="inputNumber" placeholder='Phone number' />
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" id="inputOccupation" placeholder='Profrssion*' required />
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity" placeholder='City*' required />
                </div>
                <div className="col-12">
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St*" required />
                </div>

                <div className="col-md-4">
                    <input type="date" className="form-control" id="inputDate" required />
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" id="inputTime" placeholder='time'/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Checkout</button>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;