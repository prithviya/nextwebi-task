import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import googleRating from "./assets/google-rating.png";
import brandlogo from "./assets/logo-white.png";

const Footer = () => {
    return (
        <footer className="footer-section text-white">
            <div className="footer-overlay py-5">
                <Container>
                    <Row className="gy-4 gx-4">
                        {/* Company Info */}
                        <Col xs={12} md={6} lg={3}>
                            <img src={brandlogo} alt="Logo" className="img-fluid mb-3" />
                            <p className="mb-0">
                                We help you build scalable, compliant and smart business solutions powered by the latest technology.
                            </p>
                        </Col>

                        {/* Quick Links */}
                        <Col xs={6} md={6} lg={2}>
                            <h5 className="fw-bold">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="footer-link">Home</a></li>
                                <li><a href="#" className="footer-link">Services</a></li>
                                <li><a href="#" className="footer-link">About</a></li>
                                <li><a href="#" className="footer-link">Contact</a></li>
                            </ul>
                        </Col>

                        {/* Services */}
                        <Col xs={6} md={6} lg={2}>
                            <h5 className="fw-bold">Services</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="footer-link">Services1</a></li>
                                <li><a href="#" className="footer-link">Services2</a></li>
                                <li><a href="#" className="footer-link">Services3</a></li>
                                <li><a href="#" className="footer-link">Services4</a></li>
                            </ul>
                        </Col>

                        {/* Address */}
                        <Col xs={12} md={6} lg={3}>
                            <h5 className="fw-bold">Address</h5>
                            <p className="mb-1">Whitefield, Bengaluru, Karnataka</p>
                            <p className="mb-1">📞 +91 76196 35111</p>
                            <p className="mb-0">✉️ <a href="mailto:info@nxtwebi.com" className="footer-link">info@nxtwebi.com</a></p>
                        </Col>

                        {/* Google Rating */}
                        <Col xs={12} md={6} lg={2} className="d-flex align-items-start justify-content-lg-end">
                            <img
                                src={googleRating}
                                alt="Google Rating"
                                className="img-fluid rounded shadow"
                                style={{ maxWidth: "150px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
