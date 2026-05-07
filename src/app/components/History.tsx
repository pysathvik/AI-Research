import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Section, AnimatedText } from "./Section";
import { Book, Monitor, Wifi, Smartphone, Cpu } from "lucide-react";

const eras = [
  { year: "1400s+", title: "Books & Print", icon: Book, desc: "The Gutenberg press democratizes knowledge." },
  { year: "1980s", title: "Computers", icon: Monitor, desc: "Digital processing enters schools and universities." },
  { year: "2000s", title: "The Internet", icon: Wifi, desc: "Information becomes globally accessible instantly." },
  { year: "2010s", title: "Smart Learning", icon: Smartphone, desc: "Mobile apps and adaptive software rise." },
  { year: "2020s+", title: "AI Learning", icon: Cpu, desc: "Generative AI and personalized AI tutors emerge." },
];

export function History() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section className="bg-zinc-950/50 relative border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />
      
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h3 className="text-purple-400 font-medium mb-4 tracking-wide uppercase text-sm">Evolution</h3>
        <AnimatedText 
          text="The Evolution of Educational Technology" 
          className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
        />
      </div>

      <div ref={containerRef} className="relative max-w-4xl mx-auto pl-12 md:pl-0">
        {/* Animated Line for Desktop */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block">
          <motion.div 
            className="w-full bg-gradient-to-b from-indigo-500 to-purple-500"
            style={{ height: lineHeight }}
          />
        </div>
        
        {/* Mobile Line */}
        <div className="absolute left-[27px] top-0 bottom-0 w-px bg-white/10 md:hidden">
          <motion.div 
            className="w-full bg-gradient-to-b from-indigo-500 to-purple-500"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="space-y-24">
          {eras.map((era, index) => {
            const Icon = era.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={era.title} className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Center Node */}
                <motion.div 
                  className="absolute left-[-28px] md:left-1/2 w-14 h-14 bg-zinc-950 border-2 border-white/10 rounded-full flex items-center justify-center -translate-x-1/2 z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <Icon className="w-5 h-5 text-zinc-400" />
                </motion.div>

                {/* Content */}
                <motion.div 
                  className={`w-full md:w-[45%] ${isEven ? 'md:text-right' : 'md:text-left'}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
                    <span className="text-indigo-400 font-mono text-sm mb-2 block">{era.year}</span>
                    <h4 className="text-2xl font-medium mb-3">{era.title}</h4>
                    <p className="text-zinc-400 leading-relaxed">{era.desc}</p>
                  </div>
                </motion.div>
                
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
