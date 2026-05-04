"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Topic {
  id: string;
  title: string;
  completed: boolean;
  loading: boolean;
}

export const studyChecklistCode = `"use client";

import { useState } from "react";

export function StudyChecklistDemo() {
  const [topics, setTopics] = useState(initialTopics);

  async function toggleTopic(id: string) {
    setTopics(prev => prev.map(topic =>
      topic.id === id ? { ...topic, loading: true } : topic
    ));

    await trpc.checklist.toggle.mutate({ topicId: id });

    setTopics(prev => prev.map(topic =>
      topic.id === id
        ? { ...topic, completed: !topic.completed, loading: false }
        : topic
    ));
  }
}
`;

export function StudyChecklistDemo() {
  const [topics, setTopics] = useState<Topic[]>([
    { id: "1", title: "Use cases em packages/core", completed: true, loading: false },
    { id: "2", title: "Routers tRPC protegidos", completed: false, loading: false },
    { id: "3", title: "PostgreSQL e Prisma Migrations", completed: false, loading: false },
  ]);

  const toggleTopic = async (id: string) => {
    if (topics.find((topic) => topic.id === id)?.loading) return;

    setTopics((prev) => prev.map((topic) => (topic.id === id ? { ...topic, loading: true } : topic)));
    await new Promise((resolve) => setTimeout(resolve, 600));
    setTopics((prev) =>
      prev.map((topic) =>
        topic.id === id ? { ...topic, completed: !topic.completed, loading: false } : topic,
      ),
    );
  };

  const completedCount = topics.filter((topic) => topic.completed).length;
  const progress = Math.round((completedCount / topics.length) * 100);

  return (
    <div className="w-full rounded-xl border border-slate-700/50 bg-slate-900 p-6 shadow-xl">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h4 className="mb-1 text-lg font-semibold text-white">Módulo Backend</h4>
          <p className="text-sm text-slate-400">Progresso do usuário</p>
        </div>
        <div className="text-2xl font-bold text-sky-400">{progress}%</div>
      </div>

      <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-slate-800">
        <div className="h-full bg-sky-500 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <div className="space-y-3">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => toggleTopic(topic.id)}
            disabled={topic.loading}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all",
              topic.completed
                ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-100"
                : "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-600 hover:bg-slate-800",
            )}
          >
            {topic.loading ? (
              <Loader2 className="shrink-0 animate-spin text-sky-400" size={20} />
            ) : topic.completed ? (
              <CheckCircle2 className="shrink-0 text-emerald-400" size={20} />
            ) : (
              <Circle className="shrink-0 text-slate-500" size={20} />
            )}
            <span className={cn("font-medium", topic.completed && "opacity-70 line-through")}>{topic.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
