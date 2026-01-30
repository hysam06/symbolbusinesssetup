import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import AnimatedGridPattern from './AnimatedGridPattern';

const HomeContact = () => {
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
        <section className={`section-contact-home ${isVisible ? 'has-entered' : ''}`} ref={sectionRef}>
            {/* Animated Grid Pattern */}
            <div className="home-contact-grid-container">
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className="home-contact-grid-pattern"
                />
            </div>
            <div className="contact-container" style={{ margin: '0 auto' }}>
                {/* Left Column: Contact Info */}
                <div className="contact-info">
                    <h2 className="info-title">Ready to Start Your Business Journey?</h2>
                    <p className="info-subtitle">
                        Contact us for a free consultation. Our experts are ready to guide you through your UAE business setup.
                    </p>

                    <div className="contact-details">
                        <div className="detail-item">
                            <div className="icon-circle">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.92C16.7428 21.5857 13.787 20.5342 11.19 18.85C8.77382 17.2436 6.72159 15.161 5.15001 12.71C3.49987 10.0766 2.48625 7.07659 2.18001 3.96001C2.15509 3.68297 2.18833 3.40409 2.27756 3.14187C2.36679 2.87965 2.50998 2.64019 2.69748 2.43936C2.88497 2.23853 3.11234 2.08097 3.3644 1.97721C3.61646 1.87346 3.88739 1.82594 4.16001 1.83801H7.16001C7.65345 1.83358 8.13196 2.01353 8.50854 2.34568C8.88511 2.67784 9.13374 3.13904 9.21001 3.64501C9.35123 4.71761 9.61394 5.77259 9.99001 6.80001C10.1066 7.1122 10.1317 7.44855 10.0624 7.77219C9.99307 8.09584 9.83226 8.39423 9.59801 8.63401L7.82001 10.41C9.80931 13.9056 12.6844 16.7458 16.23 18.7L18.01 16.92C18.2519 16.6806 18.5529 16.5167 18.8795 16.4462C19.206 16.3757 19.5448 16.4013 19.86 16.52C20.9022 16.8927 21.9723 17.1527 23.06 17.29C23.5786 17.3619 24.0537 17.6111 24.3986 17.9942C24.7435 18.3773 24.9358 18.8697 24.94 19.38V22.38C24.94 22.9322 24.7207 23.4618 24.3303 23.8522C23.9398 24.2427 23.4102 24.462 22.858 24.462L22 16.92Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="detail-text">
                                <span className="detail-label">PHONE</span>
                                <span className="detail-value">+971 50 427 4260</span>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="icon-circle">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 6L12 13L2 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="detail-text">
                                <span className="detail-label">EMAIL</span>
                                <span className="detail-value">symboladv66@gmail.com</span>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="icon-circle">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="detail-text">
                                <span className="detail-label">ADDRESS</span>
                                <span className="detail-value block">G.S14, P.B.No:111112</span>
                                <span className="detail-value block">Al Sharafi Building.1</span>
                                <span className="detail-value block">Al Karama, Dubai-UAE</span>
                            </div>
                        </div>
                    </div>

                    <div className="social-icons">
                        <span className="follow-text">Follow Us:</span>
                        <a href="#" className="social-circle">F</a>
                        <a href="#" className="social-circle">I</a>
                        <a href="#" className="social-circle">L</a>
                        <a href="#" className="social-circle">W</a>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="contact-form-wrapper" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <h3 className="form-title">Request a Free Consultation</h3>
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name *" required />
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder="Phone Number *" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email Address *" required />
                        </div>
                        <div className="form-group">
                            <select required defaultValue="">
                                <option value="" disabled>Select Service *</option>
                                <option value="business-setup">Business Setup</option>
                                <option value="visa-services">Visa Services</option>
                                <option value="tourism">Tourism</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="4"></textarea>
                        </div>
                        <button type="submit" className="wp-link button global-button has-fill forward" style={{ borderColor: 'var(--color-dark-purple)', color: 'var(--color-dark-purple)', width: '100%', justifyContent: 'center' }}>
                            <span>SEND INQUIRY</span> <span>→</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;
