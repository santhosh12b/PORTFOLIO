import { create } from 'zustand';

export interface WindowData {
  id: string;
  title: string;
  icon?: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

interface WindowState {
  windows: WindowData[];
  activeWindowId: string | null;
  openWindow: (id: string, title?: string, icon?: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  toggleMinimize: (id: string) => void;
  closeAllWindows: () => void;
}

const INITIAL_Z_INDEX = 10;

export const useWindowStore = create<WindowState>((set) => ({
  windows: [],
  activeWindowId: null,

  openWindow: (id, title = id, icon) => set((state) => {
    const existingWindow = state.windows.find(w => w.id === id);
    
    // Find highest zIndex
    const maxZ = state.windows.reduce((max, w) => Math.max(max, w.zIndex), INITIAL_Z_INDEX);
    const newZ = maxZ + 1;

    if (existingWindow) {
      return {
        windows: state.windows.map(w => 
          w.id === id 
            ? { ...w, isOpen: true, isMinimized: false, zIndex: newZ }
            : w
        ),
        activeWindowId: id,
      };
    }

    return {
      windows: [...state.windows, {
        id,
        title,
        icon,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
        zIndex: newZ,
      }],
      activeWindowId: id,
    };
  }),

  closeWindow: (id) => set((state) => ({
    windows: state.windows.map(w => 
      w.id === id ? { ...w, isOpen: false, isMinimized: false, isMaximized: false } : w
    ),
    activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
  })),

  closeAllWindows: () => set((state) => ({
    windows: state.windows.map(w => ({ ...w, isOpen: false, isMinimized: false, isMaximized: false })),
    activeWindowId: null,
  })),

  minimizeWindow: (id) => set((state) => ({
    windows: state.windows.map(w => 
      w.id === id ? { ...w, isMinimized: true } : w
    ),
    activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
  })),

  toggleMinimize: (id) => set((state) => {
    const window = state.windows.find(w => w.id === id);
    if (!window) return state;

    if (window.isMinimized) {
      // Restore and focus
      const maxZ = state.windows.reduce((max, w) => Math.max(max, w.zIndex), INITIAL_Z_INDEX);
      return {
        windows: state.windows.map(w => w.id === id ? { ...w, isMinimized: false, zIndex: maxZ + 1 } : w),
        activeWindowId: id
      };
    } else {
      if (state.activeWindowId === id) {
        // Minimize if focused
        return {
          windows: state.windows.map(w => w.id === id ? { ...w, isMinimized: true } : w),
          activeWindowId: null
        };
      } else {
        // Just focus if not focused
        const maxZ = state.windows.reduce((max, w) => Math.max(max, w.zIndex), INITIAL_Z_INDEX);
        return {
          windows: state.windows.map(w => w.id === id ? { ...w, zIndex: maxZ + 1 } : w),
          activeWindowId: id
        };
      }
    }
  }),

  maximizeWindow: (id) => set((state) => ({
    windows: state.windows.map(w => 
      w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
    )
  })),

  focusWindow: (id) => set((state) => {
    if (state.activeWindowId === id) return state; // Already focused
    
    const maxZ = state.windows.reduce((max, w) => Math.max(max, w.zIndex), INITIAL_Z_INDEX);
    
    return {
      windows: state.windows.map(w => 
        w.id === id ? { ...w, zIndex: maxZ + 1, isMinimized: false } : w
      ),
      activeWindowId: id,
    };
  }),
}));
