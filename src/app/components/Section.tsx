import React from "react";
import { motion } from "motion/react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function AnimatedText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <motion.h2 
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.05 }
        }
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}
