# 📦 Risu API

API REST construída com **Express**, **TypeScript**, **Prisma** e **PostgreSQL**.  
Este projeto tem como objetivo fornecer uma estrutura limpa, escalável e eficiente para desenvolvimento backend.

---

## 🚀 Tecnologias

- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Docker
- Clean Architecture
- Testes via Postman

---

## 📁 Estrutura de Pastas

```plaintext
risu-api/
├── prisma/                # Schema Prisma e migrations
├── src/                   # Código fonte principal
│   ├── config/            # Configurações gerais (ex: conexão Prisma)
│   │   └── database.ts
│   ├── controllers/       # Controllers HTTP (Express)
│   │   ├── health.controller.ts
│   │   └── user.controller.ts
│   ├── routes/            # Rotas da API
│   │   ├── index.ts
│   │   └── users.routes.ts
│   ├── services/          # Lógica de negócio
│   │   ├── example.service.ts
│   │   └── user.service.ts
│   ├── repositories/      # Camada de acesso ao banco (Prisma)
│   │   ├── example.repository.ts
│   │   └── user.repository.ts
│   ├── models/            # Interfaces e tipos de dados
│   │   └── example.model.ts
│   └── index.ts           # Entrada principal do servidor Express
├── .env                   # Variáveis de ambiente (DB, etc)
├── .gitignore             # Define arquivos ignorados pelo git
├── docker-compose.yml     # Docker-compose com PostgreSQL
├── package.json           # Dependências e scripts npm
├── tsconfig.json          # Configuração do TypeScript
└── README.md              # Documentação do projeto
```

---

## 🐳 Rodando com Docker

### Pré-requisitos:
- Docker e Docker Compose instalados

### Subir ambiente com PostgreSQL:

```bash
docker-compose up -d
```

