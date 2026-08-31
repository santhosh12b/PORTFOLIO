

export default function ProjectApp({ 
  title, 
  description, 
  year, 
  projectType, 
  credits, 
  imageUrl 
}: { 
  title: string, 
  description: string, 
  year: string, 
  projectType: string, 
  credits: string,
  imageUrl: string
}) {
  return (
    <div className="p-8 max-w-4xl mx-auto h-full flex flex-col overflow-y-auto custom-scrollbar bg-white text-black">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {title}
        </h1>
        <p className="text-lg text-black/70 font-light max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-10 border-t border-black/10 pt-8">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-black/90 mb-2">Year</h3>
          <p className="text-black/60 text-sm">{year}</p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-black/90 mb-2">Project Type</h3>
          <p className="text-black/60 text-sm">{projectType}</p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-black/90 mb-2">Credits</h3>
          <p className="text-black/60 text-sm">{credits}</p>
        </div>
      </div>

      <div className="flex-1 min-h-[300px] w-full rounded-2xl overflow-hidden shadow-lg border border-black/5 mt-auto">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
