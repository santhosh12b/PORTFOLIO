

export default function AboutApp() {
  const highlights = [
    'UI/UX & Product Design',
    'Web Application Development',
    'AI & Workflow Automation',
    'API & Webhook Integrations',
    'CRM & Lead Automation',
    'E-commerce Experiences',
    'Backend Development',
    'AI-Assisted Development / Vibe Coding'
  ];

  return (
    <div className="p-8 max-w-3xl mx-auto h-full overflow-y-auto custom-scrollbar">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white/90 uppercase">
          About Me
        </h1>
        
        <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
          <p>
            <strong className="font-semibold text-white/90">Hi, I'm Santhosh</strong> — a UI/UX Designer, Automation Developer, and Full Stack Web Developer focused on building digital products that look great, work reliably, and solve real business problems.
          </p>
          <p>
            My work sits at the intersection of design, development, and automation. I design interfaces and digital products in Figma, build web applications, develop backend systems, and create automated workflows that connect different tools and services.
          </p>
          <p>
            I enjoy taking an idea from concept to a working product — from understanding the user and designing the experience to building the application and automating the processes behind it.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Key Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              <span className="text-white/80 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
