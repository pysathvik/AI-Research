import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-[150px] mix-blend-screen" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            A Modern Research Study
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[1.1] mb-6"
        >
          AI Tools in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-200">
            Education
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mb-12"
        >
          Do they enhance learning or reduce effort? An in-depth analysis of artificial intelligence in modern academics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          <a
            href="#intro"
            className="group relative px-8 py-4 bg-white text-zinc-950 rounded-full font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              Explore Research
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>

          <div className="text-sm text-zinc-500 font-medium tracking-wide uppercase letter-spacing-2">
            by Sathvik
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-white"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
