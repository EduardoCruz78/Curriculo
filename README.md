# Currículo Interativo - Eduardo Proença

Currículo web criado em Next.js para apresentar minha trilha de **Node.js, JavaScript, TypeScript, React e Next.js**, com foco em recrutadores, GitHub e deploy na Vercel.

Esta versão foi construída para funcionar como um currículo interativo, mas também como uma extensão técnica do meu principal projeto público: **EduPlatformJS**.

## Links principais

- Currículo local: `http://localhost:3000`
- Projeto principal em produção: [EduPlatformJS na Vercel](https://edu-platform-js-five.vercel.app/)
- Repositório do projeto principal: [EduPlatformJS no GitHub](https://github.com/EduardoCruz78/EduPlatformJS)
- Perfil GitHub: [EduardoCruz78](https://github.com/EduardoCruz78)

## Objetivo do projeto

- Apresentar meu currículo de forma visual, interativa e compatível com ATS.
- Destacar o EduPlatformJS como principal prova prática da minha experiência com Node/TS.
- Separar esta trilha da futura versão focada em C#/.NET.
- Mostrar domínio de Next.js, React, TypeScript, tRPC, Prisma, PostgreSQL, Auth.js, RBAC, testes e CI.
- Manter uma base simples de publicar na Vercel.

## Stack deste currículo

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Zod e React Hook Form nas demonstrações
- lucide-react para iconografia

## Conteúdo do currículo

O currículo está organizado em três áreas:

- **Currículo:** resumo profissional, hard skills, experiências, formação, informações adicionais e palavras-chave ATS.
- **Projeto Principal:** apresentação do EduPlatformJS, links de produção/GitHub, arquitetura e responsabilidades técnicas.
- **Demos:** pequenas demonstrações interativas inspiradas em partes reais do EduPlatformJS, como RBAC, checklist com ownership, validação com Zod, acessibilidade e auditoria administrativa.

## Projeto Principal: EduPlatformJS

O EduPlatformJS é uma plataforma educacional full stack desenvolvida com:

- Next.js App Router
- TypeScript
- tRPC
- Prisma ORM
- PostgreSQL
- Auth.js/NextAuth
- Google OAuth
- RBAC com papéis `USER` e `ADMIN`
- Checklist por usuário autenticado
- Módulos de séries, matérias, tópicos, conteúdos, vestibulares, acessibilidade e vida prática
- Painel administrativo
- Auditoria de troca de papéis
- Testes, typecheck, lint, build e CI

O conteúdo técnico deste currículo foi baseado no projeto local:

```text
C:\Projects\ProjetoEscolar\EduPlatformJS\edu-platform
```

## Estrutura do projeto

```text
.
├─ src/
│  ├─ app/                      Rotas, layout global e estilos base
│  ├─ components/
│  │  ├─ resume/                Interface principal do currículo
│  │  ├─ demos/                 Demonstrações técnicas interativas
│  │  └─ ui/                    Componentes utilitários de UI
│  ├─ data/
│  │  └─ resume.ts              Conteúdo estruturado do currículo
│  └─ lib/
│     └─ utils.ts               Utilitários de classe/estilo
├─ public/                      Assets estáticos
├─ docs/                        Documentação auxiliar
└─ README.md
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra:

```text
http://localhost:3000
```

## Validação antes de publicar

```bash
npm run lint
npm run build
```

## Deploy na Vercel

O projeto usa os scripts padrão esperados pelo Next.js:

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

Na Vercel, use:

- Framework: `Next.js`
- Build command: `npm run build`
- Output: automático do Next.js

Este repositório também possui um `vercel.json` para forçar a Vercel a tratar o projeto como Next.js:

```json
{
  "framework": "nextjs",
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev -- --port $PORT"
}
```

Se aparecer o erro `No entrypoint found`, verifique no painel da Vercel:

- Root Directory: deve estar vazio ou apontar para a raiz do repositório.
- Framework Preset: `Next.js`.
- Build Command: `npm run build`.
- Install Command: `npm install`.
- Output Directory: deixe automático, sem preencher manualmente.

## Próximos passos planejados

- Criar uma segunda versão separada do currículo para C#/.NET.
- Adicionar links definitivos de LinkedIn quando estiverem prontos.
- Opcionalmente gerar uma versão PDF/ATS baseada no mesmo conteúdo estruturado de `src/data/resume.ts`.
