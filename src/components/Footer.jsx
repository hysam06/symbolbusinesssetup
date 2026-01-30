import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';

import symbolLogo from '../assets/symbol og logo.png';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={`global-footer black ${isVisible ? 'has-entered' : ''}`} ref={sectionRef}>
            <div className="line"></div>
            <a aria-current="page" className="title mobile-only exact-active-link active-link" href="/">
                <img src={symbolLogo} alt="Actionist" className="svg" style={{ height: '66.2px', width: 'auto' }} />
            </a>
            <div className="meta">
                <a aria-current="page" className="title desktop-only exact-active-link active-link" href="/">
                    <img src={symbolLogo} alt="Actionist" className="svg" style={{ height: '66.2px', width: 'auto' }} />
                </a>
                <div className="column">
                    <div className="column-title">Find Us</div>
                    <a className="map-link" href="https://goo.gl/maps/nSqbZnRuqZFJL59MA" target="_blank" rel="noreferrer">
                        <div className="address">
                            1925 Century Park East<br />
                            Suite 1250<br />
                            Los Angeles, CA 90067
                        </div>
                    </a>
                    <a className="privacy" href="https://api.actionistconsulting.com/wp-content/uploads/2024/04/2024-Actionist-Privacy-Notice.pdf" target="_blank" rel="noreferrer">Privacy Policy</a>
                </div>
                <div className="column">
                    <div className="column-title">Follow Us</div>
                    <div className="icons-socials">
                        <a className="svg-link" href="https://www.linkedin.com/company/actionist-consulting" target="_blank" rel="noreferrer">
                            <svg baseProfile="basic" height="35.2" viewBox="0 0 35.2 35.2" width="35.2" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.6 0C7.9 0 0 7.9 0 17.6s7.9 17.6 17.6 17.6c9.7 0 17.6-7.9 17.6-17.6C35.2 7.9 27.3 0 17.6 0zm-3.8 25.2h-3.7V14.1h3.7v11.1zm-1.7-12.5c-1.3 0-2.3-1-2.3-2.3 0-1.3 1-2.3 2.3-2.3 1.3 0 2.3 1 2.3 2.3 0 1.3-1 2.3-2.3 2.3zm15 12.5h-3.7v-5.9c0-1.5-.5-2.5-1.9-2.5-.9 0-1.6.5-1.9 1.4-.1.3-.1.6-.1.9v6.2H16V14.2h3.5v1.3c.7-1.1 2-1.7 3.3-1.6 2.4 0 4.3 1.6 4.3 5v6.3z" fill="#2F1D34"></path>
                            </svg>
                        </a>
                    </div>
                    <p className="copyright"> © Copyright 2026<br />Actionist Consulting</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
