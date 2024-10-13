import React from "react";
import "./Nexx.css";
import CertificatesPage from "./CertificatesPage";
import { useNavigate } from "react-router-dom";

const Nexx/*: React.FC*/ = () => {
    const navigate = useNavigate();

    const courses = [
        {
            name: "Sales & Marketing",
            start: "Aug 20",
            rate: 5.8,
            level: "Intermediate",
            color: "#f472b6",
        },
        {
            name: "IT & Networking",
            start: "Oct 10",
            rate: 7.8,
            level: "Beginner",
            color: "#3b82f6",
        },
        {
            name: "Digital Marketing",
            start: "Aug 20",
            rate: 5.8,
            level: "Intermediate",
            color: "#f97316",
        },
    ];

    return (
        <div className="dashboard">
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#">About us </a>
                        </li>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                    </ul>
                </nav>
                <div className="auth-buttons">
                    <button className="btn btn-secondry">DL's</button>
                    <button className="btn btn-primary">Job's</button>
                </div>
            </header>

            <main className="main-content">
                <section className="banner">
                    <div className="banner-content">
                        <h2>Want to begin your journey of learning?</h2>
                        <button className="start-course-button">Start a course</button>
                    </div>
                    <div className="banner-image">
                        <img
                            src="/src\assets\2021flat_116-removebg-preview.png?height=200&width=300"
                            width="200"
                            height="100"
                            alt="Learning illustration"
                        />
                    </div>
                </section>

                <section className="my-courses">
                    <h2>My Courses</h2>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Names</th>
                                    <th>Start</th>
                                    <th>Rate</th>
                                    <th>Level</th>
                                    <th>Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="course-name">
                                                <div
                                                    className="course-icon"
                                                    style={{ backgroundColor: course.color }}
                                                >
                                                    🏆
                                                </div>
                                                <span>{course.name}</span>
                                            </div>
                                        </td>
                                        <td>{course.start}</td>
                                        <td>{course.rate}</td>
                                        <td>{course.level}</td>
                                        <td>
                                            <button
                                                onClick={() => navigate("/Job")}
                                                className="btn btn-primary"
                                            >
                                                Open
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="footer-content">
                    <p>Are you facing any challenges? You can reach out to us.</p>
                    <button className="contact-button">Contact Us</button>
                </div>
                <div className="footer-image">
                    <img
                        src="/src\assets\11453335-removebg-preview.png?height=100&width=200"
                        height="100"
                        width="200"
                        alt="FAQ illustration"
                    />
                </div>
            </footer>
        </div>
    );
};

export default Nexx;
