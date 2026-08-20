import React, { useState } from 'react';

const certificates = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    link: '/certificates/internship-cert.pdf'
  },
  {
    id: 2,
    title: 'Workshop Certificate',
    issuer: 'Tech Workshop',
    date: '2023',
    link: '/certificates/workshop-cert.pdf'
  }
];

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="certificates-section py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certificates.map((cert) => (
          <div key={cert.id} className="border p-6 rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-gray-600 mb-1"><strong>Issuer:</strong> {cert.issuer}</p>
            <p className="text-gray-500 mb-4"><strong>Date:</strong> {cert.date}</p>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Certificate PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
