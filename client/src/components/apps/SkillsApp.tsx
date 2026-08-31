

export default function SkillsApp() {
  const skillCategories = [
    {
      title: 'UI/UX & Product Design',
      skills: ['Figma', 'Wireframing', 'Prototyping', 'User Flows', 'Design Systems', 'Responsive UI', 'Product Design', 'UX Research', 'Canva', 'Photoshop']
    },
    {
      title: 'Automation',
      skills: ['n8n', 'Workflow Automation', 'Backend Automation', 'Webhooks', 'REST APIs', 'API Integration', 'CRM Automation', 'Instantly', 'Google Workspace']
    },
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Vite']
    },
    {
      title: 'Backend',
      skills: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'Python', 'Flask']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'MongoDB', 'SQLite', 'Supabase']
    },
    {
      title: 'Tools & Deployment',
      skills: ['Git', 'GitHub', 'Hostinger', 'Vercel', 'cPanel', 'XAMPP', 'VS Code']
    },
    {
      title: 'AI Development',
      skills: ['AI-Assisted Development', 'Vibe Coding', 'AI-assisted prototyping', 'AI-assisted coding', 'AI-assisted debugging']
    }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto h-full overflow-y-auto custom-scrollbar">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white/90 uppercase tracking-tight">Skills & Tech Stack</h1>
        <p className="text-lg text-white/50 font-light max-w-2xl">
          A comprehensive overview of the tools, technologies, and methodologies I use to design and build digital products.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="break-inside-avoid bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors backdrop-blur-md shadow-xl">
            <h3 className="text-sm font-bold text-white/90 mb-4 uppercase tracking-widest border-b border-white/10 pb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-black/40 border border-white/5 rounded-md text-xs font-medium text-white/70 hover:text-white transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
