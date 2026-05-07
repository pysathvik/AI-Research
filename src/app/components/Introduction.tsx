import React from "react";
import { motion } from "motion/react";
import { Section, AnimatedText } from "./Section";
import { BookOpen, Brain, MessageSquare, PenTool, Search, Languages, Bot } from "lucide-react";

const tools = [
  { name: "ChatGPT", desc: "General purpose AI for writing, coding, and brainstorming.", icon: MessageSquare, color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  { name: "Grammarly", desc: "AI writing assistant for grammar and tone.", icon: PenTool, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { name: "Gemini", desc: "Google's multimodal AI for research and analysis.", icon: Brain, color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { name: "Notion AI", desc: "Integrated workspace AI for summarizing and organizing.", icon: BookOpen, color: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20" },
  { name: "Khanmigo", desc: "AI tutor built for step-by-step learning.", icon: Bot, color: "bg-green-500/10 text-green-400 border-green-500/20" },
  { name: "Duolingo AI", desc: "Adaptive language learning models.", icon: Languages, color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
];

export function Introduction() {
  return (
    <Section id="intro" className="bg-zinc-950">
      <div className="max-w-3xl mb-16">
        <h3 className="text-indigo-400 font-medium mb-4 tracking-wide uppercase text-sm">Introduction</h3>
        <AnimatedText 
          text="The Dawn of Artificial Intelligence in the Classroom" 
          className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
        />
        <motion.p 
          className="text-xl text-zinc-400 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          AI tools are transforming education by automating tasks, providing personalized assistance, 
          and changing how information is consumed and produced. From AI-powered tutors to writing assistants, 
          these technologies are ubiquitous among modern students and educators.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm relative overflow-hidden group`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity ${tool.color.split(' ')[0]}`} />
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${tool.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              
              <h4 className="text-xl font-medium mb-2">{tool.name}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{tool.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
