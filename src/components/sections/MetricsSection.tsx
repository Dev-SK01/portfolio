import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { keyMetrics } from '../../data/portfolioData';
import { TrendingUp, Zap, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const MetricsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-metric-card',
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.12,
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
  }, []);

  const iconsMap: Record<string, React.ReactNode> = {
    'build-time': <Zap className="w-5 h-5 text-cyan-400 shrink-0" />,
    'page-load': <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />,
    'test-coverage': <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0" />,
    'rollout-time': <Clock className="w-5 h-5 text-indigo-400 shrink-0" />,
  };

  const glowBorderMap: Record<string, string> = {
    'build-time': 'group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/10',
    'page-load': 'group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/10',
    'test-coverage': 'group-hover:border-purple-500/50 group-hover:shadow-purple-500/10',
    'rollout-time': 'group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/10',
  };

  return (
    <section id="metrics" ref={sectionRef} className="py-20 bg-slate-950/80 border-y border-slate-900/90 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[250px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>QUANTIFIABLE ENGINEERING IMPACT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight font-sans">
            Production Engineering Metrics
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Measurable performance optimizations delivered across enterprise HRMS systems, CI/CD release cycles, and automated testing pipelines.
          </p>
        </div>

        {/* Pixel-Perfect Equal Height Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {keyMetrics.map((metric) => (
            <div
              key={metric.id}
              className={`gsap-metric-card glass-panel rounded-3xl p-6 border border-slate-800/90 relative flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${glowBorderMap[metric.id]}`}
            >
              {/* Top Row: Perfectly Aligned Icon Box + Multi-line Trend Pill */}
              <div className="flex items-start justify-between gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:bg-slate-900/90 group-hover:border-slate-700 transition-colors shadow-inner">
                  {iconsMap[metric.id]}
                </div>
                
                <div className="inline-flex items-center justify-end text-right font-mono text-[11px] font-medium leading-snug text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1.5 rounded-xl whitespace-normal break-words max-w-[68%]">
                  {metric.trend}
                </div>
              </div>

              {/* Main Stat Number & Label */}
              <div className="space-y-1 mb-5">
                <div className="text-4xl sm:text-5xl font-extrabold text-slate-100 font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-slate-200 font-sans tracking-wide">
                  {metric.label}
                </div>
              </div>

              {/* Bottom Divider & Complete Visible Description */}
              <div className="pt-4 border-t border-slate-800/80 mt-auto">
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
