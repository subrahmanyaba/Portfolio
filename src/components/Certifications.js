// src/pages/CertificationPage.js

import React, { useState, useEffect } from 'react';
import CertificationCard from '../components/CertificationCard';
import './Certification.css'; // Import the updated CSS file
import certificationsData from '../static/Certifications.json'; // Import your certifications JSON file

const CertificationPage = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    // Simulate fetching data from the JSON file
    setCertifications(certificationsData);
  }, []);

  return (
    <div className="certification-page">
      <h2>Certifications</h2>
      <div className="certification-grid">
      {certifications
  .sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate)) // Sort by issueDate in descending order
  .map((cert, index) => (
    <CertificationCard
      key={index}
      name={cert.name}
      organization={cert.organization}
      issueDate={cert.issueDate}
      link={cert.link}
    />
  ))}
      </div>
    </div>
  );
};

export default CertificationPage;
