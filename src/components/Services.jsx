import React from 'react';
import './Services.css';
import servicesBg from '../assets/pexels-tima-miroshnichenko-5717562.jpg';

const Services = () => {
    return (
        <section className="page-services page" style={{ backgroundImage: `url(${servicesBg})` }}>
            <div className="services-overlay"></div>
        </section>
    );
};

export default Services;
