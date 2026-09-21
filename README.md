# Clean Node API - NestJS & Clean Architecture

Este projeto é uma API REST desenvolvida com **NestJS**, focando na aplicação prática dos princípios de **Clean Architecture** (Arquitetura Limpa) e **DDD** (Domain-Driven Design), baseada na aula *"Construindo aplicações com Nest.js e Clean Architecture"* da Full Cycle.

O objetivo principal é manter as regras de negócio totalmente isoladas de frameworks, bibliotecas ou detalhes de infraestrutura (como banco de dados ou ORM), garantindo uma aplicação highly testável, manutenível e desacoplada.

---

## 🛠️ Tecnologias e Ferramentas

- **Node.js** (v18+)
- **TypeScript**
- **NestJS** (Framework HTTP e Injeção de Dependência)
- **TypeORM** (Persistência e Mapeamento de Entidades)
- **SQLite / Better-SQLite3** (Banco de dados relacional)
- **Class-Validator / Class-Transformer** (Validação de DTOs)

---

## 🏛️ Arquitetura do Projeto

A estrutura do módulo de projetos organiza suas entidades, DTOs, casos de uso, contratos de repositório e controllers de forma clara e modular:

```text
projects/
├── dto/
│   ├── create-project.dto.ts
│   ├── start-project.dto copy.ts
│   └── update-project.dto.ts
├── entities/
│   └── project.entity.ts
├── use-cases/
│   ├── create-project.use-case.ts
│   ├── find-all-project.use-case.ts
│   ├── find-one-project.use-case.ts
│   └── start-project-use-case.ts
├── project.repository.ts
├── projects-whit-use-case.controller.ts
└── projects.module.ts
```

### Regras Principais de Dependência
1. O **Domínio** (entidades e repositórios) não depende de nada além de TypeScript puro.
2. Os **Casos de Uso** dependem apenas das interfaces/contratos definidos no repositório.
3. O **Controller** delega a execução para os casos de uso correspondentes, utilizando os DTOs para validação de entrada.

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