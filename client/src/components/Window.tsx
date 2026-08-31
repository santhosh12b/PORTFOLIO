import { useState, useEffect, ReactNode } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { useWindowStore } from '../store/windowStore';
import { Maximize2, Minimize2, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface WindowProps {
  id: string;
  title: string;
  children: ReactNode;
  defaultSize?: { width: number | string; height: number | string };
  defaultPosition?: { x: number; y: number };
}

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function Window({ 
  id, 
  title, 
  children, 
  defaultSize = { width: 800, height: 600 }
}: WindowProps) {
  const { windows, closeWindow, minimizeWindow, maximizeWindow, focusWindow } = useWindowStore();
  const windowState = windows.find(w => w.id === id);
  const dragControls = useDragControls();

  // For responsive drag bounds, we could pass a ref from the desktop, but for now we'll rely on window boundaries if possible.
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!windowState || !windowState.isOpen) return null;

  const isFocused = useWindowStore.getState().activeWindowId === id;

  const variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    minimized: { opacity: 0, scale: 0.8, y: 200, transition: { duration: 0.2 } },
  };

  const isMobile = windowSize.width < 768;
  const isEffectivelyMaximized = windowState.isMaximized || isMobile;

  const getWidth = () => isEffectivelyMaximized ? '100vw' : defaultSize.width;
  const getHeight = () => isEffectivelyMaximized ? 'calc(100dvh - 28px)' : defaultSize.height; // 28px is MenuBar (h-7)

  return (
    <motion.div
      drag={!isEffectivelyMaximized}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      initial="hidden"
      animate={windowState.isMinimized ? "minimized" : "visible"}
      exit="hidden"
      variants={variants}
      onMouseDown={() => focusWindow(id)}
      style={{
        width: getWidth(),
        height: getHeight(),
        zIndex: windowState.zIndex,
      }}
      className={cn(
        "fixed flex flex-col overflow-hidden rounded-xl",
        "bg-black/60 backdrop-blur-3xl shadow-2xl border border-white/10",
        isEffectivelyMaximized ? "top-[28px] left-0 !transform-none rounded-none border-x-0 border-b-0" : "top-20 left-20"
      )}
    >
      {/* Title Bar */}
      <div 
        className={cn(
          "h-12 flex items-center px-4 gap-4 select-none cursor-default",
          isFocused ? "bg-white/5" : "bg-transparent",
          "transition-colors"
        )}
        onPointerDown={(e) => {
          focusWindow(id);
          dragControls.start(e);
        }}
        onDoubleClick={() => maximizeWindow(id)}
      >
        <div className="flex gap-2 items-center">
          <button 
            onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
            className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e] hover:bg-[#ff5f56]/80 flex items-center justify-center group"
          >
            <X className="w-2.5 h-2.5 text-black/50 opacity-0 group-hover:opacity-100" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}
            className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-[#dea123] hover:bg-[#ffbd2e]/80 flex items-center justify-center group"
          >
            <Minimize2 className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); maximizeWindow(id); }}
            className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-[#1aab29] hover:bg-[#27c93f]/80 flex items-center justify-center group"
          >
            <Maximize2 className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100" />
          </button>
        </div>

        <div className="font-semibold text-sm text-white/50 tracking-wide">
          {title}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto bg-black/40 text-white relative">
        {children}
      </div>
    </motion.div>
  );
}
