import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "./Section";
import { Quote, BookOpen, ExternalLink, ChevronDown } from "lucide-react";

const references = [
  { source: "Stanford HAI", title: "AI Index Report 2024: Education Metrics", link: "#" },
  { source: "UNESCO", title: "Guidance for generative AI in education and research", link: "#" },
  { source: "Harvard GSE", title: "The implications of AI for learning and development", link: "#" },
  { source: "Educause", title: "Horizon Report: Teaching and Learning Edition", link: "#" },
  { source: "Cognitive Science Journal", title: "The Effort Paradox in Machine-Assisted Learning", link: "#" },
];

export function Conclusion() {
  const [showRefs, setShowRefs] = useState(false);

  return (
    <Section id="conclusion" className="bg-zinc-950 relative border-t border-white/5 pb-0">
      <div className="max-w-4xl mx-auto text-center relative z-10 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Quote className="w-16 h-16 text-indigo-500/30 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
            "AI is a tool — its impact depends entirely on how responsibly it is wielded by humans."
          </h2>
          <p className="text-xl text-zinc-400 font-light">
            It neither inherently enhances learning nor reduces effort in a vacuum. It is the pedagogical framework surrounding it that determines the outcome.
          </p>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => setShowRefs(!showRefs)}
          className="w-full py-4 border-t border-b border-white/10 flex items-center justify-between text-zinc-300 hover:text-white transition-colors"
        >
          <span className="flex items-center gap-2 font-medium">
            <BookOpen className="w-5 h-5" />
            View Academic References & Citations
          </span>
          <ChevronDown className={`w-5 h-5 transition-transform ${showRefs ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {showRefs && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {references.map((ref, i) => (
                  <a 
                    key={i} 
                    href={ref.link}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div>
                      <span className="text-xs text-indigo-400 font-medium uppercase tracking-wider block mb-1">{ref.source}</span>
                      <span className="text-zinc-300 group-hover:text-white transition-colors">{ref.title}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
