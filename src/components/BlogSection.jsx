import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";
import "./BlogSection.css"; // Optional for styling

const blogs = [
    {
        id: 1,
        image: blog1,
        category: "Tax Tips",
        title: "5 Tax Saving Strategies for Small Businesses in 2023",
        content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam oh",
    },
    {
        id: 2,
        image: blog2,
        category: "Business Registration",
        title: "Choosing the Right Business Structure: LLC vs. Corporation",
        content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam oh",
    },
    {
        id: 3,
        image: blog3,
        category: "Compliance Updates",
        title: "New GST Filing Requirements: What You Need to Know",
        content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam oh",
    },
];

const truncateText = (text, wordLimit = 12) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

const BlogSection = () => {
    return (
        <section className="sect-spacer py-5">
            <Container>
                <div className="text-center mb-4">
                    <p className="card-head mb-0 fs-1 fw-bold">From Our Blog</p>
                    <p className="text-muted">
                        Tips, updates & insights to help your business stay compliant and grow smarter.
                    </p>
                </div>

                <Row className="gy-4">
                    {blogs.map((blog) => (
                        <Col key={blog.id} lg={4} md={6} sm={12}>
                            <div className="blog-card">
                                <div className="blog-image-wrapper position-relative">
                                    <img src={blog.image} alt="Blog" className="w-100 h-100 rounded" />
                                    <Badge bg="secondary" className="position-absolute top-0 start-0 m-2">
                                        {blog.category}
                                    </Badge>
                                </div>
                                <div className="blog-content mt-2 p-4">
                                    <h5 className="fs-5 fw-bold">{blog.title}</h5>
                                    <p className="text-dark mb-2 small">{truncateText(blog.content)}</p>
                                    <a href="#" className="read-more text-primary">
                                        Read more &rarr;
                                    </a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-4">
                    <button className="button" style={{ "--clr": "#2a5298" }}>
                        <span className="button__icon-wrapper">
                            <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                            </svg>
                            <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                            </svg>
                        </span>
                        View Other Article
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default BlogSection;
