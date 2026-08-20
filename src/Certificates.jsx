import React from 'react';

export default function Certificates() {
  const internships = [
    {
      title: "Industrial Intern",
      organization: "Industrial Training Program",
      timeline: "Diploma 5th Semester",
      description: "Gained practical experience working on real-world industrial systems, technical project workflows, and team engineering tasks.",
      certPath: "./certificates/internship-cert.pdf"
    }
  ];

  const workshops = [
    {
      title: "Technical Workshop",
      organization: "Engineering Workshop",
      timeline: "Diploma Level",
      description: "Participated in hands-on technical sessions, learning core concepts and practical implementations.",
      certPath: "./certificates/workshop-cert.pdf"
    }
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto px-6">
      {/* Industrial Internships Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-3">
          Industrial Internships
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {internships.map((item, index) => (
            <div key={index} className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-blue-400 font-medium mt-1">
                  {item.organization} • {item.timeline}
                </p>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <a 
                href={item.certPath} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 mt-5 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors w-fit"
              >
                <span>View Internship Certificate 📜</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Workshops Section */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-3">
          Workshops & Training
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {workshops.map((item, index) => (
            <div key={index} className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-zinc-400 font-medium mt-1">
                  {item.organization} • {item.timeline}
                </p>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <a 
                href={item.certPath} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 mt-5 text-xs font-medium text-white bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors w-fit"
              >
                <span>View Workshop Certificate 📜</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
