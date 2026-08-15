import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { educationList, communityAndVolunteer } from '../../data/portfolioData';
import { GraduationCap, Award, Users, CheckCircle2 } from 'lucide-react';
import { Badge } from '../ui/Badge';

gsap.registerPlugin(ScrollTrigger);

export const EducationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-edu-left',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.gsap-edu-right',
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          delay: 0.1,
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
    <section id="education" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div className="space-y-6 text-left gsap-edu-left">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                Academic Foundation
              </span>
              <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
                Education
              </h2>
            </div>

            {educationList.map((edu, idx) => (
              <div key={idx} className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
                <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-100">{edu.institution}</h3>
                    <p className="text-sm font-semibold text-slate-300">
                      {edu.degree} in {edu.field}
                    </p>
                  </div>
                  <Badge variant="emerald" size="md">
                    {edu.grade}
                  </Badge>
                </div>

                {edu.highlights && (
                  <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Volunteer & Certifications Column */}
          <div className="space-y-6 text-left gsap-edu-right">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30">
                Community & Leadership
              </span>
              <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
                Certifications & Volunteer
              </h2>
            </div>

            <div className="space-y-4">
              {communityAndVolunteer.map((item, idx) => (
                <div key={idx} className="gsap-edu-card glass-panel rounded-2xl p-5 border border-slate-800 space-y-2 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-100">
                      {idx === 0 ? <Users className="w-4 h-4 text-cyan-400" /> : <Award className="w-4 h-4 text-purple-400" />}
                      <span>{item.organization}</span>
                    </div>
                    <Badge variant="purple" size="sm">
                      {item.role}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
