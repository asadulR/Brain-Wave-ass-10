import React from 'react';
import img from '../../images/about-doctor-img.png';
import './About.css';
const About = () => {
    return (
        <section className='container my-5'>
            <h2 className='text-center my-5 py-3 about border fw-bolder'>About</h2>
            <div className='row g-3'>
                <div className='col img-side col-12 col-md-5'>
                    <img src={img} alt="" />
                </div>
                <div className='col col-12 col-md-7 ps-3'>
                    <h6 className='text-gray mb-3'>Top level phychologist professional, evidenced based treatment. I diagnose the cause and provide you with the best possible treatment.</h6>

                    <p>As a psychologist I used to  work with a frequently unwieldy subject – human behavior.
                        My goal is to study and treat people who have mental illnesses or emotional difficulties, or to provide research on human behavior and how people think.
                        There are three main types of psychologists – research, counseling and applied – and many specializations.
                        Specialization determines a psychologist's specific goal. Overall, research psychologists study people and behavior, in a search for fundamental psychological principles. Counseling psychologists work with individuals one-on-one to solve mental and emotional issues.
                        I'm helping people to improve their mental health and behavior. I'm loving my profession so much and I feel proude from my work...
                        I hope I will be able to  help people to cope with stressful situations, overcome addiction, manage their chronic illnesses,  and tests and assessments that can help diagnose a condition or tell more about the way a person thinks, feels, and behaves always.
                    </p>

                    <h5 className='name mt-4'>Asadul Rahman</h5>

                    <p className='mt-5 fs-brand-name'>Brain Wave</p>
                </div>
            </div>
        </section>
    );
};

export default About;