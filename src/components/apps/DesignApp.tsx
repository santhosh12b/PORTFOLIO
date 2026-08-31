

export default function DesignApp() {
  const skills = [
    'Figma', 'UI Design', 'UX Design', 'Wireframing', 'Prototyping', 
    'User Flows', 'Design Systems', 'Responsive Design', 'Product Design', 
    'Visual Design', 'Landing Pages', 'Dashboard Design', 'Mobile UI', 'Web UI'
  ];

  const previews = [
    { title: 'Dashboard UI', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
    { title: 'Mobile App', image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format&fit=crop' },
    { title: 'E-commerce', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto h-full overflow-y-auto custom-scrollbar">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white/90 uppercase tracking-tight">Design</h1>
        <p className="text-xl text-white/70 font-light max-w-2xl leading-relaxed italic border-l-2 border-white/20 pl-6">
          "I design interfaces with a balance of visual quality, usability, and real-world functionality."
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Capabilities</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/80 hover:bg-white/10 hover:border-white/20 transition-all cursor-default shadow-sm backdrop-blur-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Selected Visuals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previews.map((preview, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 aspect-square shadow-xl">
              <img 
                src={preview.image} 
                alt={preview.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-white/90 font-bold uppercase tracking-wider text-sm">{preview.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
