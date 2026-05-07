import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        
        <div className="flex gap-6 mb-12">
          {[Twitter, Linkedin, Github].map((Icon, i) => (
            <a 
              key={i}
              href="#"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <p className="text-zinc-500 text-sm mb-4">
          Created with passion for innovation and education.
        </p>
        
        <div className="inline-block relative">
          <span className="text-2xl font-serif italic text-zinc-300 relative z-10">
            by Sathvik
          </span>
          <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        </div>
      </div>
    </footer>
  );
}
