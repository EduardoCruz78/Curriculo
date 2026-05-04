"use client";

import { useState } from "react";
import { Ear, HandMetal, PlayCircle, Settings2, Type } from "lucide-react";
import { cn } from "@/lib/utils";

export const accessibilityCode = `"use client";

import { useState } from "react";

export function AccessibilityDemo() {
  const [features, setFeatures] = useState<string[]>([]);

  function toggleFeature(feature: string) {
    setFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(item => item !== feature)
        : [...prev, feature]
    );
  }
}
`;

export function AccessibilityDemo() {
  const [activeFeatures, setActiveFeatures] = useState<string[]>([]);

  const toggleFeature = (feature: string) => {
    setActiveFeatures((prev) =>
      prev.includes(feature) ? prev.filter((item) => item !== feature) : [...prev, feature],
    );
  };

  const isEnabled = (feature: string) => activeFeatures.includes(feature);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900 shadow-xl">
      <div className="relative flex aspect-video items-center justify-center bg-black">
        <PlayCircle className="text-white/50 transition-colors hover:text-sky-400" size={48} />

        {isEnabled("libras") && (
          <div className="absolute bottom-4 right-4 flex h-32 w-24 items-center justify-center rounded-lg border-2 border-sky-500 bg-slate-800 shadow-lg">
            <span className="text-xs font-medium text-sky-400">LIBRAS</span>
          </div>
        )}

        {isEnabled("captions") && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded bg-black/80 px-4 py-1.5 text-sm font-medium text-white">
            [Música de introdução tocando]
          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-700/50 bg-slate-800/50 p-4 sm:flex-row">
        <div className="flex items-center gap-2 font-medium text-slate-300">
          <Settings2 className="text-sky-400" size={18} />
          Opções de acessibilidade
        </div>

        <div className="flex flex-wrap gap-2">
          <ToggleButton active={isEnabled("libras")} onClick={() => toggleFeature("libras")} icon={<HandMetal size={14} />} label="Libras" />
          <ToggleButton active={isEnabled("captions")} onClick={() => toggleFeature("captions")} icon={<Type size={14} />} label="Transcrição" />
          <ToggleButton active={isEnabled("audioDesc")} onClick={() => toggleFeature("audioDesc")} icon={<Ear size={14} />} label="Audiodescrição" />
        </div>
      </div>

      {isEnabled("audioDesc") && (
        <div className="border-t border-purple-500/20 bg-purple-500/10 p-3 text-center text-xs text-purple-300">
          Audiodescrição ativada: um canal secundário descreve o que acontece na tela.
        </div>
      )}
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
        active ? "bg-sky-500 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600",
      )}
    >
      {icon}
      {label}
    </button>
  );
}
