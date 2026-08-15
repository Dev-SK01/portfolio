import React from 'react';
import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiJenkins,
  SiGit,
  SiGithubactions,
  SiCypress,
  SiVitest,
  SiGraphql,
  SiVite,
  SiWebpack,
  SiPwa,
  SiWebassembly,
  SiOpenai,
} from 'react-icons/si';
import { ShieldCheck, Activity, Bot, Layers, Terminal, Radio } from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-4 h-4' }) => {
  const normalizedName = name.toLowerCase();

  if (normalizedName.includes('react')) return <SiReact className={`${className} text-cyan-400`} />;
  if (normalizedName.includes('angular')) return <SiAngular className={`${className} text-red-500`} />;
  if (normalizedName.includes('typescript')) return <SiTypescript className={`${className} text-blue-400`} />;
  if (normalizedName.includes('javascript') || normalizedName.includes('es6')) return <SiJavascript className={`${className} text-yellow-400`} />;
  if (normalizedName.includes('html')) return <SiHtml5 className={`${className} text-orange-500`} />;
  if (normalizedName.includes('css')) return <SiCss3 className={`${className} text-blue-500`} />;
  if (normalizedName.includes('tailwind')) return <SiTailwindcss className={`${className} text-sky-400`} />;
  if (normalizedName.includes('redux') || normalizedName.includes('zustand')) return <SiRedux className={`${className} text-purple-400`} />;
  if (normalizedName.includes('node')) return <SiNodedotjs className={`${className} text-emerald-500`} />;
  if (normalizedName.includes('express')) return <SiExpress className={`${className} text-slate-200`} />;
  if (normalizedName.includes('mongo')) return <SiMongodb className={`${className} text-emerald-400`} />;
  if (normalizedName.includes('sql') || normalizedName.includes('mysql')) return <SiMysql className={`${className} text-cyan-500`} />;
  if (normalizedName.includes('docker')) return <SiDocker className={`${className} text-sky-400`} />;
  if (normalizedName.includes('jenkins')) return <SiJenkins className={`${className} text-red-400`} />;
  if (normalizedName.includes('github actions')) return <SiGithubactions className={`${className} text-blue-400`} />;
  if (normalizedName.includes('git')) return <SiGit className={`${className} text-orange-400`} />;
  if (normalizedName.includes('cypress')) return <SiCypress className={`${className} text-emerald-300`} />;
  if (normalizedName.includes('vitest')) return <SiVitest className={`${className} text-yellow-500`} />;
  if (normalizedName.includes('playwright')) return <ShieldCheck className={`${className} text-emerald-400`} />;
  if (normalizedName.includes('graphql')) return <SiGraphql className={`${className} text-pink-500`} />;
  if (normalizedName.includes('vite')) return <SiVite className={`${className} text-purple-400`} />;
  if (normalizedName.includes('webpack')) return <SiWebpack className={`${className} text-sky-400`} />;
  if (normalizedName.includes('pwa')) return <SiPwa className={`${className} text-indigo-400`} />;
  if (normalizedName.includes('wasm') || normalizedName.includes('webassembly')) return <SiWebassembly className={`${className} text-indigo-400`} />;
  if (normalizedName.includes('claude') || normalizedName.includes('openai') || normalizedName.includes('gemini') || normalizedName.includes('llm') || normalizedName.includes('agent')) return <Bot className={`${className} text-cyan-300`} />;
  if (normalizedName.includes('socket') || normalizedName.includes('webrtc')) return <Radio className={`${className} text-cyan-400`} />;
  if (normalizedName.includes('telemetry') || normalizedName.includes('metrics') || normalizedName.includes('lighthouse')) return <Activity className={`${className} text-rose-400`} />;
  if (normalizedName.includes('micro') || normalizedName.includes('federation')) return <Layers className={`${className} text-cyan-300`} />;

  return <Terminal className={`${className} text-slate-400`} />;
};
