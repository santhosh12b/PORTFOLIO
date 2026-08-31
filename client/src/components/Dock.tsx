import { motion } from 'framer-motion';
import { useWindowStore } from '../store/windowStore';
import { 
  User, 
  FileText,
  Monitor,
  Globe
} from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

interface DockItem {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  type: 'app' | 'action' | 'link';
  url?: string;
}

const DOCK_ITEMS: DockItem[] = [
  { id: 'about', title: 'About', icon: User, color: 'text-white', type: 'app' },
  { id: 'resume', title: 'Resume', icon: FileText, color: 'text-white', type: 'app' },
  { id: 'instagram', title: 'Instagram', icon: InstagramIcon, color: 'text-white', type: 'link', url: 'https://instagram.com' },
  { id: 'desktop', title: 'Desktop', icon: Monitor, color: 'text-white', type: 'action' },
  { id: 'website', title: 'Portfolio', icon: Globe, color: 'text-white', type: 'link', url: 'https://santhos.design' }, // Example link
];

export default function Dock() {
  const { openWindow, toggleMinimize, windows, closeAllWindows } = useWindowStore();

  const handleAppClick = (item: DockItem) => {
    if (item.type === 'link' && item.url) {
      window.open(item.url, '_blank');
      return;
    }
    
    if (item.type === 'action' && item.id === 'desktop') {
      closeAllWindows();
      return;
    }

    const isAppOpen = windows.some(w => w.id === item.id);
    if (isAppOpen) {
      toggleMinimize(item.id);
    } else {
      openWindow(item.id, item.title);
    }
  };

  const hasOpenWindows = windows.some(w => w.isOpen && !w.isMinimized);

  return (
    <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] justify-center transition-opacity duration-300 ${hasOpenWindows ? 'hidden md:flex' : 'flex'}`}>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', damping: 20 }}
        className="flex items-center gap-3 p-3 rounded-3xl bg-black/40 backdrop-blur-3xl border border-white/5 shadow-2xl"
      >
        {DOCK_ITEMS.map((item) => {
          const isOpen = item.type === 'app' && windows.some(w => w.id === item.id);
          const Icon = item.icon;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => handleAppClick(item)}
              whileHover={{ scale: 1.15, y: -8 }}
              whileTap={{ scale: 0.9 }}
              className="relative group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 shadow-lg"
            >
              <Icon className={`w-5 h-5 ${item.color} drop-shadow-sm opacity-80 group-hover:opacity-100 transition-opacity`} />
              
              {/* Tooltip */}
              <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-medium tracking-wide rounded-md border border-white/10 pointer-events-none whitespace-nowrap shadow-xl">
                {item.title}
              </div>

              {/* Active Indicator */}
              {isOpen && (
                <div className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-white/60" />
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
