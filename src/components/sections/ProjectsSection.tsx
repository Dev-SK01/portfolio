import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { technicalProjects } from '../../data/portfolioData';
import { ProjectItem } from '../../types/portfolio';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { ExternalLink, Github, Layers, CheckCircle2, Calendar, Code, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Full-Stack', 'Systems & Backend'];

  const filteredProjects = selectedCategory === 'All'
    ? technicalProjects
    : technicalProjects.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-project-card',
        { opacity: 0, y: 35, rotateX: 6 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl text-left">
            <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
              Selected Software Projects
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
              Featured Technical Projects
            </h2>
            <p className="text-slate-400 text-base">
              Full-stack marketplaces, concurrent hall allocation engines, and containerized microservice architectures.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="gsap-project-card glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/90 relative flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-medium">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 shrink-0">
                    {project.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-slate-400">Architecture & Tech Stack:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 6).map((tech) => (
                      <Badge key={tech} variant="slate" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 6 && (
                      <Badge variant="outline" size="sm">
                        +{project.techStack.length - 6} more
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full sm:w-auto justify-center"
                  icon={<Sparkles className="w-4 h-4 text-cyan-400" />}
                  onClick={() => setSelectedProject(project)}
                >
                  View Details & Architecture
                </Button>

                <div className="flex items-center justify-end gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                      aria-label="View Code Repo"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                      aria-label="View Live Project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Project Modal */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}
          maxWidth="2xl"
        >
          {selectedProject && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-cyan-400">{selectedProject.subtitle}</span>
                <p className="text-slate-300 text-sm leading-relaxed mt-2">
                  {selectedProject.description}
                </p>
              </div>

              {/* Full Key Contributions */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Technical Architecture & Accomplishments
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.keyContributions.map((contrib, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{contrib}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Complete Tech Stack list */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-slate-400">Complete Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <Badge key={tech} variant="cyan">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Modal footer links */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                {selectedProject.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Github className="w-4 h-4" />}
                    onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  >
                    GitHub Repository
                  </Button>
                )}
                {selectedProject.demoUrl && (
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink className="w-4 h-4" />}
                    onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                  >
                    Live Application
                  </Button>
                )}
              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};
