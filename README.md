# TAIM (Backend)

 [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

TAIM is an educational game for learning gardening basics. This is the backend part of the project. 

Instructions are for Windows computer and Android phone.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)


## Prerequisites

[Visual Studio Code](https://code.visualstudio.com/)

[Node LTS 64-bit](https://nodejs.org/dist/v20.9.0/node-v20.9.0-x64.msi)

Install Linux on Windows (WSL 2) via your terminal:

```wsl --install```

Or if it does not install automatically follow [this](https://learn.microsoft.com/en-us/windows/wsl/install).

[Docker Desktop on Windows](https://docs.docker.com/desktop/install/windows-install/) (use WSL2)

Install extensions for VS Code:


* dsznajder.es7-react-js-snippets
* dbaeumer.vscode-eslint
* eamodio.gitlens
* GraphQL.vscode-graphql
* GraphQL.vscode-graphql-syntax
* esbenp.prettier-vscode
* Prisma.prisma

## Installation

```npm i```

Create .env file and add:

```DATABASE_URL="postgresql://db_user:db_password@localhost:5432/mydb?schema=public"```

## Usage

Create docker network:

```docker network create taimnetwork```

Start Docker:

```docker-compose up -d```

Run database migration to ensure your database is in sync with the Prisma schema:

```npx prisma migrate dev```

Populate the database with data:

```npx prisma db seed```

Start the server:

```npm start```

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- Email: happygardentaim@gmail.com
- GitHub: [peeptani](https://github.com/peeptani)