"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Eye, Check, Copy } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import { cn } from "@/lib/utils";

interface CodeShowcaseProps {
  title: string;
  description: string;
  code: string;
  language?: string;
  children: React.ReactNode;
}

export function CodeShowcase({ title, description, code, language = "tsx", children }: CodeShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-slate-700/50 bg-[#0f172a]/50 shadow-xl">
      <div className="p-6 border-b border-slate-700/50">
        <h3 className="text-xl font-bold font-outfit text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700/50 bg-slate-800/30">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all",
              activeTab === "preview" 
                ? "bg-sky-500/10 text-sky-400 shadow-[inset_0_-2px_0_0_#38bdf8]" 
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/30"
            )}
          >
            <Eye size={16} /> Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all",
              activeTab === "code" 
                ? "bg-indigo-500/10 text-indigo-400 shadow-[inset_0_-2px_0_0_#818cf8]" 
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/30"
            )}
          >
            <Code size={16} /> Code
          </button>
        </div>
        
        {activeTab === "code" && (
          <button 
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            {copied ? "Copiado!" : "Copiar"}
          </button>
        )}
      </div>

      <div className="relative bg-[#0b1120] min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === "preview" ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-8 flex items-center justify-center min-h-[300px]"
            >
              <div className="w-full max-w-md">
                {children}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-4 overflow-x-auto text-sm min-h-[300px]"
            >
              <Highlight theme={themes.nightOwl} code={code} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={className} style={{ ...style, backgroundColor: "transparent", margin: 0 }}>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })} className="table-row">
                        <span className="table-cell text-right pr-4 text-slate-600 select-none">
                          {i + 1}
                        </span>
                        <span className="table-cell">
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </span>
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
