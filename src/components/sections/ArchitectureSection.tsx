import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { architectureHighlights } from '../../data/portfolioData';
import { Badge } from '../ui/Badge';
import { TechIcon } from '../ui/TechIcon';
import { Cpu, GitBranch, Bot, Radio, CheckCircle2, ArrowRight, Layers, Terminal, Sparkles, Server, Zap, ShieldCheck, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ArchitectureSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(architectureHighlights[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-arch-left',
        { opacity: 0, x: -35 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
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
        '.gsap-arch-right',
        { opacity: 0, scale: 0.94 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
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

  const activeHighlight = architectureHighlights.find((h) => h.id === activeTabId) || architectureHighlights[0];

  const tabIcons: Record<string, React.ReactNode> = {
    mfe: <Layers className="w-4 h-4 text-cyan-400" />,
    cicd: <GitBranch className="w-4 h-4 text-purple-400" />,
    'ai-agents': <Bot className="w-4 h-4 text-emerald-400" />,
    telemetry: <Radio className="w-4 h-4 text-rose-400" />,
  };

  return (
    <section id="architecture" ref={sectionRef} className="py-24 bg-slate-950/90 border-t border-slate-900 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>SYSTEM DESIGN & TECHNICAL LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight font-sans">
            Architecture Solutions & Engineering Highlights
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Hands-on system design engineered by Srikanth N—featuring enterprise Micro-Frontend systems, zero-downtime CI/CD automation, AI code review agents, and sub-second telemetry pipelines.
          </p>
        </div>

        {/* Tab Navigation Bar */}
        <div className="flex flex-wrap gap-2.5 mb-8 border-b border-slate-800/80 pb-4">
          {architectureHighlights.map((item) => {
            const isActive = item.id === activeTabId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-mono font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 border border-cyan-400 font-bold'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tabIcons[item.id]}
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Architecture Display Container */}
        <div className="gsap-arch-card glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800/90 relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between gsap-arch-left">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="cyan">{activeHighlight.badgeText}</Badge>
                  <span className="text-xs font-mono text-slate-400">{activeHighlight.subtitle}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight font-sans">
                  {activeHighlight.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeHighlight.description}
                </p>
              </div>

              {/* Impact Metrics Checklist */}
              <div className="space-y-3 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Measurable Engineering Impact</span>
                </h4>
                <div className="space-y-2">
                  {activeHighlight.impactMetrics.map((metric, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips with Brand Icons */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="text-xs font-mono text-slate-400">Architecture Technologies</span>
                <div className="flex flex-wrap gap-2">
                  {activeHighlight.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      <TechIcon name={tech} className="w-3.5 h-3.5" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Architecture Canvas / IDE Schema */}
            <div className="lg:col-span-6 flex gsap-arch-right">
              <div className="w-full rounded-2xl bg-slate-950 border border-slate-800/90 p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                
                {/* IDE Window Bar */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400/90 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>system-architect.{activeHighlight.id}.spec</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    LIVE SPEC
                  </span>
                </div>

                {/* Schema visual diagram representations */}
                {activeHighlight.id === 'mfe' && (
                  <div className="space-y-4 font-mono text-xs my-auto">
                    {/* Shell Container */}
                    <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 text-center font-bold relative shadow-md">
                      <div className="text-[10px] text-cyan-400/80 uppercase">Module Federation Host Container</div>
                      <div>⚡ Enterprise HRMS Shell Host (React 18)</div>
                    </div>

                    {/* Routing Arrows */}
                    <div className="flex justify-around text-slate-500 text-[10px]">
                      <span>↓ Remote Route</span>
                      <span>↓ Remote Route</span>
                      <span>↓ Remote Route</span>
                    </div>

                    {/* Micro Remotes */}
                    <div className="grid grid-cols-3 gap-2.5 text-center text-[10px]">
                      <div className="p-3 rounded-xl bg-slate-900 border border-purple-500/30 text-purple-300 hover:border-purple-400 transition-colors">
                        <div className="font-bold text-slate-100">Attendance</div>
                        <div className="text-purple-400">React Remote</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-300 hover:border-emerald-400 transition-colors">
                        <div className="font-bold text-slate-100">Payroll</div>
                        <div className="text-emerald-400">Angular Remote</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 hover:border-amber-400 transition-colors">
                        <div className="font-bold text-slate-100">Onboarding</div>
                        <div className="text-amber-400">React Remote</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-center text-[11px]">
                      ⚡ Monolithic Build Time: <span className="text-cyan-400 font-bold">~8 min → ~5.5 min (-30%)</span>
                    </div>
                  </div>
                )}

                {activeHighlight.id === 'cicd' && (
                  <div className="space-y-3 font-mono text-xs my-auto">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-200">
                      <span>1. Git Commit & PR Push</span>
                      <span className="text-emerald-400 font-bold">Triggered</span>
                    </div>
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-between text-purple-300">
                      <span>2. Jenkins Multi-Stage CI/CD</span>
                      <span className="text-purple-400 font-bold">Multi-Stage</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-200">
                      <span>3. Playwright 95%+ Unit & Vitest</span>
                      <span className="text-cyan-400 font-bold">Passed</span>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-emerald-300">
                      <span>4. Automated Docker Deployment</span>
                      <span className="text-emerald-400 font-bold">&lt; 10 Mins</span>
                    </div>
                  </div>
                )}

                {activeHighlight.id === 'ai-agents' && (
                  <div className="space-y-3 font-mono text-xs my-auto">
                    <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-center font-bold">
                      🤖 Claude Code LLM Tool Calling Engine
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 space-y-1.5 text-[11px]">
                      <div className="text-emerald-400">&gt; git diff --staged | claude-tool</div>
                      <div>&gt; Inspecting AST & lint rules...</div>
                      <div className="text-cyan-300">&gt; Automated code review checks passed (0 leaks)</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-center text-[11px]">
                      Optimized Context Window & Prompt Pipelines
                    </div>
                  </div>
                )}

                {activeHighlight.id === 'telemetry' && (
                  <div className="space-y-3 font-mono text-xs my-auto">
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center font-bold">
                      📡 WebSocket Vault Alarm & Telemetry Pipeline
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300">
                        Sub-second Alarms
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-purple-300">
                        OpenTelemetry Tracing
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-center text-[11px]">
                      Managed with Node.js, PM2 & WebSocket Streams
                    </div>
                  </div>
                )}

                {/* IDE Bottom Status Bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>STATUS: PRODUCTION DEPLOYED</span>
                  <span className="text-cyan-400">AUTHOR: SRIKANTH N</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
