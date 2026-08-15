import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, FileText, Video } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenVideoResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenVideoResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900/90 py-8 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">

        {/* Main Horizontal Content Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800/80">

          {/* Brand Info */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl overflow-hidden border border-cyan-500/40 shadow-sm shrink-0">
              <img src={personalInfo.avatarUrl} alt={personalInfo.name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="text-left">
              <span className="text-lg font-extrabold text-slate-100 font-sans tracking-tight block">
                {personalInfo.name}
              </span>
              <span className="text-xs font-mono text-cyan-400/80">
                Software Engineer
              </span>
            </div>
          </div>

          {/* Center: Visitor Counter & Signature */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs font-mono">
            <p className="text-slate-300 flex items-center gap-1 font-sans">
              &lt;/&gt; with ❤️ by
              <a
                href="https://dev-sk01.github.io/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-bold hover:underline px-0.5"
              >
                Srikanth
              </a>
              ❤️
            </p>

            <span className="hidden sm:inline text-slate-700">|</span>

            <div className="inline-flex items-center gap-2 text-slate-400 bg-slate-900/90 px-3.5 py-1 rounded-full border border-slate-800/90 shadow-inner">
              <span className="text-cyan-300 font-medium">No. of Visitors</span>
              <span className="text-slate-700">|</span>
              <img
                className="visitcounter inline-block h-4.5 rounded border-none"
                src="https://hitwebcounter.com/counter/counter.php?page=17642981&style=0038&nbdigits=5&type=page&initCount=0"
                title="Counter Widget"
                alt="Visit counter For Websites"
              />
            </div>
          </div>

          {/* Social Icons & Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shrink-0"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shrink-0"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shrink-0"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
            {onOpenVideoResume && (
              <button
                onClick={onOpenVideoResume}
                className="px-3 py-2 sm:px-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-1.5 hover:bg-cyan-500 hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
              >
                <Video className="w-3.5 h-3.5" />
                <span className="sm:hidden">Video</span>
                <span className="hidden sm:inline">Video Resume</span>
              </button>
            )}
            <button
              onClick={onOpenResume}
              className="px-3 py-2 sm:px-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono font-semibold flex items-center gap-1.5 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-colors whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span className="sm:hidden">PDF</span>
              <span className="hidden sm:inline">Resume PDF</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Availability Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs font-mono text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <span className="flex items-center gap-2 text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Available for Software Engineering Roles</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
