export type Lang = "pt" | "en";

export type LineId = "api" | "relay" | "dashboard" | "edu" | "desafio";

export const contact = {
  name: "Eduardo Proença",
  email: "eduardopcruz78@gmail.com",
  phone: "(47) 98480-0605",
  phoneHref: "tel:+5547984800605",
  github: "https://github.com/EduardoCruz78",
  linkedin: "https://www.linkedin.com/in/eduardo-proenca-dev",
};

/** Line colours follow the transit-map world: each project owns one colour, used at full strength. */
export const lines: Record<LineId, { number: number; color: string; ink: string }> = {
  api: { number: 1, color: "var(--line-1)", ink: "#ffffff" },
  relay: { number: 2, color: "var(--line-2)", ink: "#ffffff" },
  dashboard: { number: 3, color: "var(--line-3)", ink: "#ffffff" },
  edu: { number: 4, color: "var(--line-4)", ink: "#111111" },
  desafio: { number: 5, color: "var(--line-5)", ink: "#ffffff" },
};

export type Project = {
  id: LineId;
  name: string;
  tagline: string;
  stations: string[];
  stack: string[];
  tests?: number;
  demoUrl?: string;
  codeUrl: string;
};

type Content = {
  meta: { title: string; description: string };
  nav: { projects: string; experience: string; stack: string; contact: string; switchTo: string; switchHref: string; switchLabel: string };
  hero: {
    role: string;
    pitch: string;
    availability: string;
    location: string;
    linkedin: string;
    email: string;
    github: string;
  };
  map: {
    title: string;
    hint: string;
    interchanges: { events: string; admin: string; webhooks: string; next: string; csharp: string };
  };
  projects: {
    title: string;
    intro: string;
    tests: string;
    demo: string;
    code: string;
    sleepNote: string;
    items: Project[];
  };
  experience: {
    title: string;
    items: { period: string; role: string; org: string; bullets: string[] }[];
  };
  stack: { title: string; groups: { title: string; items: string[] }[] };
  education: {
    title: string;
    course: string;
    school: string;
    period: string;
    languagesTitle: string;
    languages: string[];
  };
  contactSection: { title: string; text: string; phone: string };
  footer: string;
};

const projectFacts = {
  api: {
    name: "SchedulingApi",
    stack: ["C#", ".NET 10", "ASP.NET Core", "EF Core", "PostgreSQL", "Testcontainers", "Docker"],
    tests: 220,
    demoUrl: "https://scheduling-api-gf47.onrender.com/scalar",
    codeUrl: "https://github.com/EduardoCruz78/SchedulingApi",
  },
  relay: {
    name: "WebhookRelay",
    stack: ["Node.js 24", "TypeScript", "Fastify", "Zod", "PostgreSQL", "Drizzle", "pg-boss", "Vitest"],
    tests: 356,
    demoUrl: "https://webhook-relay-1odf.onrender.com/docs",
    codeUrl: "https://github.com/EduardoCruz78/WebhookRelay",
  },
  dashboard: {
    name: "SchedulingDashboard",
    stack: ["Next.js 16", "React 19", "TypeScript", "Server Actions", "Recharts", "Playwright", "Vitest"],
    tests: 130,
    demoUrl: "https://scheduling-dashboard-brown.vercel.app",
    codeUrl: "https://github.com/EduardoCruz78/SchedulingDashboard",
  },
  edu: {
    name: "EduPlatformJS",
    stack: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "Auth.js", "Vitest"],
    demoUrl: "https://edu-platform-js-five.vercel.app",
    codeUrl: "https://github.com/EduardoCruz78/EduPlatformJS",
  },
  desafio: {
    name: "DesafioBackend",
    stack: ["C#", ".NET 8", "xUnit", "FluentAssertions"],
    tests: 12,
    codeUrl: "https://github.com/EduardoCruz78/DesafioBackend",
  },
} as const;

