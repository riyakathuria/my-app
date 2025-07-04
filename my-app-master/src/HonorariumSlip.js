import React from "react";

function HonorariumSlip() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/honorarium.pdf"; // Ensure this file exists in your public/ folder
    link.download = "DRDO-CEP-Honorarium-Slip.pdf"; // Name when downloaded
    link.click();
  };

  return (
    <div className="honorarium-page">
      <h1>Honorarium Slip Download</h1>
      <p>Click the button below to download the honorarium slip:</p>
      <button className="download-btn" onClick={handleDownload}>
        Download Honorarium Slip
      </button>
    </div>
  );
}

export default HonorariumSlip;
