"use client";

import { useState } from "react";
import { lines, type Lang, type LineId } from "@/data/resume";

type Station = {
  x: number;
  y: number;
  label?: { pt: string; en: string };
  /** shorter label for narrow screens */
  short?: { pt: string; en: string };
  /** where the label sits relative to the station */
  at: "left" | "right" | "above" | "below" | "above-right";
  interchange?: boolean;
  target: LineId;
};

type Route = { id: LineId; d: string; name: string };

const routes: Route[] = [
  { id: "edu", name: "EduPlatformJS", d: "M150 220 V420" },
  { id: "desafio", name: "DesafioBackend", d: "M280 420 H500" },
  { id: "dashboard", name: "SchedulingDashboard", d: "M60 320 H450 L540 230 H640" },
  { id: "relay", name: "WebhookRelay", d: "M280 140 H450 L540 230" },
  { id: "api", name: "SchedulingApi", d: "M280 40 V420" },
];

const stations: Station[] = [
  { x: 280, y: 40, at: "right", target: "api", label: { pt: "Horários livres", en: "Free slots" } },
  { x: 280, y: 140, at: "left", interchange: true, target: "relay", label: { pt: "Eventos (outbox)", en: "Events (outbox)" }, short: { pt: "Eventos", en: "Events" } },
  { x: 280, y: 230, at: "right", target: "api", label: { pt: "Reservas sem conflito", en: "Conflict-free booking" } },
  { x: 280, y: 320, at: "below", interchange: true, target: "dashboard", label: { pt: "API admin", en: "Admin API" } },
  { x: 280, y: 420, at: "left", interchange: true, target: "desafio", label: { pt: "C# · DDD", en: "C# · DDD" } },
  { x: 370, y: 140, at: "above", target: "relay", label: { pt: "Fila e retry", en: "Queue & retry" } },
  { x: 540, y: 230, at: "above-right", interchange: true, target: "relay", label: { pt: "Webhooks assinados", en: "Signed webhooks" }, short: { pt: "Webhooks", en: "Webhooks" } },
  { x: 60, y: 320, at: "above", target: "dashboard", label: { pt: "Agenda", en: "Schedule" } },
  { x: 150, y: 320, at: "above-right", interchange: true, target: "edu", label: { pt: "Next.js", en: "Next.js" } },
  { x: 375, y: 320, at: "below", target: "dashboard", label: { pt: "KPIs", en: "KPIs" } },
  { x: 640, y: 230, at: "below", target: "dashboard", label: { pt: "Feed ao vivo", en: "Live feed" } },
  { x: 150, y: 220, at: "left", target: "edu", label: { pt: "Login Google", en: "Google sign-in" } },
  { x: 150, y: 420, at: "left", target: "edu", label: { pt: "RBAC", en: "RBAC" } },
  { x: 400, y: 420, at: "below", target: "desafio", label: { pt: "Domínio KPI", en: "KPI domain" } },
  { x: 500, y: 420, at: "below", target: "desafio", label: { pt: "TDD", en: "TDD" } },
];

/** Which lines pass through a station, so focusing a line keeps its interchanges lit. */
function linesAt(s: Station): LineId[] {
  const at: LineId[] = [];
  if (s.x === 280 && s.y >= 40 && s.y <= 420) at.push("api");
  if (s.y === 140 && s.x >= 280) at.push("relay");
  if (s.x === 540 && s.y === 230) at.push("relay", "dashboard");
  if (s.y === 320 || (s.y === 230 && s.x >= 540)) at.push("dashboard");
  if (s.x === 150) at.push("edu");
  if (s.y === 420 && s.x >= 280) at.push("desafio");
  return at;
}

function labelProps(s: Station) {
  switch (s.at) {
    case "left":
      return { x: s.x - 16, y: s.y + 5, textAnchor: "end" as const };
    case "right":
      return { x: s.x + 16, y: s.y + 5, textAnchor: "start" as const };
    case "above":
      return { x: s.x, y: s.y - 16, textAnchor: "middle" as const };
    case "below":
      return { x: s.x, y: s.y + 28, textAnchor: "middle" as const };
    case "above-right":
      return { x: s.x + 14, y: s.y - 16, textAnchor: "start" as const };
  }
}

export function NetworkMap({ lang, title, hint }: { lang: Lang; title: string; hint: string }) {
  const [active, setActive] = useState<LineId | null>(null);

  const dim = (ids: LineId[]) => active !== null && !ids.includes(active);

  return (
    <figure className="network" aria-labelledby="map-title">
      <svg
        viewBox="0 0 720 470"
        className="network-svg"
        role="group"
        aria-labelledby="map-title map-hint"
        onPointerLeave={() => setActive(null)}
      >
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {routes.map((r, i) => (
            <g
              key={r.id}
              className="route"
              data-dim={dim([r.id]) || undefined}
              style={{ ["--i" as string]: i }}
              onPointerEnter={() => setActive(r.id)}
            >
              {r.id === "edu" && <path d={r.d} stroke="var(--ink)" strokeWidth={13} className="route-path" pathLength={1} />}
              <path d={r.d} stroke={lines[r.id].color} strokeWidth={r.id === "edu" ? 8 : 10} className="route-path" pathLength={1} />
              {/* wide invisible hit area */}
              <path d={r.d} stroke="transparent" strokeWidth={28} />
            </g>
          ))}
        </g>

        {stations.map((s) => {
          const through = linesAt(s);
          const lp = labelProps(s);
          return (
            <a
              key={`${s.x}-${s.y}`}
              href={`#${s.target}`}
              className="station"
              data-dim={dim(through) || undefined}
              onFocus={() => setActive(s.target)}
              onBlur={() => setActive(null)}
              aria-label={s.label?.[lang]}
            >
              {s.interchange ? (
                <circle cx={s.x} cy={s.y} r={10} fill="var(--paper)" stroke="var(--ink)" strokeWidth={4} />
              ) : (
                <circle cx={s.x} cy={s.y} r={6} fill="var(--paper)" stroke={lines[through[0] ?? s.target].color} strokeWidth={3.5} />
              )}
              {s.label && (
                <text
                  {...lp}
                  className={`station-label${s.interchange ? " is-interchange" : ""}${s.short ? " has-short" : ""}`}
                >
                  {s.label[lang]}
                </text>
              )}
              {s.short && (
                <text {...lp} className="station-label is-interchange is-short" aria-hidden="true">
                  {s.short[lang]}
                </text>
              )}
            </a>
          );
        })}
      </svg>

      <figcaption className="network-legend">
        <p id="map-title" className="legend-title">
          {title}
        </p>
        <ul className="legend-list">
          {(["api", "relay", "dashboard", "edu", "desafio"] as LineId[]).map((id) => {
            const r = routes.find((x) => x.id === id)!;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="legend-item"
                  data-dim={dim([id]) || undefined}
                  onPointerEnter={() => setActive(id)}
                  onPointerLeave={() => setActive(null)}
                  onFocus={() => setActive(id)}
                  onBlur={() => setActive(null)}
                >
                  <span className="roundel roundel-sm" style={{ background: lines[id].color, color: lines[id].ink }} aria-hidden="true">
                    {lines[id].number}
                  </span>
                  {r.name}
                </a>
              </li>
            );
          })}
        </ul>
        <p id="map-hint" className="legend-hint">
          {hint}
        </p>
      </figcaption>
    </figure>
  );
}
