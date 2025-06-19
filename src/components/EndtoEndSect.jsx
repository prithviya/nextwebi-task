import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import './EndtoEndSect.css'; // Optional for custom styling

const leftCards = [
    {
        title: "100% Compliance Guarantee",
        desc: "We ensure your business meets all regulatory requirements or we fix it for free.",
        img: require('../assets/about-us.png'),
    },
    {
        title: "Dedicated Account Manager",
        desc: "A single point of contact to guide and support your business throughout the process.",
        img: require('../assets/about-us.png'),
    },
    {
        title: "Integrated Service Approach",
        desc: "End-to-end solutions from setup, compliance to ongoing support and updates.",
        img: require('../assets/about-us.png'),
    }
];

const EndtoEndSect = () => {
    return (
        <div className="sect-spacer">
            <Container className="pt-5">
                <Row className='align-items-start'>

                    {/* Left Column */}
                    <Col xs={12} lg={5} className="mb-4">
                        <div className="card-head fade-up fs-1 fw-bold">
                            End to End Business<br /> Support
                        </div>

                        {leftCards.map((card, idx) => (
                            <div className="d-flex flex-column flex-md-row align-items-start gap-3 mt-4" key={idx}>
                                <div className="flex-shrink-0">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="img-fluid fade-up"
                                        style={{ maxWidth: '80px' }}
                                    />
                                </div>
                                <div>
                                    <p className="fw-bold fs-5 mb-1 fade-up">{card.title}</p>
                                    <p className="mb-0 fade-up">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </Col>

                    {/* Middle Image */}
                    <Col xs={12} md={6} lg={3} className="mb-4">
                        <img
                            src={require('../assets/Company.jpg')}
                            alt="Middle Visual"
                            className="img-fluid rounded-4"
                        />
                    </Col>

                    {/* Right Column */}
                    <Col xs={12} md={6} lg={4}>
                        <img
                            src={require('../assets/comp1.jpeg')}
                            alt="Right Visual"
                            className="img-fluid rounded-4 mb-3 fade-up"
                        />
                        <p className="pt-3 fade-up">
                            From ideation to ongoing compliance,
                            we provide comprehensive support
                            throughout your business journey.
                        </p>
                        <button href="#" class="button" style={{ "--clr": "#2a5298" }}>
                            <span class="button__icon-wrapper">
                                <svg
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="button__icon-svg"
                                    width="10"
                                >
                                    <path
                                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                        fill="currentColor"
                                    ></path>
                                </svg>

                                <svg
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    width="10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="button__icon-svg button__icon-svg--copy"
                                >
                                    <path
                                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </span>
                            Explore Our Service
                        </button>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default EndtoEndSect;
