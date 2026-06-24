import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12"><span className="gradient-text">项目展示</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group bg-[var(--color-bg-card)] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img src={project.imageUrl} alt={project.name} loading="lazy" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (<span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/5 text-[var(--color-text-secondary)]">{tech}</span>))}
                </div>
                <div className="flex gap-3">
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-accent-start)] hover:underline">查看项目 →</a>
                  {project.githubUrl && (<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors">GitHub</a>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}