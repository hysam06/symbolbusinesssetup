import React, { useEffect, useRef, useState } from 'react';
import './Clients.css';
import AnimatedGridPattern from './AnimatedGridPattern';

// Import local logos
import logo10 from '../assets/logosss/10.png';
import logo11 from '../assets/logosss/11.png';
import logo22 from '../assets/logosss/22.png';
import logo33 from '../assets/logosss/33.png';
import logo44 from '../assets/logosss/44.png';
import logo55 from '../assets/logosss/55.png';
import logo66 from '../assets/logosss/66.png';
import logo77 from '../assets/logosss/77.png';
import logo88 from '../assets/logosss/88.png';
import logo99 from '../assets/logosss/99.png';
import logo111 from '../assets/logosss/111.png';
import logo122 from '../assets/logosss/122.png';
import logo133 from '../assets/logosss/133.png';
import logo144 from '../assets/logosss/144.png';
import logo155 from '../assets/logosss/155.png';
import logo166 from '../assets/logosss/166.png';
import logo177 from '../assets/logosss/177.png';
import logo188 from '../assets/logosss/188.png';
import logo199 from '../assets/logosss/199.png';
import logo200 from '../assets/logosss/200.png';
import logo211 from '../assets/logosss/211.png';
import logo222 from '../assets/logosss/222.png';
import logo233 from '../assets/logosss/233.png';
import logo244 from '../assets/logosss/244.png';
import logo255 from '../assets/logosss/255.png';
import logo266 from '../assets/logosss/266.png';
import logo277 from '../assets/logosss/277.png';
import logo288 from '../assets/logosss/288.png';
import logo299 from '../assets/logosss/299.png';
import logo300 from '../assets/logosss/300.png';
import logo311 from '../assets/logosss/311.png';
import logo322 from '../assets/logosss/322.png';
import logo333 from '../assets/logosss/333.png';
import logo344 from '../assets/logosss/344.png';
import logo355 from '../assets/logosss/355.png';

const logos = [
    logo10, logo11, logo22, logo33, logo44, logo55, logo66, logo77, logo88, logo99,
    logo111, logo122, logo133, logo144, logo155, logo166, logo177, logo188, logo199, logo200,
    logo211, logo222, logo233, logo244, logo255, logo266, logo277, logo288, logo299, logo300,
    logo311, logo322, logo333, logo344, logo355
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
