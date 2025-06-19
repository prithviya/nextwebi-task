import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialSect.css";
import { DiVim } from "react-icons/di";

const testimonials = [
    {
        name: "Jane Smith",
        role: "CEO, XYZ Ltd",
        img: require("../assets/testimonial/test-1.png"),
        review: "The level of technical precision and proactive monitoring Company provides is unmatched"
    },
    {
        name: "John Doe",
        role: "Founder, ABC Inc",
        img: require("../assets/testimonial/test-1.png"),
        review: "Their solutions not only resolved our legacy issues monitoring Our Company provides it",
    },
    {
        name: "Alex Johnson",
        role: "CTO, DEF Tech",
        img: require("../assets/testimonial/test-1.png"),
        review: "Exceptional service and support throughout the entire setup process. Highly recommend!",
    },
    {
        name: "Alex Johnson",
        role: "CTO, DEF Tech",
        img: require("../assets/testimonial/test-1.png"),
        review: "Exceptional service and support throughout the entire setup process. Highly recommend!",
    },
    {
        name: "Alex Johnson",
        role: "CTO, DEF Tech",
        img: require("../assets/testimonial/test-1.png"),
        review: "Exceptional service and support throughout the entire setup process. Highly recommend!",
    },
];

const truncateText = (text, wordLimit = 12) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
};

const Testimonials = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div id="testimonial">
            <section className="sect-spacer bg-lightblue py-5">
                <div className="container-fluid">
                    <div className="text-center mb-4">
                        <h2 className="card-head fs-1 fw-bold">What Our Clients Say</h2>
                        <p>Here’s what our customers are saying about working with Company.</p>
                    </div>

                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 30 },
                            1024: { slidesPerView: 3.5, spaceBetween: 30 },
                        }}
                        className="mySwiper1"
                    >
                        {testimonials.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="testimonial-card">
                                    <div className="testimonial-profile mb-2 d-flex align-items-center gap-3">
                                        <img src={item.img} alt="User" className="img-fluid rounded-circle w-25 h-25" />
                                        <div>
                                            <h6 className="mb-0">{item.name}</h6>
                                            <small>{item.role}</small>
                                        </div>
                                    </div>
                                    <p className="testimonial-text">
                                        {expandedIndex === idx ? item.review : truncateText(item.review)}
                                        {item.review.split(" ").length > 12 && (
                                            <button className="toggle-btn ms-2" onClick={() => handleToggle(idx)}>
                                                {expandedIndex === idx ? "Show Less" : "Show More"}
                                            </button>
                                        )}
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <img
                                            width="30"
                                            height="30"
                                            src="https://img.icons8.com/fluency/30/google-logo.png"
                                            alt="google-logo"
                                        />
                                        <div className="text-warning">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className="bi bi-star-fill"></i>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="text-center mt-5">
                        <button className="button" style={{ "--clr": "#2a5298" }}>
                            <span className="button__icon-wrapper">
                                <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
                                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                                </svg>
                                <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                                </svg>
                            </span>
                            View More Reviews
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
