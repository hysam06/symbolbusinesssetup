import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './ValueProposition.css';
import valueBg1 from '../assets/pexels-pavel-danilyuk-8205064.jpg';
import valueBg2 from '../assets/pexels-august-de-richelieu-4427624.jpg';
import valueBg3 from '../assets/pexels-leeloothefirst-6929011.jpg';

const ValueProposition = ({ isEmbedded }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const location = useLocation();

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
        <div className={`section-value section ${isVisible ? 'has-entered' : ''} ${isEmbedded ? 'is-embedded' : ''}`} ref={sectionRef}>
            <div className="mask">
                <h3 className="title">Our Value Proposition</h3>
            </div>
            <div className="panel-blocks">
                <div className="block-value block-value">
                    <figure className="image wp-image mode-intrinsic-ratio has-background-color is-orientation-portrait object-fit-cover">
                        <img
                            alt=""
                            className="media media-image"
                            src={valueBg1}
                        />

                        <div className="scrim"></div>
                        <div className="background-color" style={{ backgroundColor: '#45403e' }}></div>
                    </figure>
                    <div className="mask"><h5 className="title">Expert Licensing</h5></div>
                    <div className="mask"><div className="text">Professional service that handles all legal approvals, permits, and regulatory requirements needed to start and operate your business smoothly. We ensure fast, compliant, and hassle-free licensing so you can focus on growing your company.</div></div>
                </div>

                <div className="block-value block-value">
                    <figure className="image wp-image mode-intrinsic-ratio has-background-color is-orientation-portrait object-fit-cover">
                        <img
                            alt=""
                            className="media media-image"
                            src={valueBg2}
                        />

                        <div className="scrim"></div>
                        <div className="background-color" style={{ backgroundColor: '#3d4042' }}></div>
                    </figure>
                    <div className="mask"><h5 className="title">Legal Navigation</h5></div>
                    <div className="mask"><div className="text">Our expert guidance through complex laws, regulations, and compliance processes to keep your business fully protected. We simplify legal procedures and help you make confident, informed decisions.</div></div>
                </div>

                <div className="block-value block-value">
                    <figure className="image wp-image mode-intrinsic-ratio has-background-color is-orientation-portrait object-fit-cover">
                        <img
                            alt=""
                            className="media media-image"
                            src={valueBg3}
                        />

                        <div className="scrim"></div>
                        <div className="background-color" style={{ backgroundColor: '#422f23' }}></div>
                    </figure>
                    <div className="mask"><h5 className="title">Document Preparation</h5></div>
                    <div className="mask"><div className="text">Our professional service for drafting, reviewing, and organizing all essential business documents with accuracy and compliance. We ensure your paperwork is complete, error-free, and ready for fast approvals.</div></div>
                </div>
            </div>
            {location.pathname !== '/mission' && (
                <div className="panel-button">
                    <a href="/mission" className="wp-link button global-button has-fill forward" style={{ borderColor: 'var(--color-dark-purple)', color: 'var(--color-dark-purple)' }}>
                        <span>OUR MISSION</span> <span>→</span>
                    </a>
                </div>
            )}
        </div>
    );
};

export default ValueProposition;
