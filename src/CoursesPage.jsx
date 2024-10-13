import React from "react";
import "./CoursesPage.css";

const CoursesPage/*: React.FC*/ = () => {
    const ongoingCourses = [
        {
            name: "Sales & Marketing",
            lessons: 5,
            description:
                "Get certified free of charge in our Marketing course, or explore other content to help get your business online.",
        },
        {
            name: "Sales & Marketing",
            lessons: 5,
            description:
                "Get certified free of charge in our Marketing course, or explore other content to help get your business online.",
        },
        {
            name: "Sales & Marketing",
            lessons: 5,
            description:
                "Get certified free of charge in our Marketing course, or explore other content to help get your business online.",
        },
        {
            name: "Sales & Marketing",
            lessons: 5,
            description:
                "Get certified free of charge in our Marketing course, or explore other content to help get your business online.",
        },
    ];

    const availableCourses = [
        {
            name: "Sales & Marketing",
            lessons: 5,
            description:
                "Get certified free of charge in our Marketing course, or explore other content to help get your business online.",
        },
        {
            name: "Sales & Marketing",
            lessons: 5,
            description:
                "Get certified free of charge in our Marketing course, or explore other content to help get your business online.",
        },
        {
            name: "Information Technology",
            lessons: 5,
            description:
                "Get certified in our Information Technology course, or explore other content to help get your business online.",
        },
        {
            name: "Sales & Marketing",
            lessons: 5,
            description:
                "Get certified free of charge in our Marketing course, or explore other content to help get your business online.",
        },
        {
            name: "Sales & Marketing",
            lessons: 5,
            description:
                "Get certified free of charge in our Marketing course, or explore other content to help get your business online.",
        },
        {
            name: "Sales & Marketing",
            lessons: 5,
            description:
                "Get certified free of charge in our Marketing course, or explore other content to help get your business online.",
        },
        {
            name: "Information Technology",
            lessons: 5,
            description:
                "Get certified in our Information Technology course, or explore other content to help get your business online.",
        },
        {
            name: "Sales & Marketing",
            lessons: 5,
            description:
                "Get certified free of charge in our Marketing course, or explore other content to help get your business online.",
        },
    ];

    const CourseCard = ({ course, isIT = false }) => (
        <div className={`course-card ${isIT ? "it-course" : ""}`}>
            <div className="course-icon">👤</div>
            <div className="course-info">
                <div className="course-lessons">{course.lessons}/20 lessons</div>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
            </div>
            <div className="course-arrow">→</div>
        </div>
    );

    return (
        <div className="courses-page">
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
                </div>
            </header>
            <section className="ongoing-courses">
                <h2>Job's</h2>
                <div className="course-list">
                    {ongoingCourses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </div>
            </section>

            <section className="available-courses">
                <h2>Internship'a</h2>
                <div className="course-grid">
                    {availableCourses.map((course, index) => (
                        <CourseCard
                            key={index}
                            course={course}
                            isIT={course.name === "Information Technology"}
                        />
                    ))}
                </div>
            </section>

            <div className="pagination">
                <button className="prev-page">←</button>
                {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                    <button key={page} className={page === 1 ? "active" : ""}>
                        {page}
                    </button>
                ))}
                <button className="next-page">→</button>
            </div>
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

export default CoursesPage;
