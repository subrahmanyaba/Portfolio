// src/components/CertificationCard.js

import React from 'react';
import './CertificationCard.css';

const CertificationCard = ({ name, organization, issueDate, link }) => {
  return (
    <div className="certification-card">
      <h3>{name}</h3>
      <p><strong>Organization:</strong> {organization}</p>
      <p><strong>Issue Date:</strong> {issueDate}</p>
      <a
  href={link === '#' ? undefined : link}
  target={link === '#' ? undefined : "_blank"}
  rel={link === '#' ? undefined : "noopener noreferrer"}
  className={`certificate-button ${link === '#' ? 'disabled' : ''}`}
>
  View Certificate
</a>
    </div>
  );
};

export default CertificationCard;
