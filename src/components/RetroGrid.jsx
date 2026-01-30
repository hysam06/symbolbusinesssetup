import React from 'react';
import './RetroGrid.css';

const RetroGrid = ({
    className = '',
    angle = 65,
    cellSize = 60,
    opacity = 0.5,
    lightLineColor = 'gray',
    darkLineColor = 'gray'
}) => {
    const gridStyles = {
        '--grid-angle': `${angle}deg`,
        '--grid-cell-size': `${cellSize}px`,
        '--grid-opacity': opacity,
        '--grid-light-line': lightLineColor,
        '--grid-dark-line': darkLineColor,
    };

    return (
        <div
            className={`retro-grid-container ${className}`}
            style={gridStyles}
        >
            <div className="retro-grid-transform">
                <div className="retro-grid-pattern" />
            </div>

            <div className="retro-grid-fade-overlay" />
        </div>
    );
};

export default RetroGrid;
