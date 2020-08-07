<h1 align="center">
  Gobarber API
</h1>

O Gobarber API é uma aplicação completa desenvolvida em Javascript para realizar cadastro de usuários e provedores de serviços, marcação e consulta de agendamentos.

## Iniciando

As instruções abaixo vão orientá-lo a copiar o projeto e executar na sua máquina local para fins de desenvolvimento e testes.

### 1. Pré-requisitos

Intalação dos seguntes softwares:

1.1 Ambiente
- [NodeJS](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Git](https://git-scm.com/downloads)
- [VSCode](https://code.visualstudio.com/download)
- [Insomnia Core](https://insomnia.rest/download/)

1.2 Bases de dados
- [Docker](https://docs.docker.com/get-docker/)

### 2. Configurando ambiente
2.1 Base de dados

Após a instalação e configuração do docker, baixar as seguintes imagens:
- PostgreSQL

`$ docker run --name postgresql -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgresql`

- MongoDB

`$ docker run --name mongodb -p 27017:27017 -d -t mongo`

- Redis

`$ docker run --name redis -p 6379:6379 -d -t redis:alpine`

Criar base de dados no PostgreSQL e no MongoDB com o nome **gobarber**.

2.2 Aplicação

Baixar as seguintes extensões para o VSCode:

- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Utilizando o VSCode, ir no diretório da aplicação e baixar as dependências de desenvolvimento:

`$ yarn`

Criar um arquivo **.env** e adicionar as configurações que estão no arquivo **.env.example**. Os parâmetros de conexão do Redis devem estar de acordo com as configurações de instalação da sua máquina.

Procurar algum serviço de criptografia _MD5_ online e gerar uma chave única. Essa chave deve ser adicionanda à variável **APP_SECRET** do arquivo **.env** criado.

### 3. Executando aplicação

Executar as três base de dados instalados no docker

Executar a aplicação node:

`$ yarn dev:server`
