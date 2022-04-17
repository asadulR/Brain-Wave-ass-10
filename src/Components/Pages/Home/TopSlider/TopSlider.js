import React from 'react';
import './TopSlider.css';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/Slider/slider1.jpg';
import slider2 from '../../../images/Slider/slider2.jpg';
import slider3 from '../../../images/Slider/slider3.jpg';

const TopSlider = () => {
    return (
        <div>
            <Carousel variant='dark' fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='fw-bolder'>There is Always a Better Way!</h3>
                        <p className='mb-1 s-none mt-3'>Create a life that looks good on the insite.</p>
                        <p className='s-none'>Not one that just looks good on the outside</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='fw-bold'>Get your Issues Shorted</h3>
                        <p className='s-none'>Get your life back, lead a fresh new life</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>OVER <span className='fw-bold fs-1 text-success'>97%</span> CASES SOLVED</p>
                        <h3 className='fw-bold s-none'>Award Winning Psychiatrist</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopSlider;