# Clean Node API - NestJS & Clean Architecture

Este projeto é uma API REST desenvolvida com **NestJS**, focando na aplicação prática dos princípios de **Clean Architecture** (Arquitetura Limpa) e **DDD** (Domain-Driven Design), baseada na aula *"Construindo aplicações com Nest.js e Clean Architecture"* da Full Cycle.

O objetivo principal é manter as regras de negócio totalmente isoladas de frameworks, bibliotecas ou detalhes de infraestrutura (como banco de dados ou ORM), garantindo uma aplicação altamente testável, manutenível e desacoplada.

---

## 🛠️ Tecnologias e Ferramentas

- **Node.js** (v18+)
- **TypeScript**
- **NestJS** (Framework HTTP e Injeção de Dependência)
- **TypeORM** (Persistência e Mapeamento de Entidades)
- **SQLite / Better-SQLite3** (Banco de dados relacional)
- **Class-Validator / Class-Transformer** (Validação de DTOs)
- **Jest** (Testes unitários e de integração)

---

## 🏛️ Arquitetura do Projeto

A estrutura de pastas e módulos segue a divisão em camadas conceituada por Robert C. Martin (Uncle Bob):

```text
src/
├── domain/             # [Camada de Domínio]
│   ├── entities/       # Regras de negócio e entidades puras do sistema
│   └── repositories/   # Interfaces/Contratos dos repositórios
├── use-cases/          # [Camada de Casos de Uso / Aplicação]
│   └── project/        # Fluxos de aplicação (ex: CreateProjectUseCase)
├── infrastructure/     # [Camada de Infraestrutura]
│   ├── database/       # Implementação do TypeORM, mappers e ORM entities
│   └── http/           # Controllers do NestJS, DTOs e Pipes
└── main.ts             # Ponto de entrada da aplicação
```

### Regras Principais de Dependência
1. O **Domínio** não depende de nada além de TypeScript puro.
2. Os **Casos de Uso** dependem apenas das interfaces definidas no Domínio.
3. A **Infraestrutura** (NestJS, TypeORM) implementa as interfaces e gerencia os detalhes externos.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js** instalado (versão 18 ou superior)
- **NPM** ou **Yarn**

### Passos para instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/clean-node-api.git
   cd clean-node-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie a aplicação em modo de desenvolvimento:**
   ```bash
   npm run start:dev
   ```

A aplicação estará rodando em: `http://localhost:3000`

---

## 📌 Endpoints da API

### Criar Projeto
- **URL:** `/projects`
- **Método:** `POST`
- **Body (JSON):**
  ```json
  {
    "name": "Projeto Exemplo",
    "description": "Descrição detalhada do projeto"
  }
  ```
- **Resposta Sucesso (`201 Created`):**
  ```json
  {
    "id": "1c15c41e-c1ab-43bd-965d-fe6558c94274",
    "name": "Projeto Exemplo",
    "description": "Descrição detalhada do projeto",
    "status": "active",
    "created_at": "2026-09-20T20:41:24.000Z"
  }
  ```

---

## 🧪 Executando Testes

Para rodar a suíte de testes da aplicação:

```bash
# Testes unitários
npm run test

# Testes e2e (ponta a ponta)
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

---

## 👨‍💻 Referências

- Aula original: [Construindo aplicações com Nest.js e Clean Architecture (Full Cycle)](https://www.youtube.com/watch?v=CpBqpsINims)
- Documentação oficial do [NestJS](https://docs.nestjs.com/)
- Documentação oficial do [TypeORM](https://typeorm.io/)