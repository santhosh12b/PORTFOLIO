import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectsApp() {
  const projects = [
    {
      title: 'MANIMA MAYAPUR',
      category: 'Website Design • Web Development • Booking System',
      description: 'Designed and developed the Manima Mayapur website and booking system, creating the complete customer-facing experience and structured booking workflow.',
      link: 'https://manimamayapur.com/',
      image: 'https://images.unsplash.com/photo-1542314831-c6a4d14cdce8?q=80&w=800&auto=format&fit=crop', // Hotel/booking placeholder
      tags: ['UI/UX', 'Web Development', 'Booking System', 'Responsive Design']
    },
    {
      title: 'CREAMSTACK',
      category: 'Product Development • Backend Automation • AI / Prospecting',
      description: 'Contributed to the development of Creamstack at Pixoda, working primarily on backend automation, workflow integration, data processing, and automation infrastructure for an intent-based prospecting product.',
      link: 'https://www.creamstack.io/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', // Data/Automation placeholder
      tags: ['Backend Automation', 'n8n', 'API', 'CRM', 'Workflow Automation', 'Product']
    },
    {
      title: 'MAYON AUTO',
      category: 'UI/UX Design • E-commerce • Product Design',
      description: 'Designed the Mayon Auto e-commerce website experience and created product-focused visual designs for automotive care products.',
      link: 'https://www.mayonauto.com/',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop', // Car detailing placeholder
      tags: ['UI/UX', 'E-commerce', 'Product Design', 'Visual Design', 'Web Design']
    },
    {
      title: 'CRM & LEAD AUTOMATION',
      category: 'Automation • CRM • API Integration',
      description: 'Built automation workflows connecting lead sources, CRM systems, Google Workspace, Google Sheets, APIs, webhooks, and outreach platforms.',
      link: '',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800&auto=format&fit=crop', // CRM/Dashboard placeholder
      tags: ['n8n', 'Google Workspace', 'Google Sheets', 'CRM', 'Instantly', 'REST APIs', 'Webhooks']
    }
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto h-full overflow-y-auto custom-scrollbar">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white/90 uppercase tracking-tight">Products & Projects</h1>
        <p className="text-lg text-white/50 font-light max-w-2xl">
          A showcase of my recent work in product design, web development, and digital experiences.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col md:flex-row">
            
            {/* Project Image */}
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden bg-black/40 relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 md:from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Content */}
            <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-white/90 mb-2 uppercase tracking-wide">{project.title}</h3>
                  <p className="text-emerald-400/80 text-xs font-bold uppercase tracking-wider mb-6">{project.category}</p>
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white text-white hover:text-black transition-colors shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              <p className="text-white/60 text-sm leading-relaxed mb-8 italic border-l-2 border-white/20 pl-4">
                "{project.description}"
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-black/40 border border-white/5 rounded text-[10px] font-semibold text-white/60 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white/90 hover:text-emerald-400 transition-colors uppercase tracking-wider w-fit"
                >
                  View Live Project <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
