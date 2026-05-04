# Currículo Node.js / TypeScript

Esta documentação descreve a proposta de posicionamento profissional usada neste projeto de currículo.

## Posicionamento

**Eduardo Proença**  
Desenvolvedor Full Stack | Node.js | TypeScript | JavaScript | Next.js

O foco desta versão é apresentar experiência prática no ecossistema JavaScript/TypeScript, especialmente com aplicações full stack em Next.js, arquitetura em camadas, validação tipada, autenticação, RBAC, Prisma e PostgreSQL.

## Projeto usado como principal prova técnica

**EduPlatformJS**  
Deploy: [https://edu-platform-js-five.vercel.app/](https://edu-platform-js-five.vercel.app/)  
GitHub: [https://github.com/EduardoCruz78/EduPlatformJS](https://github.com/EduardoCruz78/EduPlatformJS)

O EduPlatformJS sustenta a narrativa técnica do currículo porque demonstra:

- construção de produto full stack real;
- uso de Next.js App Router e React;
- back-end TypeScript com tRPC;
- modelagem relacional com PostgreSQL e Prisma;
- autenticação com Auth.js/NextAuth e Google OAuth;
- controle de acesso por papéis;
- checklist com regra de ownership;
- módulos administrativos;
- acessibilidade educacional;
- auditoria administrativa;
- testes e validações automatizadas.

## Áreas destacadas no currículo

### Back-end Node/TS

- Node.js
- TypeScript
- tRPC
- Zod
- Auth.js/NextAuth
- Validação server-side
- Separação de regras de negócio

### Front-end

- React
- Next.js App Router
- JavaScript
- TypeScript
- Tailwind CSS
- Componentes reutilizáveis
- Experiências interativas

### Dados e arquitetura

- PostgreSQL
- Prisma ORM
- Prisma Migrations
- Clean Architecture
- DDD
- RBAC
- Ownership
- CI com GitHub Actions

## Como manter o conteúdo atualizado

O conteúdo principal está centralizado em:

```text
src/data/resume.ts
```

Ao atualizar cargo, projeto, tecnologias, experiências ou links, prefira editar esse arquivo primeiro. A interface consome esses dados e renderiza o currículo automaticamente.

## Separação futura

Este projeto representa a trilha **Node.js / JavaScript / TypeScript**.

A trilha **C# / .NET** deve ser criada separadamente para evitar um currículo genérico demais. A versão .NET pode destacar Qualyteam, ASP.NET Core, C#, Entity Framework Core, APIs REST, Clean Architecture, DDD e TDD.
