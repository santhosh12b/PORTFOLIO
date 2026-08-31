import { Mail, Phone, Globe, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

import { useWindowStore } from '../../store/windowStore';

export default function ContactApp() {
  const { openWindow, windows, toggleMinimize } = useWindowStore();

  const handleOpenResume = () => {
    const isAppOpen = windows.some(w => w.id === 'resume');
    if (isAppOpen) {
      toggleMinimize('resume');
    } else {
      openWindow('resume', 'RESUME');
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto h-full overflow-y-auto custom-scrollbar flex flex-col justify-center">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white/90 uppercase tracking-tight">
          Let's Build Something
        </h1>
        <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
          Have an idea, product, website, or workflow that needs to be designed or automated? Let's talk.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
        <a 
          href="mailto:santhosh12b2020@gmail.com"
          className="w-full md:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2"
        >
          Start a Project <ArrowUpRight className="w-5 h-5" />
        </a>
        
        <a 
          href="https://wa.me/919360263737" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2"
        >
          Let's Talk <ArrowUpRight className="w-5 h-5" />
        </a>
        
        <button 
          onClick={handleOpenResume}
          className="w-full md:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white/70 hover:text-white font-bold uppercase tracking-wider rounded-xl border border-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2"
        >
          View Resume <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto w-full">
        <div className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Direct Contact</h3>
          <a href="mailto:santhosh12b2020@gmail.com" className="flex items-center gap-4 text-white/80 hover:text-emerald-400 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 border border-white/5 group-hover:border-emerald-500/20">
              <Mail className="w-4 h-4" />
            </div>
            <span className="font-medium">santhosh12b2020@gmail.com</span>
          </a>
          <a href="tel:+919360263737" className="flex items-center gap-4 text-white/80 hover:text-emerald-400 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 border border-white/5 group-hover:border-emerald-500/20">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-medium">+91 93602 63737</span>
          </a>
        </div>

        <div className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Social & Links</h3>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 border border-white/5">
              <LinkedinIcon className="w-4 h-4" />
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>
          <a href="https://github.com/santhosh12b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 border border-white/5">
              <GithubIcon className="w-4 h-4" />
            </div>
            <span className="font-medium">GitHub</span>
          </a>
          <a href="https://santhos.design" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 border border-white/5">
              <Globe className="w-4 h-4" />
            </div>
            <span className="font-medium">Portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
}
