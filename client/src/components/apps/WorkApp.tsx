import React from 'react';

export default function WorkApp() {
  const experiences = [
    {
      company: 'Pixoda',
      role: 'UI/UX Designer & Automation Developer',
      period: 'Current Role',
      description: 'Working across UI/UX design, product development, backend automation, API integrations, CRM workflows, and web technologies.',
      responsibilities: [
        'Design responsive web and mobile interfaces.',
        'Create user flows, wireframes, high-fidelity interfaces, and reusable design systems.',
        'Work on the Creamstack product with a focus on backend automation and workflow infrastructure.',
        'Build automation workflows using n8n.',
        'Develop API and webhook integrations.',
        'Work with CRM systems, Google Workspace, Google Sheets, WhatsApp integrations, and Instantly.',
        'Handle data processing, mapping, validation, duplicate prevention, authentication, and workflow testing.',
        'Contribute to frontend and backend web development.',
        'Work with React, JavaScript, PHP, MySQL and related technologies.',
        'Support deployment and production workflows.'
      ]
    },
    {
      company: 'RAIBS Infotech',
      role: 'Web Application Developer',
      period: 'Past Role',
      description: 'Worked on end-to-end web application development, combining frontend interfaces, backend logic, databases, and deployment.',
      responsibilities: [
        'Developed web applications using HTML, CSS, JavaScript, PHP, Laravel, and MySQL.',
        'Built Laravel MVC modules and CRUD systems.',
        'Implemented authentication and form validation.',
        'Integrated databases and backend business logic.',
        'Worked on ERP, e-commerce, school, WhatsApp automation, and complaint-management solutions.',
        'Focused on responsive, maintainable, and user-focused applications.'
      ]
    },
    {
      company: 'VDart',
      role: 'UI/UX Design Intern',
      period: 'Past Role',
      description: 'Worked on real-world UI/UX workflows and developed practical experience in product interface design.',
      responsibilities: [
        'Created wireframes and mockups.',
        'Designed interactive prototypes using Figma.',
        'Applied UX principles and user-flow thinking.',
        'Worked with developers to support accurate design implementation.'
      ]
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto h-full overflow-y-auto custom-scrollbar">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white/90 uppercase tracking-tight">Work Experience</h1>
      
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-2 md:before:ml-[50%] before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-white/20 before:via-white/10 before:to-transparent">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
            
            {/* Timeline Dot */}
            <div className={`flex items-center justify-center w-5 h-5 rounded-full border-4 border-[#121212] ${exp.period === 'Current Role' ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-white/50'} shrink-0 absolute left-2 md:left-1/2 -translate-x-1/2 mt-6 md:mt-6`} />
            
            {/* Content Card */}
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="font-bold text-white/90 text-xl">{exp.role}</h3>
                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${exp.period === 'Current Role' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' : 'border-white/10 text-white/50 bg-white/5'}`}>
                  {exp.period}
                </span>
              </div>
              <div className="text-white/80 font-semibold mb-4 text-lg">{exp.company}</div>
              <p className="text-white/60 text-sm mb-6 leading-relaxed border-l-2 border-white/10 pl-4 italic">
                "{exp.description}"
              </p>
              
              <ul className="space-y-3">
                {exp.responsibilities.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0 mt-2" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
