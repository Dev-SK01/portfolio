import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/portfolioData';
import { Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${personalInfo.name} - Software Engineer Resume`}
      maxWidth="4xl"
    >
      <div className="space-y-6">
        
        {/* Action Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-200">
                Srikanth_N_Software_Engineer.pdf
              </div>
              <div className="text-xs font-mono text-slate-400">
                121 KB · Verified Document
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={personalInfo.resumePdfUrl}
              download="Srikanth_N_Software_Engineer_Resume.pdf"
            >
              <Button
                variant="glow"
                size="sm"
                icon={<Download className="w-4 h-4" />}
              >
                Download PDF
              </Button>
            </a>
            
            <a
              href={personalInfo.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Open in Tab
              </Button>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer Frame */}
        <div className="w-full h-[65vh] rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
          <iframe
            src={`${personalInfo.resumePdfUrl}#toolbar=0&navpanes=0`}
            title="Srikanth N Resume PDF"
            className="w-full h-full border-0"
          />
        </div>

        {/* Quick Highlights Summary for Recruiters */}
        <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-2">
          <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            Quick Executive Summary for Recruiters
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Micro-Frontends: React & Angular Module Federation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>DevOps: Jenkins Multi-Stage Pipelines & Docker</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Testing: Playwright 95%+ Unit Coverage & Vitest</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>AI Engineering: LLM Tool Calling & Claude Code</span>
            </div>
          </div>
        </div>

      </div>
    </Modal>
  );
};
