import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Row, Col, Container } from 'react-bootstrap';
import "swiper/css";
import "swiper/css/navigation";
import "./WhyChooseITSect.css";

const services = [
    {
        id: 1,
        title: "Expert Team",
        desc: "Our certified IT professionals ensure successful delivery using industry best practices.",
        img: require("../assets/why/expert-team.png"),
    },
    {
        id: 2,
        title: "24/7 Support",
        desc: "We’re always available to resolve your IT issues, anytime and anywhere.",
        img: require("../assets/why/support.png"),
    },
    {
        id: 3,
        title: "Scalable Solutions",
        desc: "Easily scale your IT systems as your business grows with minimal effort.",
        img: require("../assets/why/scalable.png"),
    },
    {
        id: 4,
        title: "Proven Security",
        desc: "Enterprise-grade security protocols ensure your infrastructure is safe from threats.",
        img: require("../assets/why/security.png"),
    },
    {
        id: 5,
        title: "Custom Approach",
        desc: "Tailored IT solutions crafted to meet your unique business needs.",
        img: require("../assets/why/custom.png"),
    },
];

const WhyChooseITSect = () => {
    return (
        <section className="bg-lightblue sect-spacer">
            <Container fluid>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Why Choose Our IT Services?</h2>
                    <p className="text-muted">Smart, secure, and scalable digital solutions</p>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    loop
                    // centeredSlides={true}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3.5, spaceBetween: 30 },
                    }}
                    className="why-swiper"
                >
                    {services.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="px-2 py-4 h-100 d-flex flex-row align-items-center gap-3 shadow-sm service-slide">
                                <div className="text-center">
                                    <img src={item.img} alt={item.title} className="img-fluid w-50 h-50" />
                                    <h5 className="fw-bold mb-1">{item.title}</h5>
                                    <p className="text-black small mb-0">{item.desc}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
            <Container>
                <div>
                    <Row className="justify-content-center align-items-center mt-5">
                        <Col md={9} lg={7} sm={12}>
                            <div className="limited py-4 px-5 rounded-5 bg-limited text-white">
                                <Row className="align-items-center">
                                    <Col md={8}>
                                        <p className="fs-4 fw-bold fade-up mb-0">
                                            Limited Time Offer: 20% Off IT Consulting!
                                        </p>
                                        <p className="lh-sm fade-up mb-0">
                                            Schedule a free consultation today and unlock 20% savings on your first tech service engagement.
                                        </p>
                                    </Col>
                                    <Col md={4}>
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
                                            Claim Now
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default WhyChooseITSect;
