import React, { useState, useEffect, useRef } from 'react';
import './Team.css';

import './Team.css';
import DotPattern from './DotPattern';

// import teamBg from '../assets/pexels-alex-dos-santos-305643819-33077896.jpg';
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
        <section className={`page-team page ${isVisible ? 'has-entered' : ''}`} ref={sectionRef}>
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className="team-dot-pattern"
                style={{ color: 'rgba(255, 255, 255, 0.2)' }}
            />
            {/* <div className="team-overlay"></div> */}

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
