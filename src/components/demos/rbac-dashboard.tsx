"use client";

import { useState } from "react";
import { BookOpen, Lock, Settings, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

type Role = "USER" | "ADMIN";

export const rbacDashboardCode = `"use client";

import { useState } from "react";

type Role = "USER" | "ADMIN";

export function RbacDashboardDemo() {
  const [role, setRole] = useState<Role>("USER");
  const canManageContent = role === "ADMIN";

  return (
    <AdminCard locked={!canManageContent} />
  );
}
`;

export function RbacDashboardDemo() {
  const [role, setRole] = useState<Role>("USER");

  return (
    <div className="w-full rounded-xl border border-slate-700/50 bg-slate-900 p-6 shadow-xl">
      <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-800 pb-4 sm:flex-row sm:items-center">
        <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
          <ShieldAlert className="text-indigo-400" size={20} />
          Controle de acesso
        </h4>

        <div className="flex rounded-lg bg-slate-800 p-1">
          <button
            onClick={() => setRole("USER")}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
              role === "USER" ? "bg-slate-600 text-white" : "text-slate-400 hover:text-white",
            )}
          >
            Sessão: usuário
          </button>
          <button
            onClick={() => setRole("ADMIN")}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
              role === "ADMIN" ? "bg-indigo-500 text-white" : "text-slate-400 hover:text-white",
            )}
          >
            Sessão: admin
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
          <BookOpen className="mb-3 text-sky-400" size={24} />
          <h5 className="mb-1 font-medium text-slate-200">Checklist</h5>
          <p className="mb-3 text-xs text-slate-400">Acesso do usuário aos próprios registros.</p>
          <button className="w-full rounded-md bg-sky-500/10 py-2 text-sm font-medium text-sky-400 transition-colors hover:bg-sky-500/20">
            Acessar
          </button>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 p-4">
          <Settings className={cn("mb-3", role === "ADMIN" ? "text-indigo-400" : "text-slate-500")} size={24} />
          <h5 className={cn("mb-1 font-medium", role === "ADMIN" ? "text-slate-200" : "text-slate-500")}>
            Gerenciar conteúdos
          </h5>
          <p className="mb-3 text-xs text-slate-400">Exclusivo para administradores.</p>

          {role === "ADMIN" ? (
            <button className="w-full rounded-md bg-indigo-500/10 py-2 text-sm font-medium text-indigo-400 transition-colors hover:bg-indigo-500/20">
              Painel admin
            </button>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 text-slate-400 backdrop-blur-[2px]">
              <Lock className="mb-2" size={20} />
              <span className="text-xs font-medium">Acesso negado</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
