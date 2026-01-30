import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';
import heroVideo from '../assets/symbol bg video.mp4';

const Hero = () => {
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
        <div className={`intro-home ${isVisible ? 'has-entered' : ''}`} ref={sectionRef}>
            <figure className="image wp-image mode-cover has-background-color is-orientation-landscape object-fit-cover">
                <video
                    className="media media-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={heroVideo}
                ></video>
                <div className="sizer"></div>
                <div className="scrim"></div>
                <div className="background-color" style={{ backgroundColor: 'rgb(239, 142, 7)' }}></div>
            </figure>
            <h2 className="text">
                We are action-oriented strategists. <br />
                We help our clients achieve great things.
            </h2>
        </div>
    );
};

export default Hero;
