# Currículo Interativo - Eduardo Proença

Currículo web em Next.js para apresentar minha trilha de **Node.js, JavaScript, TypeScript, React e Next.js**, com foco em recrutadores, GitHub e deploy na Vercel.

## Links

- Projeto principal em produção: [EduPlatformJS na Vercel](https://edu-platform-js-five.vercel.app/)
- Repositório do projeto principal: [EduPlatformJS no GitHub](https://github.com/EduardoCruz78/EduPlatformJS)
- Perfil GitHub: [EduardoCruz78](https://github.com/EduardoCruz78)

## Objetivo

- Apresentar meu currículo de forma visual, interativa e compatível com ATS.
- Destacar o EduPlatformJS como prova prática da minha experiência com Node/TS.
- Manter esta versão separada da futura trilha C#/.NET.
- Publicar facilmente na Vercel.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Zod e React Hook Form nas demonstrações

## Estrutura

```text
src/
├─ app/                  Rotas, layout e estilos globais
├─ components/
│  ├─ resume/            Interface principal do currículo
│  ├─ demos/             Demonstrações técnicas interativas
│  └─ ui/                Componentes utilitários
├─ data/resume.ts        Conteúdo estruturado do currículo
└─ lib/utils.ts          Utilitários
```

## Projeto Principal

O conteúdo técnico do currículo é baseado no EduPlatformJS, uma plataforma educacional full stack com:

- Next.js App Router, React e TypeScript
- tRPC, Zod, Auth.js/NextAuth e Google OAuth
- Prisma ORM e PostgreSQL
- RBAC com papéis `USER` e `ADMIN`
- Checklist por usuário autenticado com ownership
- Módulos de séries, matérias, tópicos, conteúdos, vestibulares, acessibilidade e vida prática
- Painel administrativo, auditoria, testes, typecheck, lint, build e CI

Projeto local usado como referência:

```text
C:\Projects\ProjetoEscolar\EduPlatformJS\edu-platform
```

## Rodando Localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validação

```bash
npm run lint
npm run build
```

## Deploy na Vercel

O projeto possui [vercel.json](./vercel.json) para forçar o preset correto:

```json
{
  "framework": "nextjs",
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev -- --port $PORT"
}
```

No painel da Vercel, deixe:

- Framework Preset: `Next.js`
- Root Directory: raiz do repositório
- Build Command: `npm run build`
- Output Directory: automático

## Manutenção do Conteúdo

Edite primeiro [src/data/resume.ts](./src/data/resume.ts). A interface consome esse arquivo para renderizar perfil, habilidades, projeto principal, experiências, formação e informações adicionais.
