import React from "react";
import "./CertificatesPage.css";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

const CertificatesPage/*: React.FC*/ = () => {
    const navigate = useNavigate();

    const certificates = [
        {
            name: "Sales & Marketing",
            start: "Aug 20",
            end: "Aug 20",
            rate: 5.8,
            level: "Intermediate",
            color: "#f472b6",
        },
        {
            name: "IT & Networking",
            start: "Oct 10",
            end: "Oct 10",
            rate: 7.8,
            level: "Beginner",
            color: "#3b82f6",
        },
        {
            name: "Digital Marketing",
            start: "Aug 20",
            end: "Aug 20",
            rate: 5.8,
            level: "Intermediate",
            color: "#f97316",
        },
        {
            name: "Sales & Marketing",
            start: "Aug 20",
            end: "Aug 20",
            rate: 5.8,
            level: "Intermediate",
            color: "#f472b6",
        },
        {
            name: "IT & Networking",
            start: "Oct 10",
            end: "Oct 10",
            rate: 7.8,
            level: "Beginner",
            color: "#3b82f6",
        },
        {
            name: "Digital Marketing",
            start: "Aug 20",
            end: "Aug 20",
            rate: 5.8,
            level: "Intermediate",
            color: "#f97316",
        },
        {
            name: "Sales & Marketing",
            start: "Aug 20",
            end: "Aug 20",
            rate: 5.8,
            level: "Intermediate",
            color: "#f472b6",
        },
        {
            name: "IT & Networking",
            start: "Oct 10",
            end: "Oct 10",
            rate: 7.8,
            level: "Beginner",
            color: "#3b82f6",
        },
    ];

    return (
        <div className="certificates-page">
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About us </a>
                        </li>
                        <li>
                            <a href="/">Contact us</a>
                        </li>
                    </ul>
                </nav>
                <div className="auth-buttons">
                    <button className="btn btn-secondry">DL's</button>
                    <button className="btn btn-primary">Job's</button>
                </div>
            </header>

            <main className="main-content">
                <h1>Certificates</h1>
                <div className="table-container">
                    <table className="certificates-table">
                        <thead>
                            <tr>
                                <th>Course Names</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Rate</th>
                                <th>Level</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certificates.map((cert, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="course-name">
                                            <div
                                                className="course-icon"
                                                style={{ backgroundColor: cert.color }}
                                            >
                                                🏆
                                            </div>
                                            <span>{cert.name}</span>
                                        </div>
                                    </td>
                                    <td>{cert.start}</td>
                                    <td>{cert.end}</td>
                                    <td>{cert.rate}</td>
                                    <td>{cert.level}</td>
                                    <td>
                                        <a href="#" className="download-link">
                                            Download
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="pagination">
                    <button className="prev-page">←</button>
                    {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                        <button key={page} className={page === 1 ? "active" : ""}>
                            {page}
                        </button>
                    ))}
                    <button className="next-page">→</button>
                </div>
            </main>
            <footer className="footer">
                <div className="footer-content">
                    <p>Are you facing any challenges? You can reach out to us.</p>
                    <button className="contact-button">Contact Us</button>
                </div>
                <div className="footer-image">
                    <img
                        src="/11453335-removebg-preview.png?height=100&width=200"
                        height="100"
                        width="200"
                        alt="FAQ illustration"
                    />
                </div>
            </footer>
        </div>
    );
};

export default CertificatesPage;
