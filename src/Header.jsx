import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import brandlogo from "./assets/logo-white.png";
function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 110);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const socialLinks = [
        {
            href: "https://facebook.com",
            bgColor: "#3c5a96",
            img: "https://www.dropbox.com/s/xk5pdj8nks1ymdh/facebook-icon.png?raw=1",
            alt: "Facebook"
        },
        {
            href: "https://twitter.com",
            bgColor: "#1dadeb",
            img: "https://www.dropbox.com/s/c8in3qcf1uqsqrb/twitter-icon.png?raw=1",
            alt: "Twitter"
        },
        {
            href: "https://linkedin.com",
            bgColor: "#1178b3",
            img: "https://www.dropbox.com/s/pb0a0p7p1pwprue/linkedin-icon.png?raw=1",
            alt: "LinkedIn"
        }
    ];

    return (
        <>
            <Navbar
                expand="lg"
                className={`navbar-dark transition-navbar ${scrolled ? "scrolled-navbar" : ""}`}
                style={{
                    height: scrolled ? "60px" : "70px",
                    transition: "all 0.3s ease",
                    position: "fixed",
                    width: "100%",
                    zIndex: 1030,
                    background: scrolled
                        ? "linear-gradient(353deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 50%, rgba(12, 12, 87, 1) 100%)"
                        : "transparent",
                    boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.2)" : "none"
                }}
            >
                <Container >
                    <Navbar.Brand href="#" className="d-flex align-items-center text-white">
                        {/* <img
                            src={brandlogo}
                            alt="Logo"
                            className="me-2 img-fluid brand"
                        /> */}
                        <h3>LOGO</h3>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" />

                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        placement="end"
                        aria-labelledby="offcanvasNavbarLabel"
                        className="bg-dark text-white"
                    >
                        <Offcanvas.Header closeButton closeVariant="white">
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <img
                                    src={brandlogo}
                                    alt="Logo"
                                    className="me-2 img-fluid brand w-100 h-100"
                                />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="ms-auto gap-3">
                                <Link to="home" smooth={true} duration={500} className="nav-link text-white">Home</Link>
                                <Link to="about" smooth={true} duration={500} className="nav-link text-white">About</Link>
                                <Link to="services" smooth={true} duration={500} className="nav-link text-white">Services</Link>
                                <Link to="testimonial" smooth={true} duration={500} className="nav-link text-white">Testimonial</Link>
                                <Link to="blog" smooth={true} duration={500} className="nav-link text-white">Blog</Link>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div>
                <ul id="social_side_links">
                    {socialLinks.map((link, idx) => (
                        <li key={idx}>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ backgroundColor: link.bgColor }}
                            >
                                <img src={link.img} alt={link.alt} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Header;
