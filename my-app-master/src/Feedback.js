import React from "react";

function Feedback() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/feedback.pdf"; // Ensure this file is placed in the public folder
    link.download = "DRDO-CEP-feedback-form.pdf"; // Name of file when saved
    link.click();
  };

  return (
    <div className="feedback-form">
      <h1>Feedback-form Download</h1>
      <p>Click the button below to download the feedback form:</p>
      <button className="download-btn" onClick={handleDownload}>
        Download Feedback-form
      </button>
    </div>
  );
}

export default Feedback;
