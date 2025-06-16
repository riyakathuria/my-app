import React from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import EnrollmentOptions from "./EnrollmentOptions";
import Statement from "./statement";
import Feedback from "./Feedback";
import NOC from "./NOC";
import Certificate from "./Certificate";

const courses = [

  {
    id: 2,
    title: "Readout Electronics for Solid-State Image Sensors",
    director: "Dr. R.S. Saxena",
    deputy: "Mrs. Nilima Singh",
  },
  {
    id: 3,
    title: "Advanced Piezoelectric Material and Devices",
    director: "Sh. Manish Kumar Sinha",
    deputy: "Chirag Sharma",
  },
  {
    id: 4,
    title: "Current & Futuristic MEMS Technologies for Defence Applications",
    director: "Mr. Milap Singh",
    deputy: "Mr. Amit Kumar Vishwakarma",
  },
  {
    id: 5,
    title: "Acoustic Emission Technology: Its Application for Defence and Industries",
    director: "Sushil Kumar Singh",
    deputy: "Mr. Amit Kumar",
  },
];

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-title">DRDO | CEP Courses</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll/:courseId" element={<EnrollmentOptions courses={courses} />} />
        <Route path="/statement" element={<Statement />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/noc" element={<NOC />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="hero">
        <h1>Continuing Education Programme</h1>
        <p>CEP Courses by DRDO</p>
      </header>
      <section className="course-list">
        <h2>Available Courses</h2>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </div>
  );
}

function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate(`/enroll/${course.id}`);
  };

  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p><strong>Director:</strong> {course.director}</p>
      {course.deputy && <p><strong>Deputy Director:</strong> {course.deputy}</p>}
      <button onClick={handleEnrollClick}>Enroll Now</button>
    </div>
  );
}

export default App;