export const content: Record<Lang, Content> = {
  pt: {
    meta: {
      title: "Eduardo Proença · Desenvolvedor Full Stack (C#/.NET e TypeScript)",
      description:
        "Desenvolvedor Full Stack em C#/.NET e TypeScript. Projetos com demo online: API de agendamentos em ASP.NET Core, serviço de entrega de eventos em Node.js e painel em Next.js.",
    },
    nav: {
      projects: "Projetos",
      experience: "Experiência",
      stack: "Stack",
      contact: "Contato",
      switchTo: "EN",
      switchHref: "/en",
      switchLabel: "Read in English",
    },
    hero: {
      role: "Desenvolvedor Full Stack · C#/.NET e TypeScript",
      pitch:
        "Construo APIs em C#/.NET e aplicações web em TypeScript, com testes, CI e deploy. Meus projetos formam um sistema real: uma API, um serviço de eventos e um painel que conversam entre si em produção.",
      availability: "Aberto a vagas remotas e projetos freelance",
      location: "Camboriú, SC · remoto · UTC−3",
      linkedin: "Falar no LinkedIn",
      email: "E-mail",
      github: "GitHub",
    },
    map: {
      title: "Mapa dos projetos",
      hint: "Passe o mouse ou o foco numa linha para isolá-la. As baldeações são integrações reais.",
      interchanges: {
        events: "Eventos (outbox)",
        admin: "API admin",
        webhooks: "Webhooks assinados",
        next: "Next.js",
        csharp: "C# · DDD",
      },
    },
    projects: {
      title: "Projetos",
      intro:
        "Cada linha é um repositório público com CI. As três primeiras se integram: reservar um horário na API gera um evento que o relay entrega, assinado, ao painel.",
      tests: "testes automatizados",
      demo: "Abrir demo",
      code: "Ver código",
      sleepNote: "As demos rodam em plano gratuito: a primeira abertura pode levar até 1 minuto.",
      items: [
        {
          id: "api",
          ...projectFacts.api,
          tagline: "API REST de agendamentos para pequenos negócios (barbearias, clínicas, estúdios).",
          stations: [
            "Calcula horários livres por profissional considerando expediente, folgas, antecedência e horário de verão",
            "Impede agendamento duplo no próprio PostgreSQL (exclusion constraint), provado por teste com 10 reservas simultâneas",
            "13 regras de negócio, JWT com papéis Admin e Cliente, rate limiting e erros em ProblemDetails",
            "Publica eventos por outbox transacional para o WebhookRelay",
            "Clean Architecture + DDD, testes de integração com Postgres real, Docker e CI",
          ],
          stack: [...projectFacts.api.stack],
        },
        {
          id: "relay",
          ...projectFacts.relay,
          tagline: "Serviço de entrega confiável de eventos por webhook, e-mail e Telegram.",
          stations: [
            "Ingestão idempotente: reenvios do mesmo evento não duplicam entregas",
            "Entrega pelo menos uma vez, com backoff exponencial, jitter e fila de mensagens mortas",
            "Webhooks assinados com HMAC e rotação de segredo",
            "Proteção contra SSRF, chaves de API, métricas e logs estruturados",
          ],
          stack: [...projectFacts.relay.stack],
        },
        {
          id: "dashboard",
          ...projectFacts.dashboard,
          tagline: "Painel administrativo da SchedulingApi, com o lado da integração ao vivo.",
          stations: [
            "Agenda do dia por profissional, cadastro de serviços e profissionais, KPIs com gráficos",
            "Entregas e tentativas do WebhookRelay e feed ao vivo dos webhooks assinados que recebe",
            "Backend for frontend: o navegador nunca vê o JWT nem a chave de admin",
            "Clientes tipados gerados do OpenAPI e testes ponta a ponta com os três serviços em Docker",
          ],
          stack: [...projectFacts.dashboard.stack],
        },
        {
          id: "edu",
          ...projectFacts.edu,
          tagline: "Plataforma educacional full stack em monorepo.",
          stations: [
            "Monorepo com camadas core, infraestrutura e web",
            "Login com Google, papéis USER e ADMIN e proteção do painel no servidor",
            "Checklist de estudos por usuário e auditoria de troca de papéis",
            "Testes, typecheck, lint e build no GitHub Actions",
          ],
          stack: [...projectFacts.edu.stack],
        },
        {
          id: "desafio",
          ...projectFacts.desafio,
          tagline: "Domínio de indicadores (KPIs) em C#, feito com testes primeiro.",
          stations: [
            "Agregado com regras de coleta por data e cálculo por soma ou média",
            "Testes por comportamento com Object Mothers",
          ],
          stack: [...projectFacts.desafio.stack],
        },
      ],
    },
    experience: {
      title: "Experiência",
      items: [
        {
          period: "11/2024 – atual",
          role: "Desenvolvedor Full Stack (freelance)",
          org: "Projetos próprios e clientes",
          bullets: ["Sites e sistemas web sob demanda: criação, ajustes e manutenção."],
        },
        {
          period: "03/2025 – 06/2025",
          role: "Desenvolvedor Back-end",
          org: "Qualyteam",
          bullets: [
            "Desenvolvi e mantive funcionalidades em APIs REST com .NET/C#, EF Core e SQL Server.",
            "Apliquei Clean Architecture, DDD e TDD, com revisão de código em rotina ágil.",
            "Trabalhei com modelagem de dados, regras de negócio e resolução de issues.",
          ],
        },
        {
          period: "06/2022 – 12/2024",
          role: "Estágio em Desenvolvimento Full Stack",
          org: "IFC – Instituto Federal Catarinense, Campus Camboriú",
          bullets: [
            "Liderei um projeto de tecnologia educacional, do front-end ao back-end.",
            "Desenvolvi aplicações web e jogos educacionais com JavaScript, TypeScript e React.",
            "Treinei novos estagiários e organizei a documentação técnica das entregas.",
          ],
        },
      ],
    },
    stack: {
      title: "Stack",
      groups: [
        { title: "Back-end .NET", items: ["C#", ".NET 10", "ASP.NET Core", "EF Core", "FluentValidation", "xUnit", "Testcontainers"] },
        { title: "Back-end Node", items: ["Node.js", "TypeScript", "Fastify", "tRPC", "Zod", "Drizzle", "Prisma"] },
        { title: "Front-end", items: ["React", "Next.js (App Router)", "Server Components", "Tailwind CSS", "Recharts"] },
        { title: "Dados", items: ["PostgreSQL", "SQL Server", "Modelagem relacional", "Migrations", "Constraints"] },
        { title: "Entrega", items: ["Clean Architecture", "DDD", "TDD", "Docker", "GitHub Actions", "Vercel", "Render"] },
      ],
    },
    education: {
      title: "Formação e idiomas",
      course: "Técnico em Informática",
      school: "Instituto Federal Catarinense, Campus Camboriú",
      period: "2022 – 2024",
      languagesTitle: "Idiomas",
      languages: ["Português: nativo", "Inglês: avançado (leitura e escrita)"],
    },
    contactSection: {
      title: "Vamos conversar?",
      text: "Respondo rápido por mensagem. Vagas remotas, contratos e projetos freelance.",
      phone: "Telefone",
    },
    footer: "Feito por Eduardo Proença com Next.js. Código no GitHub.",
  },
  en: {
    meta: {
      title: "Eduardo Proença · Full Stack Developer (C#/.NET and TypeScript)",
      description:
        "Full stack developer working with C#/.NET and TypeScript. Projects with live demos: an ASP.NET Core booking API, a Node.js event delivery service and a Next.js dashboard.",
    },
    nav: {
      projects: "Projects",
      experience: "Experience",
      stack: "Stack",
      contact: "Contact",
      switchTo: "PT",
      switchHref: "/",
      switchLabel: "Ler em português",
    },
    hero: {
      role: "Full Stack Developer · C#/.NET and TypeScript",
      pitch:
        "I build C#/.NET APIs and TypeScript web apps, with tests, CI and deployment. My projects form one working system: an API, an event delivery service and a dashboard that talk to each other in production.",
      availability: "Open to remote roles and freelance projects",
      location: "Camboriú, Brazil · remote · UTC−3",
      linkedin: "Message me on LinkedIn",
      email: "Email",
      github: "GitHub",
    },
    map: {
      title: "Project map",
      hint: "Hover or focus a line to isolate it. Interchanges are real integrations.",
      interchanges: {
        events: "Events (outbox)",
        admin: "Admin API",
        webhooks: "Signed webhooks",
        next: "Next.js",
        csharp: "C# · DDD",
      },
    },
    projects: {
      title: "Projects",
      intro:
        "Each line is a public repository with CI. The first three are integrated: booking a slot in the API emits an event that the relay delivers, signed, to the dashboard.",
      tests: "automated tests",
      demo: "Open demo",
      code: "View code",
      sleepNote: "The demos run on free hosting: the first request can take up to a minute.",
      items: [
        {
          id: "api",
          ...projectFacts.api,
          tagline: "Appointment booking REST API for small businesses (barbershops, clinics, studios).",
          stations: [
            "Computes free slots per professional from working hours, time off, lead time and daylight saving time",
            "Prevents double booking in PostgreSQL itself (exclusion constraint), proven by a 10-way concurrent booking test",
            "13 business rules, JWT with Admin and Customer roles, rate limiting and ProblemDetails errors",
            "Publishes domain events to WebhookRelay through a transactional outbox",
            "Clean Architecture + DDD, integration tests against real Postgres, Docker and CI",
          ],
          stack: [...projectFacts.api.stack],
        },
        {
          id: "relay",
          ...projectFacts.relay,
          tagline: "Reliable event delivery over webhooks, e-mail and Telegram.",
          stations: [
            "Idempotent ingestion: re-sent events never duplicate deliveries",
            "At-least-once delivery with exponential backoff, jitter and a dead-letter queue",
            "HMAC-signed webhooks with secret rotation",
            "SSRF protection, API keys, metrics and structured logs",
          ],
          stack: [...projectFacts.relay.stack],
        },
        {
          id: "dashboard",
          ...projectFacts.dashboard,
          tagline: "Admin dashboard for SchedulingApi, with the integration side live.",
          stations: [
            "Daily schedule per professional, services and professionals, KPIs with charts",
            "WebhookRelay deliveries and attempts, plus a live feed of the signed webhooks it receives",
            "Backend for frontend: the browser never sees the JWT or the admin key",
            "Typed clients generated from OpenAPI and end-to-end tests with all three services in Docker",
          ],
          stack: [...projectFacts.dashboard.stack],
        },
        {
          id: "edu",
          ...projectFacts.edu,
          tagline: "Full stack education platform in a monorepo.",
          stations: [
            "Monorepo with core, infrastructure and web layers",
            "Google sign-in, USER and ADMIN roles and server-side protection of the admin area",
            "Per-user study checklist and an audit trail of role changes",
            "Tests, typecheck, lint and build on GitHub Actions",
          ],
          stack: [...projectFacts.edu.stack],
        },
        {
          id: "desafio",
          ...projectFacts.desafio,
          tagline: "KPI domain model in C#, built test-first.",
          stations: [
            "Aggregate with one-collection-per-date rules and sum or average calculation",
            "One test class per behaviour, with Object Mothers",
          ],
          stack: [...projectFacts.desafio.stack],
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          period: "11/2024 – present",
          role: "Full Stack Developer (freelance)",
          org: "Own projects and clients",
          bullets: ["Websites and web systems on demand: building, fixing and maintaining them."],
        },
        {
          period: "03/2025 – 06/2025",
          role: "Backend Developer",
          org: "Qualyteam",
          bullets: [
            "Built and maintained features in REST APIs with .NET/C#, EF Core and SQL Server.",
            "Applied Clean Architecture, DDD and TDD, with code review in an agile team.",
            "Worked on data modelling, business rules and issue resolution.",
          ],
        },
        {
          period: "06/2022 – 12/2024",
          role: "Full Stack Development Intern",
          org: "IFC – Federal Institute of Santa Catarina, Camboriú campus",
          bullets: [
            "Led an education technology project end to end, front-end to back-end.",
            "Built web applications and educational games with JavaScript, TypeScript and React.",
            "Trained new interns and organised the technical documentation of deliveries.",
          ],
        },
      ],
    },
    stack: {
      title: "Stack",
      groups: [
        { title: ".NET back end", items: ["C#", ".NET 10", "ASP.NET Core", "EF Core", "FluentValidation", "xUnit", "Testcontainers"] },
        { title: "Node back end", items: ["Node.js", "TypeScript", "Fastify", "tRPC", "Zod", "Drizzle", "Prisma"] },
        { title: "Front end", items: ["React", "Next.js (App Router)", "Server Components", "Tailwind CSS", "Recharts"] },
        { title: "Data", items: ["PostgreSQL", "SQL Server", "Relational modelling", "Migrations", "Constraints"] },
        { title: "Delivery", items: ["Clean Architecture", "DDD", "TDD", "Docker", "GitHub Actions", "Vercel", "Render"] },
      ],
    },
    education: {
      title: "Education and languages",
      course: "IT Technician (technical high school)",
      school: "Federal Institute of Santa Catarina, Camboriú campus",
      period: "2022 – 2024",
      languagesTitle: "Languages",
      languages: ["Portuguese: native", "English: advanced (reading and writing)"],
    },
    contactSection: {
      title: "Let’s talk",
      text: "I reply quickly in writing. Remote roles, contracts and freelance projects.",
      phone: "Phone",
    },
    footer: "Built by Eduardo Proença with Next.js. Source on GitHub.",
  },
};
