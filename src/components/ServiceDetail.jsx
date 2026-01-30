import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { serviceData } from '../data/serviceData';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);
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
    }, [service]);

    useEffect(() => {
        // Find service in main or additional arrays
        const mainService = serviceData.main.find(s => s.id === parseInt(id));
        const additionalService = serviceData.additional.find(s => s.id === parseInt(id));

        setService(mainService || additionalService);

        // Scroll to top on load
        window.scrollTo(0, 0);
    }, [id]);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    if (!service) return <div className="page" style={{ paddingTop: '150px', textAlign: 'center' }}>Loading...</div>;

    return (
        <section className={`page-service-detail page ${isVisible ? 'has-entered' : ''}`} ref={sectionRef}>
            <div className="detail-header" style={{ backgroundImage: `url(${service.image})` }}>
                <div className="detail-overlay"></div>
                <div className="detail-header-content">
                    <span className="detail-label">{service.label}</span>
                    <h1 className="detail-title">{service.title}</h1>
                </div>
            </div>

            <div className="detail-content-container">
                <div className="detail-left-col">
                    {service.details ? (
                        <div className="content-wrapper">
                            <h2>{service.details.title}</h2>
                            <p className="subtitle">{service.details.subtitle}</p>

                            {service.details.sections.map((section, index) => (
                                <div key={index} className="detail-section">
                                    <h3>{section.heading}</h3>
                                    {Array.isArray(section.content) ? (
                                        <ul>
                                            {section.content.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    ) : (
                                        <p style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
                                    )}

                                    {section.subsections && section.subsections.map((sub, i) => (
                                        <div key={i} className="subsection">
                                            <strong>{sub.title}</strong>
                                            <p>{sub.text}</p>
                                        </div>
                                    ))}

                                    {section.list && (
                                        <ul>
                                            {section.list.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="content-wrapper">
                            <h2>{service.title}</h2>
                            <p>{service.desc}</p>
                            <p>Detailed content for this service is coming soon.</p>
                        </div>
                    )}

                    {/* FAQs */}
                    {service.details && service.details.faq && (
                        <div className="faq-section">
                            <h2>Frequently Asked Questions</h2>
                            <div className="faq-list">
                                {service.details.faq.map((item, index) => (
                                    <div key={index} className="faq-item">
                                        <button className="faq-question" onClick={() => toggleFaq(index)}>
                                            {item.question}
                                            <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                                        </button>
                                        <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="detail-right-col">
                    {/* Right column empty or removed if strictly bottom. Leaving empty for now or removing if unused? 
                        User said "positioned in the last of the section". 
                        I will move the content out and let right col be empty or removed. 
                    */}
                </div>
            </div>

            <div className="detail-cta-container">
                <div className="cta-card">
                    {service.details && service.details.cta ? (
                        <>
                            <h2 dangerouslySetInnerHTML={{ __html: service.details.cta.title }}></h2>
                            <p>{service.details.cta.message}</p>
                            <Link to="/contact" className="cta-button">{service.details.cta.buttonText}</Link>
                        </>
                    ) : (
                        <>
                            <h2>Ready to Secure Your<br />UAE Golden Visa?</h2>
                            <p>Don't navigate the complex regulations alone. Our experts are here to handle the entire process for you.</p>
                            <Link to="/contact" className="cta-button" data-discover="true">CONTACT US NOW</Link>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;
