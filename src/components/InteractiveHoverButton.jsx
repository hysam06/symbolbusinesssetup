import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './InteractiveHoverButton.css';

const InteractiveHoverButton = ({ children, text = "Button", href, className = "", ...props }) => {
    const Component = href ? 'a' : 'button';
    const cleanProps = { ...props };

    // Remove ref from props if it exists to avoid conflicts, though we aren't forwarding currently
    // Simple implementation of the "dot expanding" effect

    return (
        <Component
            href={href}
            className={`group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 text-center font-semibold ${className}`}
            style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '9999px',
                border: '1px solid black', // Fallback/base style
                padding: '12px 24px',
                backgroundColor: 'transparent',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'currentColor'
            }}
            {...cleanProps}
        >
            <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 10, position: 'relative' }}>
                <div
                    className="expander-dot"
                    style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#000', // The expanding dot color
                        position: 'absolute',
                        left: '20px', // Approximate visual alignment
                        top: '50%',
                        transform: 'translateY(-50%)',
                        transition: 'transform 0.4s ease-in-out'
                    }}
                ></div>
                <span
                    className="initial-text"
                    style={{
                        display: 'inline-block',
                        transition: 'all 0.3s ease',
                        marginLeft: '15px' // Space for the dot
                    }}
                >
                    {children}
                </span>
            </div>
            <div
                className="hover-text"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    color: 'white', // Text color when hovered
                    opacity: 0,
                    transform: 'translateX(20px)',
                    transition: 'all 0.3s ease',
                    zIndex: 20,
                    pointerEvents: 'none'
                }}
            >
                <span>{children}</span>
                <span className="arrow">→</span>
            </div>
        </Component>
    );
};

export default InteractiveHoverButton;
