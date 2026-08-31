
import { FileText, Download, ExternalLink } from 'lucide-react';

export default function ResumeApp() {
  return (
    <div className="p-8 max-w-4xl mx-auto h-full overflow-y-auto custom-scrollbar">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white/90 uppercase tracking-tight">Resume</h1>
        <p className="text-lg text-white/50 font-light max-w-2xl">
          Detailed overview of my professional experience, skills, and education.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
        
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-white/10 pb-8 relative z-10">
          <div>
            <h2 className="text-3xl font-bold text-white/90 mb-2 uppercase tracking-wide">Santhosh G</h2>
            <p className="text-emerald-400 font-medium uppercase tracking-widest text-sm">UI/UX Designer & Automation Developer</p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider rounded-xl border border-white/10 transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" /> View
            </a>
            <a 
              href="#" 
              download
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase tracking-wider rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] text-sm"
            >
              <Download className="w-4 h-4" /> Download
            </a>
          </div>
        </div>

        <div className="space-y-12 relative z-10">
          {/* Experience Summary */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Professional Summary
            </h3>
            <p className="text-white/70 leading-relaxed font-light text-sm md:text-base">
              A UI/UX Designer, Automation Developer, and Full Stack Web Developer focused on building digital products that look great, work reliably, and solve real business problems. Experienced in designing interfaces in Figma, building modern web applications, and creating automated workflows using n8n and API integrations.
            </p>
          </section>

          {/* Quick Stats/Skills overview in Resume format */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Core Competencies</h3>
              <ul className="space-y-3">
                {['UI/UX & Product Design', 'Frontend & Backend Web Development', 'n8n Workflow Automation', 'API & Webhook Integrations', 'CRM & Lead Automation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Experience Highlights</h3>
              <ul className="space-y-4">
                <li className="border-l-2 border-white/10 pl-4">
                  <div className="font-bold text-white/90">Pixoda</div>
                  <div className="text-xs text-emerald-400/80 uppercase tracking-widest mb-1">UI/UX & Automation Developer</div>
                </li>
                <li className="border-l-2 border-white/10 pl-4">
                  <div className="font-bold text-white/90">RAIBS Infotech</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest mb-1">Web Application Developer</div>
                </li>
              </ul>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
