import React, { useEffect, useRef, useState } from 'react';
import './GovernmentTrust.css';
import AnimatedGridPattern from './AnimatedGridPattern';

const GovernmentTrust = () => {
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
        <section className={`section-government-trust ${isVisible ? 'has-entered' : ''}`} ref={sectionRef}>
            {/* Animated Grid Pattern */}
            <div className="gov-trust-grid-container">
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.08}
                    duration={3}
                    repeatDelay={1}
                    className="gov-trust-grid-pattern"
                />
            </div>

            <div className="gov-trust-content">
                <div className="gov-logos-container">
                    <img
                        src="https://res.cloudinary.com/dlnygpreh/image/upload/f_auto,q_auto/v1770139990/branding/gov-logos.png"
                        alt="Government Entities Logos"
                        className="gov-logos-image"
                    />
                </div>

                <div className="trust-badge">
                    <div className="badge-text">
                        <strong>Trusted by 50+ Government Entities</strong>
                        <p>Direct relationships with all major UAE government departments and free zones.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GovernmentTrust;
