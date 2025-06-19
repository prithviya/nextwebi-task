// FAQ.js
import React, { useState, useEffect } from "react";
import "./FAQ.css";

const questions = [
    {
        id: 1,
        question: "How can your IT services boost productivity?",
        answer:
            "We automate routine tasks and streamline workflows so your team can focus on strategic goals.",
    },
    {
        id: 2,
        question: "Do you offer 24/7 IT support?",
        answer:
            "Yes, we provide round-the-clock IT assistance to ensure business continuity without disruptions.",
    },
    {
        id: 3,
        question: "What industries do you specialize in?",
        answer:
            "Our IT solutions serve multiple sectors including finance, healthcare, retail, and education.",
    },
    {
        id: 4,
        question: "Can I customize IT packages?",
        answer:
            "Absolutely. We tailor each solution based on your business size, industry, and goals.",
    },
];

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(questions);

    useEffect(() => {
        const results = questions.filter((item) =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <div className="faq-container">
            <h2 className="heading">How can we help you?</h2>
            <Searchbar onSearchChange={(e) => setSearchTerm(e.target.value)} />
            <section className="faq-list">
                {searchResults.map((item) => (
                    <Question key={item.id} question={item.question} answer={item.answer} />
                ))}
            </section>
        </div>
    );
};

const Searchbar = ({ onSearchChange }) => {
    return (
        <form className="faq-form" onSubmit={(e) => e.preventDefault()}>
            <svg viewBox="0 0 512 512" className="search-icon">
                <path d="M505 442.7L405.3 343c-4.5...z" />
            </svg>
            <input
                className="searchbar"
                type="text"
                placeholder="Search your question"
                onChange={onSearchChange}
            />
        </form>
    );
};

const Question = ({ question, answer }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="faq-item">
            <div className="question" onClick={() => setIsActive(!isActive)}>
                <h3>{question}</h3>
                <button>
                    <svg
                        className={isActive ? "active" : ""}
                        viewBox="0 0 320 512"
                        width="14"
                    >
                        <path d="M143 352.3L7 216.3c-9.4...z" />
                    </svg>
                </button>
            </div>
            <div className={isActive ? "answer active" : "answer"}>{answer}</div>
        </div>
    );
};

export default FAQ;
