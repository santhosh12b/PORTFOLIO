import React from 'react';
import Desktop from './components/Desktop';
import MenuBar from './components/MenuBar';
import Dock from './components/Dock';

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-black text-white relative font-sans selection:bg-white/20">
      <MenuBar />
      <Desktop />
      <Dock />
    </div>
  );
}

export default App;
