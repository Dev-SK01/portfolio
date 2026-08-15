import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BackgroundCanvas } from './components/layout/BackgroundCanvas';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { MetricsSection } from './components/sections/MetricsSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { EducationSection } from './components/sections/EducationSection';
import { ContactSection } from './components/sections/ContactSection';
import { ResumeModal } from './components/sections/ResumeModal';
import { VideoResumeModal } from './components/ui/VideoResumeModal';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isVideoResumeOpen, setIsVideoResumeOpen] = useState(false);

  useEffect(() => {
    // Refresh ScrollTrigger calculations after initial render to prevent hidden sections
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden w-full max-w-full">
      {/* Interactive Background Particle & Grid Canvas */}
      <BackgroundCanvas />

      {/* Navigation Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenVideoResume={() => setIsVideoResumeOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenVideoResume={() => setIsVideoResumeOpen(true)}
        />
        <MetricsSection />
        <ArchitectureSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenVideoResume={() => setIsVideoResumeOpen(true)}
      />

      {/* Resume PDF View/Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Video Resume Player Pop-Up Modal */}
      <VideoResumeModal
        isOpen={isVideoResumeOpen}
        onClose={() => setIsVideoResumeOpen(false)}
      />
    </div>
  );
};

export default App;
