# Projeto de Autenticação com JWT (JSON Web Token)

---

Projeto simples de autenticação com JWT.

---

## Descrição do Projeto

Projeto simples de autenticação utilizando JWT. A aplicação valida um usuário e gera um token de acesso com base nos dados enviados.

Foi utilizada a arquitetura **package by layers**, que organiza o código por camadas:

* **Controller**: recebe requisições HTTP e retorna respostas
* **Service**: contém a lógica de negócio
* **Repository**: acesso a dados

Essa organização facilita manutenção, testes e escalabilidade.

---

## Status do Projeto

Finalizado (projeto de estudo).

---

## Funcionalidades e Demonstração da Aplicação

* Validação de usuário (nome e email)
* Geração de token JWT
* Retorno de erro se os dados forem inválidos
* Estrutura organizada em camadas
* Suporte a proteção de rotas

Fluxo:

1. Usuário envia dados
2. Sistema valida
3. Se válido → gera token

---

## Acesso ao Projeto

Clone o repositório e instale as dependências:

```
npm install
```

Execute o servidor:

```
npm run dev
```

Rota de autenticação:

```
POST /api
```

---

## Tecnologias utilizadas

* Node.js
* Express
* JWT (JSON Web Token)
* TypeScript (opcional)

---

## Pessoas Contribuidoras

Sem contribuidores externos.

---

## Pessoas Desenvolvedoras do Projeto

Pablo Antônio Mascena Da Silva

---

## Licença

Uso livre para fins de estudo.

---

## Conclusão

Projeto simples para entender autenticação com JWT e arquitetura em camadas. Base para sistemas mais complexos com login e controle de acesso.
