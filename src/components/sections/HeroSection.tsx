import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, FileText, Sparkles, ShieldCheck, Cpu, Code2, Download, Terminal, Zap, CheckCircle2, Video, Play } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenVideoResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenVideoResume }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const avatarRingRef = useRef<HTMLDivElement>(null);

  // Name typing animation state
  const [typedName, setTypedName] = useState('');
  const fullName = personalInfo.name; // "Srikanth N"

  // Looping roles typing animation state
  const roles = [
    'Software Engineer',
    'Frontend Engineer',
    'Backend Engineer',
    'Full-Stack Engineer',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRoleText, setCurrentRoleText] = useState('');
  const [isDeletingRole, setIsDeletingRole] = useState(false);

  // Smooth, soothing typewriter effect for Name on load
  useEffect(() => {
    let index = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextChar = () => {
      if (index <= fullName.length) {
        setTypedName(fullName.slice(0, index));
        index++;
        const delay = 70 + Math.random() * 40;
        timeoutId = setTimeout(typeNextChar, delay);
      }
    };

    timeoutId = setTimeout(typeNextChar, 150);
    return () => clearTimeout(timeoutId);
  }, [fullName]);

  // Smooth, soothing looping Typewriter effect for Roles
  useEffect(() => {
    const targetRole = roles[roleIndex];

    if (!isDeletingRole && currentRoleText === targetRole) {
      const timeout = setTimeout(() => setIsDeletingRole(true), 2400);
      return () => clearTimeout(timeout);
    } else if (isDeletingRole && currentRoleText === '') {
      const timeout = setTimeout(() => {
        setIsDeletingRole(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 300);
      return () => clearTimeout(timeout);
    }

    const delay = isDeletingRole ? 35 : 75 + Math.random() * 35;

    const timer = setTimeout(() => {
      setCurrentRoleText(
        isDeletingRole
          ? targetRole.slice(0, currentRoleText.length - 1)
          : targetRole.slice(0, currentRoleText.length + 1)
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [currentRoleText, isDeletingRole, roleIndex, roles]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-hero-fade', {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
      });

      gsap.to('.gsap-float-slow', {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.easeInOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[320px] sm:w-[700px] h-[250px] sm:h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[280px] sm:w-[400px] h-[200px] sm:h-[250px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">

            {/* Availability Pill */}
            <div className="gsap-hero-fade inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-mono shadow-sm shadow-cyan-500/10 max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="font-semibold leading-tight">Available for Software & Full-Stack Engineering Roles</span>
            </div>

            {/* Main Title & Typing Subtitle */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="gsap-hero-fade text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
                Hi, I'm{' '}
                <span className="inline-block text-gradient font-mono tracking-tight whitespace-nowrap">
                  {typedName}
                  {typedName.length < fullName.length && (
                    <span className="animate-pulse text-cyan-400 font-bold ml-0.5 drop-shadow-[0_0_8px_rgba(0,242,254,0.8)]">|</span>
                  )}
                </span>
              </h1>

              {/* Animated Typing Role Title */}
              <div className="gsap-hero-fade text-base sm:text-xl lg:text-2xl font-semibold text-slate-300 font-sans tracking-wide min-h-[32px] sm:min-h-[36px] flex items-center">
                <span className="text-cyan-300 font-mono font-bold tracking-tight">
                  {currentRoleText}
                </span>
                <span className="animate-pulse text-cyan-400 font-extrabold text-lg sm:text-xl font-mono ml-0.5 drop-shadow-[0_0_8px_rgba(0,242,254,0.8)]">|</span>
              </div>
            </div>

            {/* Summary */}
            <p className="gsap-hero-fade text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
              Specialized in architecting <span className="text-cyan-300 font-semibold underline decoration-cyan-500/40 decoration-2 underline-offset-4">Micro-Frontend systems (Module Federation)</span>, building high-throughput <span className="text-cyan-300 font-semibold">Node.js microservices</span>, and automating release cycles with multi-stage Jenkins & Docker CI/CD pipelines.
            </p>

            {/* Technical Chips */}
            <div className="gsap-hero-fade flex flex-wrap gap-2 pt-1">
              <Badge variant="cyan" icon={<Cpu className="w-3.5 h-3.5" />}>
                React & Angular Micro-Frontends
              </Badge>
              <Badge variant="purple" icon={<Code2 className="w-3.5 h-3.5" />}>
                Playwright 95%+ Coverage
              </Badge>
              <Badge variant="emerald" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
                Jenkins & Docker CI/CD
              </Badge>
            </div>

            {/* Action Buttons */}
            <div className="gsap-hero-fade flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2">
              <Button
                variant="glow"
                size="md"
                className="w-full sm:w-auto justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                onClick={() => {
                  const element = document.getElementById('projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Projects
              </Button>

              <Button
                variant="secondary"
                size="md"
                className="w-full sm:w-auto justify-center"
                icon={<Video className="w-4 h-4 text-cyan-400" />}
                onClick={onOpenVideoResume}
              >
                Video Resume
              </Button>

              <Button
                variant="outline"
                size="md"
                className="w-full sm:w-auto justify-center"
                icon={<FileText className="w-4 h-4" />}
                onClick={onOpenResume}
              >
                Resume PDF
              </Button>
            </div>

          </div>

          {/* Right Profile Photo & Interactive Play Overlay */}
          <div className="lg:col-span-5 gsap-hero-fade flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="relative w-full max-w-[290px] sm:max-w-sm md:max-w-md">

              {/* Outer Neon Glow Ring */}
              <div ref={avatarRingRef} className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-60 animate-pulse-slow" />

              {/* Profile Card Container */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5 shadow-2xl space-y-4 backdrop-blur-xl">

                {/* Image Showcase Frame with Play Overlay */}
                <div
                  onClick={onOpenVideoResume}
                  className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[4/4] border border-slate-800/80 shadow-inner group cursor-pointer"
                >
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Play Video Resume Icon Button positioned at Top Right */}
                  <div className="absolute top-3 right-3 z-20">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenVideoResume();
                      }}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-950/90 border-2 border-cyan-400/80 backdrop-blur-md flex items-center justify-center text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-300 hover:scale-110 transition-all duration-300 shadow-2xl shadow-cyan-500/50 group/play"
                      title="Watch Video Resume"
                      aria-label="Watch Video Resume"
                    >
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-cyan-400 text-cyan-400 group-hover/play:fill-slate-950 group-hover/play:text-slate-950 translate-x-0.5 transition-colors drop-shadow-[0_0_8px_rgba(0,242,254,0.8)]" />
                    </button>
                  </div>

                  {/* Photo Overlay Tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between bg-slate-950/85 backdrop-blur-md px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl border border-slate-800/90 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-xs font-mono font-bold text-slate-100">
                        {personalInfo.name}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/30">
                      Coimbatore, IN
                    </span>
                  </div>
                </div>

                {/* Floating Metric Callout Pills */}
                <div className="grid grid-cols-2 gap-2.5 text-left">
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-cyan-500/40 transition-colors">
                    <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-slate-400">
                      <Zap className="w-3 h-3 text-cyan-400" />
                      <span>Build Time</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-cyan-300 font-mono">30% Faster</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 truncate">Module Federation</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-purple-500/40 transition-colors">
                    <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-purple-400" />
                      <span>Playwright</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-purple-300 font-mono">95%+ Unit</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 truncate">CI/CD Gated</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
