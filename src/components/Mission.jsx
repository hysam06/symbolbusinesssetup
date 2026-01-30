import React, { useState, useEffect } from 'react';
import './Mission.css';
import missionBg from '../assets/pexels-pavel-danilyuk-7654628.jpg';
import ValueProposition from './ValueProposition';
import AnimatedGridPattern from './AnimatedGridPattern';

const Mission = () => {
    return (
        <section className="page-mission page">
            {/* Background Image with Overlay - Optional, can be removed if grid only is desired */}
            {/* <div className="mission-bg-image" style={{ backgroundImage: `url(${missionBg})` }}></div> */}

            {/* Animated Grid Pattern */}
            <div className="mission-grid-container">
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.5}
                    duration={3}
                    repeatDelay={1}
                    className="mission-grid-pattern"
                />
            </div>

            <div className="mission-overlay"></div>
            <ValueProposition isEmbedded={true} />
        </section>
    );
};

export default Mission;
