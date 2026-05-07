import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";

import { Cursor } from "./components/Cursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { History } from "./components/History";
import { Benefits } from "./components/Benefits";
import { Risks } from "./components/Risks";
import { Research } from "./components/Research";
import { CaseStudies } from "./components/CaseStudies";
import { Debate } from "./components/Debate";
import { Future } from "./components/Future";
import { Conclusion } from "./components/Conclusion";
import { Footer } from "./components/Footer";

function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div 
        className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full mb-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-zinc-400 font-mono text-sm uppercase tracking-widest"
      >
        Loading Research Data...
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <div className="bg-zinc-950 text-zinc-50 min-h-screen selection:bg-indigo-500/30 font-sans overflow-hidden">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Cursor />
          
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 origin-left z-50"
            style={{ scaleX }}
          />

          <Navbar />

          <main className="relative z-10">
            <Hero />
            <Introduction />
            <History />
            <Benefits />
            <Risks />
            <Research />
            <CaseStudies />
            <Debate />
            <Future />
            <Conclusion />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}
