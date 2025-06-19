import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { BsTelephoneFill, BsWhatsapp, BsEnvelope } from 'react-icons/bs';
import BannerSwiper from '../components/BannerSwiper';
import AboutSect from '../components/AboutSect';
import ServiceSect from '../components/ServiceSect';
import WhyChooseITSect from '../components/WhyChooseITSect';
import EndtoEndSect from '../components/EndtoEndSect';
import CertificationsSect from '../components/CertificationsSect';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import BlogSect from '../components/BlogSection'

function HomePage() {
    return (
        <div>
            <BannerSwiper />
            <AboutSect />
            <ServiceSect />
            <WhyChooseITSect />
            <EndtoEndSect />
            <CertificationsSect />
            <FAQ />
            <Testimonials />
            <BlogSect />
        </div>
    )
}

export default HomePage