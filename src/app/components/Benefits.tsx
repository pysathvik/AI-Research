import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section, AnimatedText } from "./Section";
import { ChevronDown, Sparkles, Clock, Globe, Zap, Users, ShieldCheck, Gamepad2, Heart, BookOpen } from "lucide-react";

const benefits = [
  {
    id: "personalized",
    title: "Personalized Learning Paths",
    icon: Sparkles,
    desc: "AI algorithms adapt to individual student paces, identifying knowledge gaps and tailoring content to their specific learning style.",
    stats: "73% of educators report improved student outcomes with adaptive learning.",
    example: "Platforms like DreamBox adjust math problems in real-time based on student interactions."
  },
  {
    id: "247",
    title: "24/7 Tutoring & Support",
    icon: Clock,
    desc: "Students no longer have to wait for office hours. AI chatbots provide instant answers to queries at any time of day.",
    stats: "AI tutoring increases student engagement by up to 30%.",
    example: "Georgia Tech's AI teaching assistant 'Jill Watson' answered forum questions accurately, fooling students into thinking it was human."
  },
  {
    id: "accessibility",
    title: "Enhanced Accessibility",
    icon: Heart,
    desc: "AI tools break down barriers for students with disabilities through text-to-speech, speech-to-text, and image descriptions.",
    stats: "Over 15% of the world's population lives with some form of disability. AI bridges this gap in digital classrooms.",
    example: "Microsoft's Immersive Reader helps dyslexic students read text more easily."
  },
  {
    id: "feedback",
    title: "Instant Feedback & Grading",
    icon: Zap,
    desc: "Teachers save hours of grading time while students receive immediate corrections, accelerating the learning loop.",
    stats: "Teachers save an average of 10-15 hours a week using AI grading tools.",
    example: "Gradescope uses AI to group similar answers, allowing rapid bulk grading of STEM assignments."
  },
  {
    id: "language",
    title: "Global Language Support",
    icon: Globe,
    desc: "Real-time translation and language modeling allow international students to access materials in their native language.",
    stats: "Real-time AI translation accuracy has surpassed 90% for major global languages.",
    example: "Duolingo uses AI to create dynamic language lessons that adapt to the user's proficiency."
  }
];

export function Benefits() {
  const [expandedId, setExpandedId] = useState<string | null>(benefits[0].id);

  return (
    <Section id="benefits" className="bg-zinc-950">
      <div className="flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/3 sticky top-32 self-start">
          <h3 className="text-emerald-400 font-medium mb-4 tracking-wide uppercase text-sm">The Upside</h3>
          <AnimatedText 
            text="How AI Enhances Education" 
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
          />
          <p className="text-zinc-400 text-lg mb-8">
            When applied correctly, artificial intelligence acts as a powerful multiplier for human potential in the classroom, offering unprecedented levels of personalization and efficiency.
          </p>
          
          <div className="hidden lg:block w-32 h-32 rounded-full bg-emerald-500/20 blur-[80px]" />
        </div>

        <div className="lg:w-2/3 space-y-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            const isExpanded = expandedId === benefit.id;
            
            return (
              <motion.div 
                key={benefit.id}
                className={`rounded-3xl border transition-colors overflow-hidden ${
                  isExpanded ? "bg-zinc-900 border-emerald-500/30" : "bg-zinc-900/30 border-white/5 hover:border-white/10"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : benefit.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      isExpanded ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-zinc-400"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-medium">{benefit.title}</h4>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-zinc-500 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 space-y-6 border-t border-white/5">
                        <p className="text-zinc-300 text-lg leading-relaxed">
                          {benefit.desc}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                            <span className="text-xs uppercase tracking-wider text-zinc-500 mb-2 block">Statistic</span>
                            <p className="text-emerald-200/80 text-sm font-medium">{benefit.stats}</p>
                          </div>
                          <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                            <span className="text-xs uppercase tracking-wider text-zinc-500 mb-2 block">Real-world Example</span>
                            <p className="text-zinc-300 text-sm">{benefit.example}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
