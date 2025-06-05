import React from "react";

function Feedback() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/downloads/feedback-form.pdf";
    link.download = "feedback-form.pdf";
    link.click();
  };

  return (
    <div className="options-page">
      <h1>Feedback</h1>
      <p>Please provide your feedback below.</p>
      <button className="download-btn" onClick={handleDownload}>Download Now</button>
    </div>
  );
}

export default Feedback;
