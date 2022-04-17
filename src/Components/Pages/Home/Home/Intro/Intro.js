import React from 'react';
import { Button } from 'react-bootstrap';
import './Intro.css';
import img from '../../../../images/image-caption-1.jpg';
const Intro = () => {
    return (
        <section className='container my-5 py-5'>
            <div className='row align-items-center row-cols-1 row-cols-md-2 g-2'>
                <div>
                    <h2 className='fw-bold'>Welcome to Psychological care</h2>
                    <p>Top level physiotherapy professional, evidenced based treatment. I diagnose the cause and provide you with the best possible treatment.
                        I diagnose your problem , monitor you for sometimes and help you to enjoy your beautiful life. You must believe in beauty, You have a beautiful life and I am here to help you so that you can enjoy it.
                        You don't know what to do in your life and how to solve any problem ? Don't worry, I will teach you, i will train you to get out of depression.
                    </p>

                    <div className='my-5'><Button className='appointment-btn'>Fix An Appointment</Button> <Button className='learn-mero-btn'>Learn More</Button></div>
                </div>
                <div className='overely-container'>
                    <img className='img-fluid overlyy-img d-block' src={img} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Intro;