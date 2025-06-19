import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pics from '../pics';
import './AboutSect.css'
function AboutSect() {
    return (
        <div id="about">
            <div className="sect-spacer">
                <Container>
                    <Row className="align-items-center">
                        <Col md={4}>
                            <img src={pics.ABOUT} alt="" className='w-100 img-fluids' />
                        </Col>
                        <Col md={8}>
                            <h2 className='fw-bold fs-1'>About Us</h2>
                            <p className='justify-text'>
                                We are a future-focused IT solutions provider, committed to delivering smart, scalable, and secure technology services for modern businesses. With a team of creative thinkers and skilled developers, we transform digital ideas into powerful products.
                            </p>
                            <p className='justify-text'>
                                Our mission is to drive innovation and simplify technology through agile development, cloud integration, and AI-powered solutions. Whether you're a startup or an enterprise, we help you thrive in the digital landscape with tailor-made IT strategies.
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
                                Explore More
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default AboutSect;
