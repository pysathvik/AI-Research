import React from "react";
import { motion } from "motion/react";
import { Section, AnimatedText } from "./Section";
import { Sparkles, Glasses, Network, Fingerprint } from "lucide-react";

export function Future() {
  return (
    <Section className="bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10 text-center mb-20">
        <h3 className="text-indigo-400 font-medium mb-4 tracking-wide uppercase text-sm">Looking Ahead</h3>
        <AnimatedText 
          text="The Future of Education" 
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {[
          { icon: Fingerprint, title: "Hyper-Personalization", desc: "Curricula that adapt in real-time to a student's biometric and cognitive feedback." },
          { icon: Glasses, title: "VR + AI Classrooms", desc: "Immersive historical simulations guided by AI avatars of historical figures." },
          { icon: Sparkles, title: "Continuous Assessment", desc: "The death of standardized tests, replaced by passive AI skill evaluation." },
          { icon: Network, title: "Smart Campuses", desc: "Physical spaces optimized by AI for collaboration, resource allocation, and safety." }
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.05] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-medium mb-3">{item.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
