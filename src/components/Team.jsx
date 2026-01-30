import React, { useState, useEffect, useRef } from 'react';
import './Team.css';
import teamBg from '../assets/pexels-tima-miroshnichenko-5710948.jpg';
import founderImg from '../assets/our founder.jpeg';

const Team = () => {
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

    return (
        <section className={`page-team page ${isVisible ? 'has-entered' : ''}`} ref={sectionRef} style={{ backgroundImage: `url(${teamBg})` }}>
            <div className="team-overlay"></div>

            <div className="founder-section">
                <div className="founder-container">
                    <div className="founder-image">
                        <img src={founderImg} alt="Our Founder" />
                    </div>
                    <div className="founder-info">
                        <h2 className="founder-title">Our Founder</h2>
                        <h3 className="founder-name">MR ABDUL LATHEEF</h3>
                        <p className="founder-desc">
                            A visionary leader dedicated to innovation and excellence.
                            With years of experience in the industry, our founder has built
                            Symbol on the principles of integrity, foresight, and unwavering
                            commitment to client success, establishing a trusted partner for
                            business setup in Dubai.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
