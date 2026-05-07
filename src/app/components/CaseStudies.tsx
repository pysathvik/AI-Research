import React from "react";
import { motion } from "motion/react";
import { Section, AnimatedText } from "./Section";
import { GraduationCap, Building2, Laptop } from "lucide-react";

const studies = [
  {
    institution: "Harvard University",
    icon: GraduationCap,
    title: "CS50's AI Duck",
    desc: "Harvard's flagship computer science course implemented a rubber duck AI assistant based on GPT-4. Rather than giving students answers, it guides them to find bugs themselves.",
    result: "Reduced staff workload by 40% while maintaining high student satisfaction and learning outcomes.",
    type: "Positive Impact"
  },
  {
    institution: "Los Angeles Unified",
    icon: Building2,
    title: "The 'Ed' Chatbot Failure",
    desc: "LAUSD launched an AI chatbot named 'Ed' intended to be an all-knowing assistant for students and parents. It suffered from hallucinations and data privacy issues.",
    result: "The district had to suspend the program, highlighting the risks of rushing AI deployment without strict guardrails.",
    type: "Negative Impact"
  },
  {
    institution: "Khan Academy",
    icon: Laptop,
    title: "Khanmigo Integration",
    desc: "Implemented Khanmigo, an AI tutor designed specifically for education with strict safety boundaries that refuses to do the work for the student.",
    result: "Students showed deeper engagement with complex math problems, treating the AI as a collaborator rather than a shortcut.",
    type: "Positive Impact"
  }
];

export function CaseStudies() {
  return (
    <Section id="case-studies" className="bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-amber-500 font-medium mb-4 tracking-wide uppercase text-sm">Real-World Application</h3>
            <AnimatedText 
              text="Case Studies in Action" 
              className="text-4xl md:text-5xl font-semibold tracking-tight"
            />
          </div>
          <p className="text-zinc-400 max-w-md md:text-right">
            Examining how different educational institutions have integrated AI, the successes they've celebrated, and the failures they've endured.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {studies.map((study, i) => {
            const Icon = study.icon;
            const isPositive = study.type === "Positive Impact";
            
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative h-full flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 h-full flex flex-col backdrop-blur-sm hover:border-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-zinc-300" />
                      </div>
                      <span className="text-sm font-medium text-zinc-400">{study.institution}</span>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      isPositive ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"
                    }`}>
                      {study.type}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl font-medium mb-4">{study.title}</h4>
                  <p className="text-zinc-400 mb-8 flex-grow">{study.desc}</p>
                  
                  <div className="pt-6 border-t border-white/10 mt-auto">
                    <span className="text-xs uppercase tracking-wider text-zinc-500 block mb-2">Outcome</span>
                    <p className="text-zinc-200 text-sm font-medium">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
