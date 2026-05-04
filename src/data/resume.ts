export const profile = {
  name: "Eduardo Proença",
  displayName: "Eduardo Proença",
  location: "Camboriú - SC",
  phone: "(47) 98480-0605",
  email: "eduardopcruz78@gmail.com",
  github: "https://github.com/EduardoCruz78",
  linkedin: "https://linkedin.com",
  role: "Desenvolvedor Full Stack | Node.js | TypeScript | JavaScript | Next.js",
  availability: "Disponível para oportunidades Node.js, TypeScript e Full Stack",
};

export const summary = [
  "Desenvolvedor Full Stack com foco no ecossistema JavaScript e TypeScript, atuando com Next.js, React, Node.js, tRPC, Prisma, PostgreSQL e arquitetura em camadas.",
  "No EduPlatformJS, evoluí uma plataforma educacional em monorepo com módulos públicos, painel administrativo, autenticação, RBAC, checklist por usuário, acessibilidade, vestibulares e governança de usuários.",
  "Perfil autodidata, organizado e orientado a código limpo, regras de negócio bem separadas e produtos que resolvem problemas reais.",
];

export const techGroups = [
  {
    title: "Back-end Node/TS",
    items: ["Node.js", "TypeScript", "tRPC", "Zod", "Auth.js/NextAuth", "APIs", "Validação server-side"],
  },
  {
    title: "Front-end",
    items: ["JavaScript", "React", "React 19", "Next.js App Router", "React Query", "Tailwind CSS", "Componentes reutilizáveis"],
  },
  {
    title: "Dados",
    items: ["PostgreSQL", "Prisma ORM", "Prisma Migrations", "Modelagem relacional", "Seeds", "Constraints"],
  },
  {
    title: "Arquitetura e entrega",
    items: ["Clean Architecture", "DDD", "RBAC", "Ownership", "GitHub Actions", "CI", "Vitest", "npm workspaces", "TurboRepo"],
  },
];

export const project = {
  name: "EduPlatformJS",
  subtitle: "Plataforma educacional full stack em Next.js, TypeScript, tRPC, Prisma e PostgreSQL",
  repositoryPath: "C:\\Projects\\ProjetoEscolar\\EduPlatformJS\\edu-platform",
  githubUrl: "https://github.com/EduardoCruz78/EduPlatformJS",
  deployUrl: "https://edu-platform-js-five.vercel.app/",
  bullets: [
    "Estruturei monorepo com apps/web, packages/core, packages/infrastructure, prisma e docs.",
    "Separei domínio, use cases, contratos de repository, mappers, infraestrutura Prisma e interface web.",
    "Implementei routers tRPC com validação Zod, procedures protegidas/admin e tradução de AppError.",
    "Modelei séries, matérias, tópicos, conteúdos, vestibulares, acessibilidade, vida prática e checklist.",
    "Implementei autenticação Google/Auth.js, papéis USER e ADMIN, RBAC e proteção server-side do admin.",
    "Criei checklist por usuário autenticado com regra de ownership.",
    "Adicionei auditoria de troca de papéis com ator, usuário afetado, papel anterior, novo papel e data.",
    "Configurei validações de qualidade com testes, typecheck, lint, build e GitHub Actions.",
  ],
  metrics: [
    { label: "Camadas", value: "core / infra / web" },
    { label: "Módulos", value: "9+" },
    { label: "Stack", value: "Next + tRPC + Prisma" },
    { label: "Deploy", value: "Vercel" },
  ],
};

export const experiences = [
  {
    company: "Qualyteam",
    role: "Desenvolvedor Back-end",
    period: "03/2025 - 06/2025",
    bullets: [
      "Desenvolvi e mantive funcionalidades de back-end em APIs REST.",
      "Trabalhei com modelagem de dados, regras de negócio e integração de funcionalidades.",
      "Apliquei práticas de Clean Architecture, DDD, TDD e revisão de qualidade.",
      "Contribuí na resolução de issues e na colaboração com time em rotina ágil.",
    ],
  },
  {
    company: "IFC - Instituto Federal Catarinense (Campus Camboriú)",
    role: "Estágio Desenvolvedor Full Stack",
    period: "2022 - 2025",
    bullets: [
      "Liderei projeto acadêmico focado em desenvolvimento full stack e tecnologia educacional.",
      "Desenvolvi aplicações web, jogos educacionais e interfaces com JavaScript, TypeScript e React.",
      "Atuei em front-end, back-end, documentação e organização técnica das entregas.",
      "Treinei novos estagiários e apoiei a evolução técnica dos projetos.",
    ],
  },
];

export const education = {
  title: "Curso Técnico em Informática",
  institution: "Instituto Federal Catarinense - Campus Camboriú",
  period: "2022 - 2024",
};

export const atsKeywords = [
  "Node.js",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "App Router",
  "tRPC",
  "Zod",
  "Prisma",
  "PostgreSQL",
  "Auth.js",
  "NextAuth",
  "OAuth",
  "RBAC",
  "Clean Architecture",
  "DDD",
  "TDD",
  "React Query",
  "Tailwind CSS",
  "GitHub Actions",
  "CI/CD",
  "Vitest",
  "TurboRepo",
  "npm workspaces",
];

export const additionalInfo = [
  "Pessoa com deficiência (TEA - Síndrome de Asperger), com laudo disponível.",
  "Disponível para processos seletivos com cota PCD.",
  "Experiência adicional com freelances em criação de sites e ajustes de tecnologias de desenvolvimento.",
];
