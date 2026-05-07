import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Section } from "./Section";

export function Debate() {
  const containerRef = React.useRef(null);
  
  return (
    <Section id="debate" className="bg-zinc-950 p-0">
      <div ref={containerRef} className="relative min-h-[80vh] flex flex-col md:flex-row">
        
        {/* Left Side */}
        <div className="flex-1 bg-indigo-950/20 p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10"
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight">
              AI <span className="text-indigo-400">Enhances</span> Learning
            </h3>
            <ul className="space-y-6">
              {[
                "Democratizes access to elite-level tutoring",
                "Removes administrative burden from teachers",
                "Provides alternative explanations instantly",
                "Prepares students for an AI-integrated workforce"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 text-xs">+</span>
                  <span className="text-lg text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="flex-1 bg-rose-950/20 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-bl from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10"
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight">
              AI <span className="text-rose-400">Reduces</span> Effort
            </h3>
            <ul className="space-y-6">
              {[
                "Bypasses the productive struggle of learning",
                "Creates a dependency loop for simple tasks",
                "Homogenizes student writing and thought",
                "Devalues human feedback and mentorship"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 text-xs">-</span>
                  <span className="text-lg text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* VS Badge */}
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-zinc-950 border border-white/10 z-20 flex items-center justify-center shadow-2xl"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          <span className="text-xl font-bold bg-gradient-to-br from-indigo-400 to-rose-400 bg-clip-text text-transparent italic">
            VS
          </span>
        </motion.div>
      </div>
    </Section>
  );
}
