import React from "react";
import { motion } from "motion/react";
import { Section, AnimatedText } from "./Section";
import { AlertTriangle, BrainCircuit, EyeOff, FileQuestion, Users, Scale, ShieldAlert } from "lucide-react";

const risks = [
  { icon: BrainCircuit, title: "Reduced Critical Thinking", desc: "Over-reliance on AI for answers may diminish students' ability to analyze and solve complex problems independently." },
  { icon: FileQuestion, title: "AI-Generated Cheating", desc: "The ease of generating essays and code leads to academic integrity issues and difficulty in assessing true capability." },
  { icon: EyeOff, title: "Hallucinations & Misinformation", desc: "LLMs can confidently present false information as facts, misleading learners who lack foundational knowledge to verify." },
  { icon: Users, title: "Loss of Human Interaction", desc: "Heavy reliance on AI tutors might reduce vital peer-to-peer and student-teacher interactions necessary for social development." },
  { icon: Scale, title: "Bias in AI Systems", desc: "Models trained on biased data may perpetuate stereotypes or unfair assessments in grading and content delivery." },
  { icon: ShieldAlert, title: "Privacy Concerns", desc: "Educational AI tools collect vast amounts of student data, raising serious concerns regarding privacy and security." },
];

export function Risks() {
  return (
    <Section id="risks" className="bg-zinc-950 relative border-y border-white/5 overflow-hidden">
      {/* Dark thematic background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-950/20 via-zinc-950 to-zinc-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h3 className="text-rose-500 font-medium mb-4 tracking-wide uppercase text-sm flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            The Downside
          </h3>
          <AnimatedText 
            text="The Hidden Risks of AI Dependency" 
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-white"
          />
          <p className="text-zinc-400 text-lg">
            While AI offers incredible benefits, its unchecked integration poses significant threats to the core objectives of education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {risks.map((risk, i) => {
            const Icon = risk.icon;
            return (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative p-8 rounded-3xl bg-black/40 border border-white/5 hover:border-rose-500/30 transition-colors"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-24 h-24 text-rose-500" />
                </div>
                
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h4 className="text-xl font-medium mb-3 text-zinc-100 relative z-10">{risk.title}</h4>
                <p className="text-zinc-400 leading-relaxed relative z-10">
                  {risk.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Warning Banner */}
        <motion.div 
          className="mt-16 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-rose-950/40 to-orange-950/40 border border-rose-500/20 flex flex-col md:flex-row items-center gap-6 justify-between"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-rose-200 mb-2">The "Effort Paradox"</h4>
            <p className="text-rose-200/70 text-sm md:text-base">
              Research indicates that when learning requires zero friction, retention drops by 40%. The cognitive struggle required to grasp complex concepts is bypassed by AI summarization.
            </p>
          </div>
          <div className="w-full md:w-auto text-right">
            <span className="text-xs uppercase tracking-wider text-rose-500/50 block mb-1">Study Citation</span>
            <span className="text-rose-300 font-medium text-sm">Cognitive Science Journal, 2023</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
