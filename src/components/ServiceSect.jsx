import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const serviceItems = [
    {
        title: "Cloud Infrastructure & Migration",
        desc: "Seamlessly move to the cloud with our expert-led migration strategies, ensuring security, scalability, and zero downtime.",
        points: ["AWS / Azure / GCP", "Cloud Architecture", "Disaster Recovery"],
        img: require("../assets/cloud-service.png"),
    },
    {
        title: "Custom Software Development",
        desc: "We design and develop powerful web and mobile applications tailored to your business goals and user needs.",
        points: ["Full-Stack Apps", "API Integration", "Cross-Platform", "Mobile Apps"],
        img: require("../assets/software-dev.png"),
    },
    {
        title: "Cybersecurity & Compliance",
        desc: "Protect your data and digital assets with our advanced security protocols, audits, and real-time monitoring systems.",
        points: ["Network Security", "VAPT", "ISO Compliance"],
        img: require("../assets/cybersecurity.png"),
    },
    {
        title: "AI & Business Automation",
        desc: "Leverage intelligent systems to automate routine operations, enhance insights, and drive faster decision-making.",
        points: ["Chatbots", "Process Automation", "AI Analytics"],
        img: require("../assets/ai-automation.png"),
    },
];

function ServicesSect() {
    return (
        <div className="py-5 sect-spacer" id="services">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6} sm={12} lg={4} className="mt-5 mt-md-0">
                        <h3 className="fw-bold mb-3 fs-1">
                            What Do You<br />Need Help With?
                        </h3>
                        <p className="text-dark mb-4">
                            Select the service you're looking for and we'll guide you through the process.
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
                            Get Free Consultation
                        </button>
                        <div className="mt-4 mb-5">
                            <img
                                src={require('../assets/need-help.png')}
                                alt="Need Help"
                                width="100%"
                            />
                        </div>
                    </Col>
                    <Col md={12} sm={12} lg={8}>
                        <Row className="g-4">
                            {serviceItems.map((item, i) => (
                                <Col key={i} xs={12} md={6}>
                                    <div className="bg-service-card rounded-4 px-5 py-5 mb-4 shadow">
                                        <img src={item.img} alt="Service" className="img-fluid mb-3 w-25 h-25 rounded-circle" />
                                        <h5 className="fw-bold text-dark">{item.title}</h5>
                                        <p className="text-dark">{item.desc}</p>
                                        <ul className="list-inline">
                                            {item.points.map((point, index) => (
                                                <React.Fragment key={index}>
                                                    <li className="list-inline-item text-secondary">{point}</li>
                                                    {index !== item.points.length - 1 && (
                                                        <li className="list-inline-item">
                                                            <img
                                                                src={require('../assets/blue-cicle.png')}
                                                                alt="dot"
                                                            />
                                                        </li>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </ul>
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
                                            Get Started
                                        </button>

                                    </div>
                                </Col>
                            ))}
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ServicesSect;
