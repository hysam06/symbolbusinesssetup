import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { serviceData } from '../data/serviceData';
import './Services.css'; // Keep reusing card styles
import './ServicesPreview.css'; // Add new specific styles

const ServicesPreview = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Get first 3 services
    const previewServices = serviceData.main.slice(0, 3);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={`section-services-preview ${isVisible ? 'has-entered' : ''}`} ref={sectionRef}>
            <div className="preview-content-container">
                <h2 className="preview-title">
                    Our Services
                </h2>

                <div className="services-grid">
                    {previewServices.map((service) => (
                        <div className="service-card" key={service.id}>
                            <div className="card-image-wrapper">
                                <img src={service.image} alt={service.title} className="card-image" />
                                <span className="card-label">{service.label}</span>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{service.title}</h3>
                                <p className="card-desc">{service.desc}</p>
                                <Link to={`/services/${service.id}`} className="wp-link button global-button has-fill forward">
                                    <span>Explore More</span>
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="preview-button-container">
                    <Link to="/services" className="wp-link button global-button has-fill forward"
                        style={{
                            borderColor: 'var(--color-dark-purple)',
                            display: 'inline-flex'
                        }}>
                        <span>MORE SERVICES</span> <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
