import React, { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./AnimatedGridPattern.css";

export default function AnimatedGridPattern({
    width = 40,
    height = 40,
    x = -1,
    y = -1,
    strokeDasharray = 0,
    numSquares = 30,
    className,
    maxOpacity = 0.3,
    duration = 3,
    repeatDelay = 1,
    ...props
}) {
    const id = useId();
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [squares, setSquares] = useState([]);

    // Resize observer to update dimensions
    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, []);

    // Generate random squares when dimensions change
    useEffect(() => {
        if (dimensions.width && dimensions.height) {
            const newSquares = Array.from({ length: numSquares }, (_, i) => ({
                id: i,
                pos: [
                    Math.floor(Math.random() * (dimensions.width / width)),
                    Math.floor(Math.random() * (dimensions.height / height)),
                ],
            }));
            setSquares(newSquares);
        }
    }, [dimensions, numSquares, width, height]);

    return (
        <svg
            ref={containerRef}
            aria-hidden="true"
            className={`animated-grid-pattern ${className || ""}`}
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path
                        d={`M.5 ${height}V.5H${width}`}
                        fill="none"
                        strokeDasharray={strokeDasharray}
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`} />
            <svg x={x} y={y} className="animated-grid-squares">
                {squares.map(({ pos: [sqX, sqY], id }, index) => (
                    <motion.rect
                        key={`${sqX}-${sqY}-${id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: maxOpacity }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.1,
                            repeatDelay,
                        }}
                        width={width - 1}
                        height={height - 1}
                        x={sqX * width + 1}
                        y={sqY * height + 1}
                    />
                ))}
            </svg>
        </svg>
    );
}
