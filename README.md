# Sistema de Autenticação com JWT

## Descrição

Este é um sistema de autenticação simples implementado com **NestJS**, **JWT**, **Passport** e **bcrypt**. Ele oferece funcionalidades de **registro de usuário**, **login** e **recuperação de senha**. O sistema também inclui **controle de acesso** com diferentes níveis de permissão.

## Funcionalidades

- **Registro de Usuário:** Permite que novos usuários se cadastrem no sistema.
- **Login:** Autentica usuários com email e senha.
- **Recuperação de Senha:** Permite que os usuários recuperem a senha por meio de um link enviado por e-mail.
- **Controle de Acesso:** Níveis de permissão configuráveis para diferentes tipos de usuários.

## Tecnologias

- **NestJS**: Framework para Node.js usado para construir a API.
- **JWT**: Para geração de tokens e autenticação.
- **Passport**: Middleware para autenticação.
- **bcrypt**: Para encriptação de senhas.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/joaocastro0429/sistema-autenticacao-jwt.git


   Navegue até a pasta do projeto:

cd sistema-autenticacao-jwt

Instale as dependências:

npm install

Crie um arquivo .env com as variáveis de ambiente necessárias (por exemplo, para configuração do JWT, banco de dados, etc.).

Execute o projeto:

    npm run start

Estrutura do Projeto

    src/auth: Contém a lógica de autenticação (registro, login, recuperação de senha).

    src/users: Contém a lógica de usuários (modelos, serviços, controladores).

    src/common: Contém classes e interceptores comuns.
    
