import React from 'react';

export default function ServicesApp() {
  const services = [
    {
      id: '01',
      title: 'UI/UX DESIGN',
      description: 'Designing modern, intuitive and responsive interfaces for websites, applications, dashboards and digital products.'
    },
    {
      id: '02',
      title: 'WEB DEVELOPMENT',
      description: 'Building responsive, scalable web applications with modern frontend and backend technologies.'
    },
    {
      id: '03',
      title: 'AUTOMATION',
      description: 'Designing automated workflows that eliminate repetitive tasks and connect business tools.'
    },
    {
      id: '04',
      title: 'API & INTEGRATION',
      description: 'Connecting applications, CRMs, APIs, webhooks, communication platforms and business systems.'
    },
    {
      id: '05',
      title: 'PRODUCT DESIGN',
      description: 'Transforming ideas into structured digital products from user flows and wireframes to polished interfaces.'
    },
    {
      id: '06',
      title: 'AI-ASSISTED DEVELOPMENT',
      description: 'Using modern AI-assisted development workflows to prototype, build, debug and iterate products faster.'
    }
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto h-full overflow-y-auto custom-scrollbar">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white/90 uppercase tracking-tight">Services</h1>
        <p className="text-lg text-white/50 font-light max-w-2xl">
          End-to-end digital solutions from concept and design to development and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-light text-white/20 group-hover:text-emerald-500/50 transition-colors">
                {service.id}
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <h3 className="text-xl font-bold text-white/90 mb-4 uppercase tracking-wider">{service.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
