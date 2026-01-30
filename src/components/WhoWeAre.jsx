import React, { useState, useEffect, useRef } from 'react';
import aboutUsImg from '../assets/about us.jpg';
import './WhoWeAre.css';

const WhoWeAre = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Trigger once
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
        <div
            className="section-who-we-are"
            ref={sectionRef}
        >
            <div className={`content-container ${isVisible ? 'has-entered' : ''}`}>
                <div className="columns-row">
                    <div className="col-left">
                        <figure className="image wp-image mode-intrinsic-ratio has-background-color is-orientation-landscape object-fit-cover">
                            <img
                                alt="About Us"
                                className="media media-image"
                                src={aboutUsImg}
                            />
                            <div className="sizer" style={{ paddingBottom: '66.65%' }}></div>
                            <div className="scrim"></div>
                            <div className="background-color" style={{ backgroundColor: '#a49b8a' }}></div>
                        </figure>
                    </div>
                    <div className="col-right">
                        <h2 className="title">About us</h2>
                        <div className="text">
                            Our expert guidance through complex laws, regulations, and compliance processes to keep your business fully protected. We simplify legal procedures and help you make confident, informed decisions.
                        </div>
                        <a href="/services" className="wp-link button global-button has-fill forward" style={{ borderColor: 'var(--color-dark-purple)', color: 'var(--color-dark-purple)' }}>
                            <span>OUR SERVICES</span> <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="global-sphere sphere"></div>
        </div>
    );
};

export default WhoWeAre;
