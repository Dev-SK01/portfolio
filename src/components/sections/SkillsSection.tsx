import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories } from '../../data/portfolioData';
import { TechIcon } from '../ui/TechIcon';
import { Search, Layout, Server, Database, Cpu, CheckCircle2, Activity, Bot, Code2, Sparkles, X, Grid, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'gallery' | 'category'>('gallery');
  const sectionRef = useRef<HTMLDivElement>(null);

  const categoryIconMap: Record<string, React.ReactNode> = {
    'Frontend Engineering': <Layout className="w-5 h-5 text-cyan-400" />,
    'Backend & APIs': <Server className="w-5 h-5 text-indigo-400" />,
    'Databases': <Database className="w-5 h-5 text-emerald-400" />,
    'DevOps & CI/CD': <Cpu className="w-5 h-5 text-purple-400" />,
    'Testing & QA': <CheckCircle2 className="w-5 h-5 text-amber-400" />,
    'Observability & Analytics': <Activity className="w-5 h-5 text-rose-400" />,
    'AI & Developer Tooling': <Bot className="w-5 h-5 text-cyan-300" />,
    'Core Fundamentals': <Code2 className="w-5 h-5 text-blue-400" />,
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-skill-tile',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.03,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [viewMode, selectedCategory, searchQuery]);

  // Flatten all skills with category metadata for Gallery View
  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({
      ...skill,
      category: cat.category,
    }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = !searchQuery.trim() || skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredCategories = skillCategories
    .filter((cat) => selectedCategory === 'All' || cat.category === selectedCategory)
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const filtered = cat.skills.filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
      return { ...cat, skills: filtered };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-slate-950/80 border-t border-slate-900 relative">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30">
              Technical Skill Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Skills & Technology Matrix
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Interactive pixel-aligned technology gallery showcasing frameworks, databases, DevOps tooling, and AI orchestration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* View Mode Switcher */}
            <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
              <button
                onClick={() => setViewMode('gallery')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${viewMode === 'gallery'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Tile</span>
              </button>
              <button
                onClick={() => setViewMode('category')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${viewMode === 'category'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Categories</span>
              </button>
            </div>

            {/* Search Input Bar */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tech (React, Docker)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-8 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60 shadow-lg shadow-black/40 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-3 custom-scrollbar">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold shrink-0 transition-all ${selectedCategory === 'All'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 border border-cyan-400'
                : 'bg-slate-900/80 text-slate-400 border border-slate-800/80 hover:text-slate-200'
              }`}
          >
            All Skills ({allSkills.length})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium shrink-0 transition-all ${selectedCategory === cat.category
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 border border-cyan-400 font-bold'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800/80 hover:text-slate-200'
                }`}
            >
              {categoryIconMap[cat.category]}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* GALLERY VIEW: Perfectly Aligned Image-Gallery Tile Grid */}
        {viewMode === 'gallery' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-4 items-stretch">
            {filteredSkills.map((skill) => (
              <div
                key={`${skill.category}-${skill.name}`}
                className={`gsap-skill-tile glass-panel rounded-2xl p-4 border relative flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/10 ${skill.highlight
                    ? 'bg-slate-900/90 border-cyan-500/40 hover:border-cyan-400 shadow-md'
                    : 'bg-slate-950/70 border-slate-800/90 hover:border-slate-700'
                  }`}
              >
                {/* Tile Top: Brand Icon + Highlight indicator */}
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-cyan-500/40 group-hover:bg-slate-900/90 transition-colors shadow-inner">
                    <TechIcon name={skill.name} className="w-5 h-5" />
                  </div>
                  {skill.highlight && (
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  )}
                </div>

                {/* Tile Middle: Skill Name & Category */}
                <div className="space-y-1 mb-3">
                  <div className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug truncate">
                    {skill.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 truncate">
                    {skill.category}
                  </div>
                </div>

                {/* Tile Bottom: Level Tag */}
                {skill.level && (
                  <div className="pt-2 border-t border-slate-800/80 mt-auto flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${skill.level === 'Expert'
                          ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                          : skill.level === 'Advanced'
                            ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CATEGORY VIEW: Grouped Cards */}
        {viewMode === 'category' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => (
              <div
                key={cat.category}
                className="gsap-skill-tile glass-panel rounded-3xl p-6 border border-slate-800/90 space-y-5 hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                      {categoryIconMap[cat.category]}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-100 font-sans tracking-tight">
                        {cat.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {cat.skills.length} core competencies
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2.5 pt-1">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${skill.highlight
                          ? 'bg-slate-900/90 border-cyan-500/30 hover:border-cyan-400/60'
                          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                        }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center justify-center shrink-0">
                          <TechIcon name={skill.name} className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      {skill.level && (
                        <span
                          className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${skill.level === 'Expert'
                              ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                              : 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                            }`}
                        >
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
