import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "animate.css";
import Marquee from "react-fast-marquee";
import pics from "../pics";

const slides = [
    {
        title: "Transform Your Business with Scalable IT Solutions",
        description:
            "From cloud migration to secure infrastructure, we tailor IT strategies that grow with your goals.",
        image: require("../assets/Banner/cloud.png"),
    },
    {
        title: "End-to-End Software Development Services",
        description:
            "We build fast, reliable, and scalable web & mobile apps that power global brands and startups alike.",
        image: require("../assets/Banner/app.png"),
    },
    {
        title: "Cybersecurity That Never Sleeps",
        description:
            "Protect your digital assets with 24/7 monitoring, threat detection, and data compliance solutions.",
        image: require("../assets/Banner/security.png"),
    },
    {
        title: "Managed IT Support That Works Like Clockwork",
        description:
            "Focus on your business while we keep your systems running smoothly with proactive IT support.",
        image: require("../assets/Banner/managed.png"),
    },
    {
        title: "Boost Efficiency with AI & Automation",
        description:
            "Leverage AI-driven tools to streamline operations, reduce costs, and enhance productivity.",
        image: require("../assets/Banner/Chat bot.png"),
    },
];

const BannerSwiper = () => {
    const carouselRef = useRef();

    const items = slides.map((slide, index) => (
        <div id="home"
            key={index}
            className="d-flex align-items-center justify-content-center"
            style={{
                minHeight: "95vh",
                backgroundImage: `url(${require('../assets/banner.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: "#fff",
                padding: "3rem 1rem",
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-12 text-start">
                        <h1 className="mb-3 fw-bold">
                            {slide.title}
                        </h1>
                        <p className="mb-4">
                            {slide.description}
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
                    </div>
                    <div className="col-md-5 text-center animate__animated animate__fadeInDown animate__delay-1s">
                        <img
                            src={slide.image}
                            alt="Slide visual"
                            className="img-fluid"
                            style={{ maxHeight: "500px" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <div className="position-relative">
                <AliceCarousel
                    ref={carouselRef}
                    autoPlay
                    autoPlayInterval={1500}
                    infinite
                    items={items}
                    disableDotsControls
                    disableButtonsControls
                    animationType="fadeout"
                />
                <button
                    className="carousel-btn left"
                    onClick={() => carouselRef.current.slidePrev()}
                >
                    ❮
                </button>
                <button
                    className="carousel-btn right"
                    onClick={() => carouselRef.current.slideNext()}
                >
                    ❯
                </button>
            </div>
            <div className="p-lg-4 p-sm-2">
                <Marquee gradient={false} speed={50}>
                    <img className="client_logo" src={pics.C_GOOGLE} alt="logo1" />
                    <img className="client_logo" src={pics.C_AMAZON} alt="logo2" />
                    <img className="client_logo" src={pics.C_DELOITTE} alt="logo3" />
                    <img className="client_logo" src={pics.C_IBM} alt="logo4" />
                    <img className="client_logo" src={pics.C_SWIGGY} alt="logo4" />
                    <img className="client_logo" src={pics.C_UBER} alt="logo5" />
                    <img className="client_logo" src={pics.C_TCS} alt="logo5" />
                    <img className="client_logo" src={pics.C_NTTDATA} alt="logo5" />
                    <img className="client_logo" src={pics.C_ZOMATO} alt="logo5" />
                </Marquee>
            </div>
        </div>
    );
};

export default BannerSwiper;
