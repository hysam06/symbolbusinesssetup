import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { getCloudinaryUrl } from '../utils/cloudinary';

const symbolLogo = getCloudinaryUrl('branding/symbol-logo', { width: 400 });

const Header = () => {
    const [scrollState, setScrollState] = useState('state-top');
    const [introActive, setIntroActive] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const location = useLocation();

    useEffect(() => {
        // Remove intro class after a delay ensuring it doesn't stay hidden forever
        const timer = setTimeout(() => {
            setIntroActive(false);
        }, 1000);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY.current;

            if (currentScrollY < 10) {
                setScrollState('state-top');
            } else if (delta > 5 && currentScrollY > 50) {
                // Scrolling down
                setScrollState('state-off');
            } else if (delta < -5) {
                // Scrolling up
                setScrollState('state-float');
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className={`header-floating ${introActive ? 'intro-is-active' : ''} ${scrollState}`}>
                <Link aria-current="page" className="exact-active-link active-link header-logo" to="/">
                    <img src={symbolLogo} alt="Actionist" className="svg word" style={{ height: '160px', width: 'auto' }} />
                </Link>
                <ul className="global-menu wp-menu name-main-menu has-loaded">
                    <li className="menu-item wp-menu-item menu-item is-realtive">
                        <Link className="menu-link link-internal" to="/services">Services</Link>
                    </li>
                    <li className="menu-item wp-menu-item menu-item is-realtive">
                        <Link className="menu-link link-internal" to="/mission">Mission</Link>
                    </li>
                    <li className="menu-item wp-menu-item menu-item is-realtive">
                        <Link className="menu-link link-internal" to="/team">Team</Link>
                    </li>

                    <li className="menu-item wp-menu-item menu-item is-realtive">
                        <Link className={`menu-link link-internal ${location.pathname === '/contact' ? 'exact-active-link' : ''}`} to="/contact">Contact</Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button className={`button-menu ${menuOpen ? 'is-open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                    <svg className="svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        {menuOpen ? (
                            // X icon when menu is open
                            <>
                                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <line x1="6" y1="18" x2="18" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </>
                        ) : (
                            // Hamburger icon when menu is closed
                            <>
                                <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </>
                        )}
                    </svg>
                    <span className="text">{menuOpen ? 'Close' : 'Menu'}</span>
                </button>

                <div className="color"></div>
                <div className="hotspot"></div>
            </header>

            {/* Mobile Menu Panel */}
            <div className={`panel-menu ${menuOpen ? 'menu-is-open' : ''}`} onClick={() => setMenuOpen(false)}>
                <ul className="menu">
                    <li className="menu-item">
                        <Link className="menu-link" to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="menu-link" to="/mission" onClick={() => setMenuOpen(false)}>Mission</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="menu-link" to="/team" onClick={() => setMenuOpen(false)}>Team</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="menu-link" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
