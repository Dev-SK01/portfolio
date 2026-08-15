import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { workExperience } from '../../data/portfolioData';
import { Badge } from '../ui/Badge';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-exp-card',
        { opacity: 0, x: 35 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          stagger: 0.15,
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
    <section id="experience" ref={sectionRef} className="py-20 bg-slate-950/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
            Career Journey
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-base">
            Production engineering experience building scaleable web products, microservices, and mobile applications.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {workExperience.map((exp) => (
            <div key={exp.id} className="gsap-exp-card relative group">
              
              {/* Timeline Dot Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-10 h-10 rounded-xl bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                <Briefcase className="w-5 h-5" />
              </div>

              {/* Main Card */}
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/90 relative space-y-6">
                
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    Key Technical Deliverables & Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-mono text-slate-400 mb-2">Technologies & Architecture</div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="cyan" size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
