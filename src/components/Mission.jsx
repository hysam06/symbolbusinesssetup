import React, { useState, useEffect } from 'react';
import './Mission.css';
import missionBg from '../assets/pexels-artempodrez-6779565.jpg';
import ValueProposition from './ValueProposition';
import AnimatedGridPattern from './AnimatedGridPattern';

const Mission = () => {
    return (
        <section className="page-mission page">
            {/* Animated Grid Pattern */}
            <div className="mission-grid-container">
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className="mission-grid-pattern"
                />
            </div>

            <ValueProposition isEmbedded={true} />
        </section>
    );
};

export default Mission;
