import React, { useEffect, useState } from 'react';
import './Hero.css';
import heroVideo from '../assets/symbol bg video.mp4';

const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className={`intro-home ${mounted ? 'intro-is-complete' : ''}`}>
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
