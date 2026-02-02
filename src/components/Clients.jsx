import React, { useEffect, useRef, useState } from 'react';
import './Clients.css';
import AnimatedGridPattern from './AnimatedGridPattern';
import { getCloudinaryUrl } from '../utils/cloudinary';

// Cloudinary optimized logos - your actual uploaded logos
const logos = [
    getCloudinaryUrl('logos/logo-10', { width: 120 }),
    getCloudinaryUrl('logos/logo-11', { width: 120 }),
    getCloudinaryUrl('logos/logo-22', { width: 120 }),
    getCloudinaryUrl('logos/logo-33', { width: 120 }),
    getCloudinaryUrl('logos/logo-44', { width: 120 }),
    getCloudinaryUrl('logos/logo-55', { width: 120 }),
    getCloudinaryUrl('logos/logo-66', { width: 120 }),
    getCloudinaryUrl('logos/logo-77', { width: 120 }),
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

                <a href="/mission" className="wp-link button global-button has-fill forward mission-button">
                    <span>OUR MISSION</span> <span>→</span>
                </a>
            </div>
        </section>
    );
};

export default Clients;
