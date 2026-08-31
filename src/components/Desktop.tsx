import { motion } from 'framer-motion';
import { useWindowStore } from '../store/windowStore';
import Window from './Window';

// Import apps
import AboutApp from './apps/AboutApp';
import WorkApp from './apps/WorkApp';
import ProjectsApp from './apps/ProjectsApp';
import AIApp from './apps/AIApp';
import DesignApp from './apps/DesignApp';
import ServicesApp from './apps/ServicesApp';
import SkillsApp from './apps/SkillsApp';
import ResumeApp from './apps/ResumeApp';
import ContactApp from './apps/ContactApp';

interface DesktopIconData {
  id: string;
  title: string;
  appTitle: string;
  position: { top: string; left: string };
}

const MacFolderIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fill="#54b2ec" d="M239.5,214.2c0,8.6-7,15.6-15.6,15.6H32.1c-8.6,0-15.6-7-15.6-15.6V88.9h223V214.2z"/>
    <path fill="#3da8f5" d="M239.5,88.9v-7.2c0-8.6-7-15.6-15.6-15.6H130.6c-5.8,0-10.9-3.4-13.3-8.6L108,37.3c-2.4-5.2-7.5-8.6-13.3-8.6H32.1c-8.6,0-15.6,7-15.6,15.6v44.5H239.5z"/>
    <path fill="#8ce0ff" opacity="0.3" d="M239.5,88.9v6.5H16.5v-6.5c0-8.6,7-15.6,15.6-15.6h94.9c5.8,0,10.9-3.4,13.3-8.6l3.9-8.5c1.6,4.6,5.9,7.8,11,7.8h68.7C232.5,73.3,239.5,80.3,239.5,88.9z"/>
  </svg>
);

// Dark cinematic placeholders
const DESKTOP_ICONS: DesktopIconData[] = [
  { 
    id: 'about', 
    title: 'About Me', 
    appTitle: 'ABOUT ME',
    position: { top: '15%', left: '10%' }
  },
  { 
    id: 'ai', 
    title: 'AI Automation', 
    appTitle: 'AI AUTOMATION',
    position: { top: '25%', left: '45%' }
  },
  { 
    id: 'skills', 
    title: 'Skills', 
    appTitle: 'SKILLS',
    position: { top: '15%', left: '80%' }
  },
  { 
    id: 'work', 
    title: 'Work Experience', 
    appTitle: 'WORK EXPERIENCE',
    position: { top: '45%', left: '15%' }
  },
  { 
    id: 'services', 
    title: 'Services', 
    appTitle: 'SERVICES',
    position: { top: '55%', left: '50%' }
  },
  { 
    id: 'design', 
    title: 'Design', 
    appTitle: 'DESIGN',
    position: { top: '40%', left: '75%' }
  },
  { 
    id: 'projects', 
    title: 'Products & Projects', 
    appTitle: 'PRODUCTS & PROJECTS',
    position: { top: '75%', left: '20%' }
  },
  { 
    id: 'resume', 
    title: 'Resume', 
    appTitle: 'RESUME',
    position: { top: '65%', left: '85%' }
  },
  { 
    id: 'contact', 
    title: 'Contact', 
    appTitle: 'LET\'S BUILD SOMETHING',
    position: { top: '80%', left: '60%' }
  },
];

const AppContent = ({ id }: { id: string }) => {
  switch (id) {
    case 'about': return <AboutApp />;
    case 'work': return <WorkApp />;
    case 'projects': return <ProjectsApp />;
    case 'ai': return <AIApp />;
    case 'design': return <DesignApp />;
    case 'services': return <ServicesApp />;
    case 'skills': return <SkillsApp />;
    case 'resume': return <ResumeApp />;
    case 'contact': return <ContactApp />;
    default: return <div className="p-8 text-center text-white/50">Application not found.</div>;
  }
};

import backgroundImage from '../assets/santhosh.png';

export default function Desktop() {
  const { windows, openWindow, toggleMinimize } = useWindowStore();

  const handleIconClick = (id: string, title: string) => {
    const isAppOpen = windows.some(w => w.id === id);
    if (isAppOpen) {
      toggleMinimize(id);
    } else {
      openWindow(id, title);
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden select-none bg-[#0a0a0a]">
      
      {/* Background Image - Cinematic */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${backgroundImage})` }} 
      />
      
      {/* Vignette Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80 pointer-events-none" />

      {/* Responsive Icons Container: Grid on mobile, absolute scattered on md+ */}
      <div className="absolute inset-0 z-10 pointer-events-none grid grid-cols-3 sm:grid-cols-4 md:block content-start gap-y-10 gap-x-4 p-4 pt-20 md:p-0 justify-items-center">
        {DESKTOP_ICONS.map((item) => {
          return (
            <motion.div
              key={item.id}
              className={`icon-container-${item.id} relative md:absolute flex flex-col items-center gap-1.5 group cursor-pointer pointer-events-auto w-full max-w-[80px] md:max-w-none md:w-[120px]`}
              style={{ 
                '--md-top': item.position.top, 
                '--md-left': item.position.left 
              } as React.CSSProperties}
              onClick={() => handleIconClick(item.id, item.appTitle)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              drag
              dragMomentum={false}
            >
              <style dangerouslySetInnerHTML={{__html: `
                @media (min-width: 768px) {
                  .icon-container-${item.id} {
                    top: var(--md-top) !important;
                    left: var(--md-left) !important;
                  }
                }
              `}} />
              
              <div className="flex flex-col items-center gap-1.5 md:gap-3 w-full px-1 md:px-0">
                <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 drop-shadow-2xl">
                  <MacFolderIcon className="w-full h-full drop-shadow-xl" />
                </div>
                <span className="text-[10px] md:text-xs font-semibold text-white/90 group-hover:text-white md:bg-black/60 md:px-3 md:py-1.5 md:rounded-full md:backdrop-blur-md text-center md:border md:border-white/10 tracking-wide drop-shadow-md w-full leading-snug">
                  {item.title}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Render Windows */}
      {windows.map((w) => (
        <Window key={w.id} id={w.id} title={w.title}>
          <AppContent id={w.id} />
        </Window>
      ))}

    </div>
  );
}
