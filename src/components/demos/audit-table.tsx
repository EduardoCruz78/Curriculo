"use client";

import { Activity, Clock } from "lucide-react";

export const auditTableCode = `export function AuditLogsTable({ logs }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Acao</th>
          <th>Ator</th>
          <th>Usuário afetado</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {logs.map(log => (
          <tr key={log.id}>
            <td>{log.action}</td>
            <td>{log.actorEmail}</td>
            <td>{log.targetEmail}</td>
            <td>{log.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}`;

export function AuditTableDemo() {
  const logs = [
    { id: 1, action: "UPDATE_ROLE", user: "eduardop", target: "joaosilva", desc: "USER -> ADMIN", time: "Ha 5 min" },
    { id: 2, action: "DELETE_CONTENT", user: "eduardop", target: "content_math101", desc: "Removido", time: "Ha 2 horas" },
    { id: 3, action: "CREATE_TOPIC", user: "mariat", target: "topic_react", desc: "Criado", time: "Ha 1 dia" },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-700/50 bg-slate-800/30 p-4">
        <h4 className="flex items-center gap-2 font-semibold text-white">
          <Activity className="text-pink-400" size={18} />
          Logs de auditoria
        </h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-800/50 text-xs uppercase text-slate-400">
            <tr>
              <th className="px-4 py-3">Acao</th>
              <th className="px-4 py-3">Usuário</th>
              <th className="px-4 py-3">Modificacao</th>
              <th className="px-4 py-3">Tempo</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-b border-slate-800 hover:bg-slate-800/50">
                <td className="px-4 py-3 font-medium text-pink-300">{log.action}</td>
                <td className="px-4 py-3">{log.user}</td>
                <td className="px-4 py-3">
                  {log.desc} <span className="text-slate-500">({log.target})</span>
                </td>
                <td className="flex items-center gap-1.5 px-4 py-3">
                  <Clock className="text-slate-500" size={14} /> {log.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
