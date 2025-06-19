import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const certifications = [
    require('../assets/cert/cert1.png'),
    require('../assets/cert/cert2.png'),
    require('../assets/cert/cert3.png'),
    require('../assets/cert/cert4.png'),

];

const metrics = [
    { count: "1000+", label: "Businesses Registered" },
    { count: "500+", label: "Satisfied Clients" },
    { count: "750+", label: "Projects Completed" },
    { count: "20+", label: "Certifications & Awards" },
];

const CertificationsSect = () => {
    return (
        <div className="sect-spacer certified">
            <Container className="py-2">
                <Row className="justify-content-center align-items-center">
                    {/* Left Column */}
                    <Col md={6}>
                        <p className="fs-1 fw-bold">
                            Our Certifications &<br /> Partnerships
                        </p>
                        <Row>
                            {certifications.map((img, idx) => (
                                <Col key={idx} lg={3} md={3} xs={3}>
                                    <img src={img} alt="certification" className="w-75 h-100 fade-up" />
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    {/* Right Column */}
                    <Col md={6}>
                        <Row>
                            {metrics.map((item, idx) => (
                                <Col
                                    key={idx}
                                    lg={6}
                                    md={6}
                                    xs={6}
                                    className={`text-center p-3 fade-up ${idx < 2 ? 'border-bottom' : ''
                                        } ${idx % 2 === 0 ? 'border-end' : ''}`}
                                >
                                    <p className="fw-bold fs-1 mb-0">{item.count}</p>
                                    <p className="fw-bold fs-5">{item.label}</p>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CertificationsSect;
