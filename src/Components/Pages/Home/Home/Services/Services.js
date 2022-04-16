import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('services.json')
        .then(res => res.json()).then(data => setServices(data));
    },[])
    return (
        <section className='container my-5'>
            <h5 className='text-center text-info'>PEACE OF MIND</h5>
            <h2 className='text-center fw-bold mb-5 pb-5'>Popular Therapy Services</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;