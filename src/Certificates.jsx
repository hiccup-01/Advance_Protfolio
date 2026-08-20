import React from 'react';

const certificates = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    link: 'https://example.com/cert/1'
  },
  {
    id: 2,
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Coursera / Meta',
    date: '2023',
    link: 'https://example.com/cert/2'
  },
  {
    id: 3,
    title: 'Full Stack Web Development',
    issuer: 'freeCodeCamp',
    date: '2022',
    link: 'https://example.com/cert/3'
  }
];

function Certificates() {
  return (
    <section id="certificates" className="certificates-section">
      <h2>Certifications & Licenses</h2>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <h3>{cert.title}</h3>
            <p className="issuer"><strong>Issued by:</strong> {cert.issuer}</p>
            <p className="date"><strong>Issued:</strong> {cert.date}</p>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cert-link"
            >
              Verify Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
