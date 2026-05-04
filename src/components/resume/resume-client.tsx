"use client";

import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Server,
  Sparkles,
  Terminal,
  UserCheck,
} from "lucide-react";
import { CodeShowcase } from "@/components/ui/code-showcase";
import { AccessibilityDemo, accessibilityCode } from "@/components/demos/accessibility-panel";
import { AuditTableDemo, auditTableCode } from "@/components/demos/audit-table";
import { RbacDashboardDemo, rbacDashboardCode } from "@/components/demos/rbac-dashboard";
import { StudyChecklistDemo, studyChecklistCode } from "@/components/demos/study-checklist";
import { ZodFormDemo, zodFormCode } from "@/components/demos/zod-form";
import {
  additionalInfo,
  atsKeywords,
  education,
  experiences,
  profile,
  project,
  summary,
  techGroups,
} from "@/data/resume";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "ats", label: "Currículo" },
  { id: "github", label: "Projeto Principal" },
  { id: "demos", label: "Demos" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function ResumeClient() {
  const [activeTab, setActiveTab] = useState<TabId>("ats");
  const activeIndex = useMemo(() => tabs.findIndex((tab) => tab.id === activeTab), [activeTab]);

  return (
    <main className="min-h-screen px-3 py-6 text-slate-200 sm:px-6 sm:py-10 lg:px-8">
      <motion.div
        variants={container}
        initial={false}
        animate="visible"
        className="mx-auto flex w-full max-w-6xl flex-col gap-9 sm:gap-14"
      >
        <motion.header variants={item} className="space-y-7 pt-5 text-center sm:space-y-8 sm:pt-8">
          <div className="glass mx-auto flex w-[calc(100vw-2rem)] max-w-full flex-col items-center justify-center gap-2 rounded-2xl px-3 py-2 text-center text-xs font-medium leading-5 tracking-wide text-sky-300 sm:inline-flex sm:w-auto sm:flex-row sm:rounded-full sm:px-4 sm:py-1.5 sm:text-sm">
            <CheckCircle2 className="shrink-0" size={16} />
            <span className="block w-full sm:hidden">Disponível para Node.js, TS e Full Stack</span>
            <span className="hidden sm:block">{profile.availability}</span>
          </div>

          <div className="space-y-5">
            <p className="mx-auto max-w-xs text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-slate-500 sm:max-w-none sm:text-sm sm:tracking-[0.24em]">
              Currículo interativo para GitHub e Vercel
            </p>
            <h1 className="font-outfit text-4xl font-bold leading-tight tracking-normal text-white min-[380px]:text-[2.75rem] sm:text-6xl lg:text-7xl">
              <span className="block sm:inline">Eduardo</span>{" "}
              <span className="text-gradient block sm:inline">Proença</span>
            </h1>
            <p className="mx-auto max-w-[calc(100vw-1.5rem)] text-base font-medium leading-7 text-slate-400 sm:max-w-3xl sm:text-xl sm:leading-8 lg:text-2xl">
              <span className="sm:hidden">
                Full Stack Node/TS
                <br />
                React e Next.js
              </span>
              <span className="hidden sm:inline">{profile.role}</span>
            </p>
          </div>

          <div className="mx-auto grid w-[calc(100vw-1.5rem)] max-w-3xl gap-3 text-sm text-slate-300 sm:w-full sm:grid-cols-2">
            <ContactLink icon={<Mail size={17} />} href={`mailto:${profile.email}`} label={profile.email} />
            <ContactLink icon={<Phone size={17} />} href={`tel:${profile.phone}`} label={profile.phone} />
            <ContactLink icon={<Code2 size={17} />} href={profile.github} label="GitHub" external />
            <ContactLink icon={<MapPin size={17} />} label={profile.location} />
          </div>
        </motion.header>

        <motion.section variants={item} className="glass w-[calc(100vw-1.5rem)] max-w-full overflow-hidden rounded-2xl p-1 sm:w-full">
          <div className="rounded-[14px] bg-[#0f172a]/80 p-4 sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
                  <Sparkles size={16} />
                  EduPlatformJS alignment
                </div>
                <h2 className="font-outfit text-xl font-bold leading-tight text-white sm:text-3xl">
                  Baseado no projeto real em monorepo
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  <span className="sm:hidden">
                    Trilha Node/TS baseada no EduPlatformJS.
                    <br />
                    Next.js, tRPC, Prisma e PostgreSQL.
                    <br />
                    Auth.js, RBAC, testes e CI.
                  </span>
                  <span className="hidden sm:inline">
                    Esta versão separa a trilha Node/JS/TS da futura trilha C#/.NET e destaca o que existe no EduPlatformJS:
                    Next.js, tRPC, Prisma, PostgreSQL, Auth.js, RBAC, ownership, testes e CI.
                  </span>
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{metric.label}</div>
                    <div className="mt-2 text-lg font-bold text-sky-300">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.nav variants={item} className="sticky top-0 z-20 -mx-3 flex justify-start overflow-x-auto px-3 py-2 sm:mx-0 sm:justify-center sm:px-0">
          <div className="glass flex min-w-max rounded-xl p-1">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition-colors sm:px-5",
                  activeIndex === index
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-950/40"
                    : "text-slate-400 hover:bg-slate-800/70 hover:text-slate-100",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.nav>

        {activeTab === "ats" && <AtsView />}
        {activeTab === "github" && <GithubView />}
        {activeTab === "demos" && <DemosView />}
      </motion.div>
    </main>
  );
}

function AtsView() {
  return (
    <motion.div variants={container} initial={false} animate="visible" className="grid gap-5 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <motion.section variants={item} className="glass relative overflow-hidden rounded-2xl p-5 sm:p-8 lg:col-span-2">
        <div className="absolute inset-y-0 left-0 w-2 gradient-bg" />
        <SectionTitle icon={<Terminal />} title="Resumo profissional" />
        <div className="mt-5 space-y-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          {summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </motion.section>

      <motion.section variants={item} className="space-y-5">
        <SectionTitle icon={<Layers3 />} title="Hard Skills" />
        <div className="grid gap-4">
          {techGroups.map((group) => (
            <div key={group.title} className="glass rounded-2xl p-4 transition-colors hover:bg-slate-800/60 sm:p-5">
              <h3 className="font-outfit text-lg font-bold text-white sm:text-xl">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700/50 bg-slate-900/50 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:border-sky-500/50 hover:text-sky-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={item} className="space-y-5">
        <SectionTitle icon={<Briefcase />} title="Experiência" />
        <div className="space-y-5">
          {experiences.map((experience) => (
            <article key={experience.company} className="glass rounded-2xl p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-outfit text-lg font-bold text-white sm:text-xl">{experience.company}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-400">{experience.role}</p>
                </div>
                <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
                  {experience.period}
                </span>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" size={17} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section variants={item} className="glass rounded-2xl p-5 sm:p-6">
        <SectionTitle icon={<GraduationCap />} title="Formação" />
        <div className="mt-5">
          <h3 className="font-outfit text-lg font-bold text-white">{education.title}</h3>
          <p className="mt-1 text-slate-400">{education.institution}</p>
          <p className="mt-3 text-sm font-semibold text-emerald-400">{education.period}</p>
        </div>
      </motion.section>

      <motion.section variants={item} className="glass rounded-2xl p-5 sm:p-6">
        <SectionTitle icon={<UserCheck />} title="Informações adicionais" />
        <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
          {additionalInfo.map((info) => (
            <li key={info} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" size={17} />
              <span>{info}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section variants={item} className="glass rounded-2xl p-5 sm:p-6 lg:col-span-2">
        <SectionTitle icon={<Sparkles />} title="Palavras-chave ATS" />
        <div className="mt-5 flex flex-wrap gap-2">
          {atsKeywords.map((keyword) => (
            <span key={keyword} className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-200">
              {keyword}
            </span>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

function GithubView() {
  return (
    <motion.div variants={container} initial={false} animate="visible" className="space-y-6 sm:space-y-8">
      <motion.section variants={item} className="glass relative overflow-hidden rounded-3xl p-1">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-indigo-500/20" />
        <div className="relative rounded-[22px] bg-[#0f172a]/95 p-5 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
                <Code2 size={16} />
                Projeto Principal
              </div>
              <h2 className="font-outfit text-2xl font-bold text-white sm:text-3xl">{project.name}</h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{project.subtitle}</p>
              <p className="mt-4 break-all font-mono text-xs leading-5 text-slate-500">{project.repositoryPath}</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-400 sm:w-auto"
              >
                Ver na Vercel <ArrowUpRight size={16} />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-sky-500/50 hover:text-sky-300 sm:w-auto"
              >
                Repositório GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-8 lg:grid-cols-2">
            {project.bullets.map((bullet) => (
              <div key={bullet} className="flex gap-3 rounded-xl border border-slate-700/50 bg-slate-900/60 p-4 text-sm leading-6 text-slate-300">
                <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-400" size={18} />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section variants={item} className="grid gap-5 md:grid-cols-3">
        <ArchitectureCard icon={<Server />} title="apps/web" text="Next.js App Router, páginas públicas, admin, Auth.js, tRPC client e UI." />
        <ArchitectureCard icon={<Code2 />} title="packages/core" text="Entidades, DTOs, AppError, contratos e use cases sem depender do framework." />
        <ArchitectureCard icon={<Database />} title="packages/infrastructure" text="Prisma, mappers, repositories, validação de ambiente e composição concreta." />
      </motion.section>
    </motion.div>
  );
}

function DemosView() {
  return (
    <motion.section variants={container} initial={false} animate="visible" className="space-y-6 sm:space-y-8">
      <motion.div variants={item} className="mx-auto max-w-3xl text-center">
        <SectionTitle centered icon={<Activity />} title="Demonstrações técnicas" />
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
          Exemplos interativos inspirados nos fluxos do EduPlatformJS: RBAC, ownership, validação, acessibilidade e auditoria.
        </p>
      </motion.div>

      <motion.div variants={item} className="space-y-8">
        <CodeShowcase
          title="RBAC e rotas administrativas"
          description="Simulação de UI protegida por papel USER/ADMIN, equivalente ao padrão usado em procedures e telas administrativas."
          code={rbacDashboardCode}
        >
          <RbacDashboardDemo />
        </CodeShowcase>

        <CodeShowcase
          title="Checklist com ownership"
          description="Checklist por usuário autenticado, com feedback otimista e separação clara entre estado de UI e mutação de dados."
          code={studyChecklistCode}
        >
          <StudyChecklistDemo />
        </CodeShowcase>

        <CodeShowcase
          title="Validação com Zod"
          description="Validação tipada para formulário de conteúdo educacional, refletindo o mesmo cuidado aplicado nos routers tRPC."
          code={zodFormCode}
        >
          <ZodFormDemo />
        </CodeShowcase>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <CodeShowcase
            title="Acessibilidade educacional"
            description="Controles de Libras, transcrição e audiodescrição inspirados nos campos de acessibilidade do projeto."
            code={accessibilityCode}
          >
            <AccessibilityDemo />
          </CodeShowcase>

          <CodeShowcase
            title="Auditoria administrativa"
            description="Visualização de alterações sensíveis, como troca de papel de usuários e mudanças de conteúdo."
            code={auditTableCode}
          >
            <AuditTableDemo />
          </CodeShowcase>
        </div>
      </motion.div>
    </motion.section>
  );
}

function ContactLink({
  icon,
  href,
  label,
  external,
}: {
  icon: React.ReactNode;
  href?: string;
  label: string;
  external?: boolean;
}) {
  const className =
    "glass flex min-w-0 items-center justify-center gap-2 rounded-lg px-3 py-2 font-medium text-slate-300 transition-colors hover:text-sky-300 sm:px-4";

  if (!href) {
    return (
      <div className={className}>
        {icon}
        <span className="min-w-0 truncate">{label}</span>
      </div>
    );
  }

  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={className}>
      {icon}
      <span className="min-w-0 truncate">{label}</span>
    </a>
  );
}

function SectionTitle({ icon, title, centered }: { icon: React.ReactNode; title: string; centered?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3", centered && "justify-center")}>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-sky-400 shadow-inner sm:h-10 sm:w-10">{icon}</div>
      <h2 className="font-outfit text-xl font-bold tracking-normal text-white sm:text-2xl">{title}</h2>
    </div>
  );
}

function ArchitectureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="glass rounded-2xl p-6 transition-colors hover:bg-slate-800/60">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-emerald-400 shadow-inner">{icon}</div>
      <h3 className="mt-5 font-outfit text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
    </article>
  );
}
