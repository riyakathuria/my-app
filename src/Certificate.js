import React from "react";

function Certificate() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/downloads/certificate-template.pdf";
    link.download = "certificate-template.pdf";
    link.click();
  };

  return (
    <div className="options-page">
      <h1>Certificate</h1>
      <p>Download your course completion certificate.</p>
      <button className="download-btn" onClick={handleDownload}>Download Now</button>
    </div>
  );
}

export default Certificate;
