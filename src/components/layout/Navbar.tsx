import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Terminal, Zap, Layers, Briefcase, FolderGit2, Cpu, Send, ArrowUp, Video } from 'lucide-react';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenVideoResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenVideoResume }) => {
  const [isDocked, setIsDocked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: <Terminal className="w-4 h-4" /> },
    { id: 'metrics', label: 'Impact', icon: <Zap className="w-4 h-4" /> },
    { id: 'architecture', label: 'Architecture', icon: <Layers className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Cpu className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Send className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsDocked(scrollY > 80);

      // Active section detection
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Horizontal Navbar (Visible when at top of page) */}
      <header
        className={`hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-40 max-w-7xl w-[94%] flex-row justify-between items-center py-3 px-6 rounded-full bg-slate-950/80 border border-slate-800/80 backdrop-blur-xl shadow-xl transition-all duration-500 ease-out transform ${
          isDocked
            ? '-translate-y-16 opacity-0 pointer-events-none'
            : 'translate-y-0 opacity-100'
        }`}
      >
        {/* Brand Logo / Avatar */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-11 h-11 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/20 shrink-0 group-hover:scale-105 transition-transform">
            <img src={personalInfo.avatarUrl} alt={personalInfo.name} className="w-full h-full object-cover object-top" />
          </div>
          <div className="text-left">
            <span className="text-base font-extrabold text-slate-100 group-hover:text-cyan-400 transition-colors tracking-tight block">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 tracking-wider">
              SOFTWARE ENGINEER
            </span>
          </div>
        </a>

        {/* Horizontal Navigation Items */}
        <nav className="flex flex-row items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex flex-row items-center gap-2.5">
          {onOpenVideoResume && (
            <Button
              variant="secondary"
              size="sm"
              icon={<Video className="w-4 h-4 text-cyan-400" />}
              onClick={onOpenVideoResume}
            >
              Video Resume
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            icon={<FileText className="w-4 h-4" />}
            onClick={onOpenResume}
          >
            Resume PDF
          </Button>
          <Button
            variant="primary"
            size="sm"
            icon={<Send className="w-4 h-4" />}
            onClick={() => scrollToSection('contact')}
          >
            Hire Me
          </Button>
        </div>
      </header>

      {/* Vertical Left Sidebar Dock (Slides in from left when user scrolls) */}
      <aside
        className={`hidden md:flex fixed top-1/2 -translate-y-1/2 left-5 z-50 flex-col items-center gap-2.5 p-3 rounded-3xl bg-slate-950/95 border border-slate-800/90 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10 transition-all duration-500 ease-out transform ${
          isDocked
            ? 'translate-x-0 opacity-100 scale-100'
            : '-translate-x-32 opacity-0 scale-90 pointer-events-none'
        }`}
      >
        {/* Avatar Mini Icon / Back to Top */}
        <button
          onClick={() => scrollToSection('hero')}
          className="relative w-11 h-11 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/20 shrink-0 hover:scale-110 transition-transform group mb-1"
          title="Back to Top"
        >
          <img src={personalInfo.avatarUrl} alt={personalInfo.name} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <ArrowUp className="w-4 h-4 text-slate-950 font-bold" />
          </div>
        </button>

        {/* Vertical Nav Item Dock Icons */}
        <div className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <div key={item.id} className="relative group flex items-center">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`p-3 rounded-2xl transition-all duration-300 relative flex items-center justify-center ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30 scale-110'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-transparent hover:border-slate-800'
                  }`}
                  aria-label={item.label}
                >
                  {item.icon}

                  {/* Active glowing indicator pill */}
                  {isActive && (
                    <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-4 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </button>

                {/* Sleek Tooltip on Hover */}
                <div className="absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-xl z-50">
                  <span className="text-cyan-400 mr-1.5">#</span>
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Video Resume Action Icon */}
        {onOpenVideoResume && (
          <button
            onClick={onOpenVideoResume}
            className="mt-1 p-3 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 group relative"
            title="Watch Video Resume"
          >
            <Video className="w-4 h-4" />
            <div className="absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300 text-xs font-mono font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-xl z-50">
              Watch Video Resume
            </div>
          </button>
        )}

        {/* Bottom PDF Resume Action Icon */}
        <button
          onClick={onOpenResume}
          className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-all duration-300 group relative"
          title="Inspect Resume PDF"
        >
          <FileText className="w-4 h-4" />
          <div className="absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-xl z-50">
            PDF Resume
          </div>
        </button>
      </aside>

      {/* Mobile Top Header (Clean floating header for small devices) */}
      <header className="md:hidden fixed top-3 left-3 right-3 sm:left-4 sm:right-4 z-50 flex items-center justify-between px-3 py-2.5 sm:px-3.5 sm:py-3 rounded-2xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-xl shadow-2xl max-w-[calc(100vw-1.5rem)] mx-auto">
        <div className="flex items-center gap-2 shrink truncate">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-cyan-400/60 shrink-0">
            <img src={personalInfo.avatarUrl} alt={personalInfo.name} className="w-full h-full object-cover object-top" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-slate-100 font-mono truncate max-w-[120px] sm:max-w-none">
            {personalInfo.name}
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono flex items-center gap-1"
            aria-label="Inspect Resume PDF"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-2xl border border-slate-800 rounded-2xl p-4 mt-2 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-3 ${
                  activeSection === item.id
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <span className="text-cyan-400">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                icon={<Send className="w-4 h-4" />}
                onClick={() => scrollToSection('contact')}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
