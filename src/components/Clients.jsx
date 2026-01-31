import React, { useEffect, useRef, useState } from 'react';
import './Clients.css';
import AnimatedGridPattern from './AnimatedGridPattern';
import { getCloudinaryUrl } from '../utils/cloudinary';

// Cloudinary optimized logos - your actual uploaded logos
const logos = [
    getCloudinaryUrl('logos/logo-10', { width: 200 }),
    getCloudinaryUrl('logos/logo-11', { width: 200 }),
    getCloudinaryUrl('logos/logo-22', { width: 200 }),
    getCloudinaryUrl('logos/logo-33', { width: 200 }),
    getCloudinaryUrl('logos/logo-44', { width: 200 }),
    getCloudinaryUrl('logos/logo-55', { width: 200 }),
    getCloudinaryUrl('logos/logo-66', { width: 200 }),
    getCloudinaryUrl('logos/logo-77', { width: 200 }),
    getCloudinaryUrl('logos/logo-88', { width: 200 }),
    getCloudinaryUrl('logos/logo-99', { width: 200 }),
    getCloudinaryUrl('logos/logo-111', { width: 200 }),
    getCloudinaryUrl('logos/logo-122', { width: 200 }),
    getCloudinaryUrl('logos/logo-133', { width: 200 }),
    getCloudinaryUrl('logos/logo-144', { width: 200 }),
    getCloudinaryUrl('logos/logo-155', { width: 200 }),
    getCloudinaryUrl('logos/logo-166', { width: 200 }),
    getCloudinaryUrl('logos/logo-177', { width: 200 }),
    getCloudinaryUrl('logos/logo-188', { width: 200 }),
    getCloudinaryUrl('logos/logo-199', { width: 200 }),
    getCloudinaryUrl('logos/logo-200', { width: 200 }),
    getCloudinaryUrl('logos/logo-211', { width: 200 }),
    getCloudinaryUrl('logos/logo-222', { width: 200 }),
    getCloudinaryUrl('logos/logo-233', { width: 200 }),
    getCloudinaryUrl('logos/logo-244', { width: 200 }),
    getCloudinaryUrl('logos/logo-255', { width: 200 }),
    getCloudinaryUrl('logos/logo-266', { width: 200 }),
    getCloudinaryUrl('logos/logo-277', { width: 200 }),
    getCloudinaryUrl('logos/logo-288', { width: 200 }),
    getCloudinaryUrl('logos/logo-299', { width: 200 }),
    getCloudinaryUrl('logos/logo-300', { width: 200 }),
    getCloudinaryUrl('logos/logo-311', { width: 200 }),
    getCloudinaryUrl('logos/logo-322', { width: 200 }),
    getCloudinaryUrl('logos/logo-333', { width: 200 }),
    getCloudinaryUrl('logos/logo-344', { width: 200 }),
    getCloudinaryUrl('logos/logo-355', { width: 200 }),
];

const Clients = () => {
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
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={`section-clients ${isVisible ? 'has-entered' : ''}`} ref={sectionRef}>
            {/* Animated Grid Pattern */}
            <div className="clients-grid-container">
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.15}
                    duration={3}
                    repeatDelay={1}
                    className="clients-grid-pattern"
                />
            </div>
            <div className="panel-text">
                <div className="mask">
                    <h3 className="title">Trusted by Leading Brands</h3>
                    <div className="title-line"></div>
                </div>

                <div className="effect-marquee" style={{ '--duration': '40s', '--direction': 'normal' }}>
                    <div className="items">
                        <div className="content">
                            {logos.map((src, index) => (
                                <figure key={`logo-1-${index}`} className="logo">
                                    <img src={src} alt="Client Logo" />
                                </figure>
                            ))}
                        </div>
                        <div className="content">
                            {logos.map((src, index) => (
                                <figure key={`logo-2-${index}`} className="logo">
                                    <img src={src} alt="Client Logo" />
                                </figure>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="trust-badge">

                    <div className="badge-text">
                        <strong>Trusted by 50+ Government Entities</strong>
                        <p>Direct relationships with all major UAE government departments and free zones.</p>
                    </div>
                </div>

                <a href="/mission" className="wp-link button global-button has-fill forward mission-button">
                    <span>OUR MISSION</span> <span>→</span>
                </a>
            </div>
        </section>
    );
};

export default Clients;
