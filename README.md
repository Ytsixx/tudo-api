# To-Do API

Uma API RESTful simples para gerenciamento de tarefas (To-Do List), construída com **Node.js**, **Express** e **MongoDB**.

## Tecnologias

- Node.js
- Express
- MongoDB (Mongoose)
- CORS
- Dotenv

## Funcionalidades

- Criar novas tarefas
- Listar todas as tarefas
- Atualizar tarefas (marcar como concluída, editar título)
- Deletar tarefas

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/todo-api.git
cd todo-api
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e adicione:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/todo-api
```

4. Inicie o servidor:

Modo desenvolvimento (com `nodemon`):

```bash
npm run dev
```

Modo produção:

```bash
npm start
```

O servidor iniciará em `http://localhost:3000`.

---

## Endpoints

| Método | Rota             | Descrição               |
| ------ | ---------------- | ----------------------- |
| POST   | `/api/tasks`     | Criar uma nova tarefa   |
| GET    | `/api/tasks`     | Listar todas as tarefas |
| PUT    | `/api/tasks/:id` | Atualizar uma tarefa    |
| DELETE | `/api/tasks/:id` | Deletar uma tarefa      |

---

## Exemplo de Requisições

### Criar Tarefa (POST `/api/tasks`)

```json
{
  "title": "Estudar Node.js"
}
```

### Atualizar Tarefa (PUT `/api/tasks/:id`)

```json
{
  "title": "Estudar Node.js Avançado",
  "completed": true
}
```

---

## Melhorias Futuras

- Autenticação de usuários (JWT)
- Validação de entrada de dados (express-validator)
- Documentação automática com Swagger
- Deploy na nuvem (Render, Vercel, AWS)

---

## Autor

Feito com dedicação por dev SixxHxRx 

> *"A prática leva à perfeição."*

