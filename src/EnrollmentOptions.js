import React from "react";
import { Link, useParams } from "react-router-dom";

const EnrollmentOptions = ({ courses }) => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === parseInt(courseId));

  return (
    <div className="options-page">
      <div className="enrollment-header">
        <h2 className="course-title">{course?.title || "Course Title"}</h2>
      </div>
      
      <div className="options-container">
        <Link to="/statement" className="option-item">Statement Of Course</Link>
        <Link to="/feedback" className="option-item">Course Feedback</Link>
        <Link to="/noc" className="option-item">NOC For Photograph</Link>
        <Link to="/certificate" className="option-item">Completion Certificate</Link>
      </div>
    </div>
  );
};

export default EnrollmentOptions;
