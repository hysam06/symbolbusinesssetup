import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { getCloudinaryUrl } from '../utils/cloudinary';
import { serviceData } from '../data/serviceData';

const servicesBg = getCloudinaryUrl('backgrounds/services-bg', { width: 1920, height: 1080 });

import CategorySelect from './CategorySelect';

const Services = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

    // Combine all services
    const allServices = [...serviceData.main, ...serviceData.additional];

    // Map original labels to new grouped categories
    const categoryMapping = {
        'COMMERCIAL LICENSE': 'Business Setup',
        'BUSINESS SETUP': 'Business Setup',
        'PROFESSIONAL LICENSES': 'Business Setup',
        'RENEWAL': 'Business Setup',

        'VISA SERVICES': 'Immigration & Visas',
        'RESIDENCY': 'Immigration & Visas',

        'LEGAL SERVICES': 'Legal & Government',
        'PRO SERVICES': 'Legal & Government',
        'GOVERNMENT': 'Legal & Government',
        'LEGAL SUPPORT': 'Legal & Government',

        'CONSULTING': 'Business Support',
        'FINANCE': 'Business Support'
    };

    // Derived unique categories
    const categories = ['All Categories', 'Business Setup', 'Immigration & Visas', 'Legal & Government', 'Business Support'];

    const filteredServices = allServices.filter(service => {
        const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase());

        const serviceGroup = categoryMapping[service.label];
        const matchesCategory = selectedCategory === 'All Categories' || serviceGroup === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <section className={`page-services page ${isVisible ? 'has-entered' : ''}`} ref={sectionRef} style={{ backgroundImage: `url(${servicesBg})` }}>
            <div className="services-overlay"></div>

            <div className="services-content-container">
                <h1 className="services-page-title">Our Services</h1>
                <div className="services-search-container">
                    <input
                        type="text"
                        placeholder="Search services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <CategorySelect
                        value={selectedCategory}
                        onChange={setSelectedCategory}
                        options={categories}
                    />
                </div>

                <div className="services-grid">
                    {filteredServices.length > 0 ? (
                        filteredServices.map((service) => (
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
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', width: '100%', color: '#666', fontSize: '18px' }}>No services found matching "{searchQuery}"</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;
