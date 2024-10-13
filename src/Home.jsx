import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./Home.css";
import Nexx from "./Nexx";
import CoursesPage from "./CoursesPage";
export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="landing-page">
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
                    <button
                        onClick={() => navigate("/Courseinside")}
                        className="btn btn-primary"
                    >
                        Job's
                    </button>
                </div>
            </header>

            <main>
                <section className="hero">
                    <div className="hero-content">
                        <h1>
                            Learning on the <span className="highlight">Go</span> with Study
                            Buddies
                        </h1>
                        <p>
                            This is our inetiative to Learn and find jobs on a singal stop.
                        </p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary">Learn More</button>
                            <button className="btn btn-outline">Find Internship</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img
                            src="/src\assets\4588-removebg-preview.png?height=300&width=400"
                            width="400"
                            height="300"
                            alt="Student learning online"
                        />
                    </div>
                </section>

                <section className="career-section">
                    <h2>Startup your career and take it to the next level</h2>
                    {/* <p>
          Unlock your full potential with cutting-edge learning opportunities tailored to the elite. Elevate your skills, embrace innovation, and transform your career trajectory with the finest resources at your fingertips. Your journey to unparalleled success starts here—where ambition meets excellence, and your future is crafted to perfection. Step into a world of limitless possibilities, and experience growth like never before.
           
          </p> */}

                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "1.2rem",
                            lineHeight: "1.8",
                            color: "#333",
                            textAlign: "justify",
                            marginTop: "20px",
                            fontWeight: "300",
                        }}
                    >
                        Unlock your full potential with
                        <span style={{ fontWeight: "600", color: "#ff6600" }}>
                            {" "}
                            cutting-edge learning opportunities{" "}
                        </span>
                        tailored to the elite. Elevate your skills, embrace innovation, and
                        transform your career trajectory with the
                        <span style={{ fontWeight: "600", color: "#0077b6" }}>
                            {" "}
                            finest resources{" "}
                        </span>
                        at your fingertips. Your journey to unparalleled success starts
                        here—where ambition meets excellence, and your future is crafted to
                        perfection. Step into a world of
                        <span style={{ fontWeight: "600", color: "#0077b6" }}>
                            {" "}
                            limitless possibilities{" "}
                        </span>
                        , and experience growth like never before.
                    </p>
                </section>

                <section className="courses-section">
                    <h3>Select your Course </h3>
                    <table className="courses-table">
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>College Name</th>
                                <th>Year</th>
                                <th>Course code</th>
                                <th>Start Learning</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    name: "Sem1",
                                    start: "Aug 20",
                                    rate: 5.8,
                                    level: "Intermediate",
                                    color: "#f472b6",
                                },
                                {
                                    name: "Sem2",
                                    start: "Oct 10",
                                    rate: 7.8,
                                    level: "Beginner",
                                    color: "#3b82f6",
                                },
                                {
                                    name: "Sem3",
                                    start: "Aug 20",
                                    rate: 5.8,
                                    level: "Intermediate",
                                    color: "#f97316",
                                },
                                {
                                    name: "Sem1",
                                    start: "Aug 20",
                                    rate: 5.8,
                                    level: "Intermediate",
                                    color: "#f472b6",
                                },
                                {
                                    name: "Sem2",
                                    start: "Oct 10",
                                    rate: 7.8,
                                    level: "Beginner",
                                    color: "#3b82f6",
                                },
                                {
                                    name: "Sem3",
                                    start: "Aug 20",
                                    rate: 5.8,
                                    level: "Intermediate",
                                    color: "#f97316",
                                },
                            ].map((course, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="course-name">
                                            <div
                                                className="course-icon"
                                                style={{ backgroundColor: course.color }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                                    <path d="M4 22h16"></path>
                                                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                                </svg>
                                            </div>
                                            <span>{course.name}</span>
                                        </div>
                                    </td>
                                    <td>{course.start}</td>
                                    <td>{course.rate}</td>
                                    <td>{course.level}</td>
                                    <td>
                                        <button
                                            onClick={() => navigate("/other")}
                                            className="btn btn-primary"
                                        >
                                            Click to open
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
}
