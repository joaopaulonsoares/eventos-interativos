<h1 align="center">
    Eventos Interativos
</h1>
<h2 align="center">
    (Projeto em Desenvolvimento)
</h2>

<br>


## 💻 Projeto

Eventos Interativos é um projeto baseado na aplicação Audiências Interativas da Câmara dos deputados, desenvolvido de forma serverless utilizando NextJS para aplicação em conjunto com o Firebase. Permite a interação de pessoas durante uma transmissão ao vivo por meio de um chat e de uma sessão de perguntas que podem ser utilizadas pelos administradores para fomentar o debate do evento estimulando a participação pública.


## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NextJS](https://nextjs.org)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)

## Funcionalidades implementadas

- [x] Criação de salas para os eventos;
- [x] Autenticação utilizando login social Google;
- [x] Criação de salas para os eventos;
- [x] Chat para usuários em tempo real;
- [x] Área de perguntas em tempo real;
- [x] Votos em tempo real nas perguntas realizadas;
- [x] Página inicial com eventos ao vivo, eventos previstos e já encerrados;
- [x] Pesquisa de eventos agendados;

### Funcionalidades que serão implementadas
- [ ] Lista de palavras proibidas na seção de chate de perguntas com moderação automática do sistema;
- [ ] Painel de Administração do sistema para usuários administradores;
- [ ] Página de estatísticas para os usuários administradores;
- [ ] Moderação do Chat por parte dos administradores;
- [ ] Painel de administração da sala de um evento para administradores;
- [ ] Página de perfil do usuário, permitindo o gerenciamento de suas contribuições;
- [ ] Versão mobile da aplicação;


## Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ https://github.com/joaopaulonsoares/eventos-interativos
$ cd eventos-interativos
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ npm install

# Para iniciar em modo de desenvolvimento:
$  npm run dev
```

O app estará disponível no seu browser pelo endereço http://localhost:3000.

Lembrando que será necessário criar uma conta no [Firebase](https://firebase.google.com/) e um projeto para disponibilizar um Realtime Database.

### Configurações adicionais necessárias

Para executar o projeto é preciso se conectar a uma instância do RealTime Database do firebase. Para que a aplicação se conecte a sua instância crie um arquivo ".env.local" contendo as seguintes informações que podem ser encontradas na página de configurações do seu RealTime Database:

```bash
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_AUTH_DOMAIN=
NEXT_PUBLIC_DATABASE_URL=
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=
NEXT_PUBLIC_MESSAGING_SENDER_ID=
NEXT_PUBLIC_APP_ID=
NEXT_PUBLIC_MEASUREMENT_ID=
```

## 🔖 Layout

Você pode visualizar o layout do projeto através do link abaixo:

- [Layout Web](https://www.figma.com/file/ieohQ8CMFkJ1lp3dq2G0aS/Projeto-Pessoal-Novo-Audiências?node-id=0%3A1) 

Lembrando que você precisa ter uma conta no [Figma](http://figma.com/).

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.


# English

## 💻 Project

Eventos Interactivos is a project based on the Interactive Hearings application of the Chamber of Deputies, developed in a serverless way using NextJS for application in conjunction with Firebase. Allows the interaction of people during a live broadcast through a chat and a question session that can be used by administrators to encourage debate at the event, stimulating public participation.


## 🧪 Technologies

This project was developed with the following technologies:

- [NextJS](https://nextjs.org)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)

## Implemented features

- [x] Creation of rooms for events;
- [x] Authentication using Google social login;
- [x] Creation of rooms for events;
- [x] Chat for users in real time;
- [x] Real-time question area;
- [x] Real-time votes on the questions asked;
- [x] Home page with live events, scheduled and closed events;
- [x] Search for scheduled events;

### Features that will be implemented
- [ ] List of prohibited words in the chat section of questions with automatic moderation of the system;
- [ ] System Administration Panel for administrator users;
- [ ] Statistics page for admin users;
- [ ] Chat moderation by administrators;
- [ ] Event room administration panel for administrators;
- [ ] User profile page, allowing you to manage your contributions;
- [ ] Mobile version of the application;


## How to run

Clone the project and access its folder.

```bash
$ https://github.com/joaopaulonsoares/eventos-interativos
$cd events-interactive
```

To start it, follow the steps below:
```bash
# Install dependencies
$npm install

# To start in development mode:
$npm run dev
```

The app will be available in your browser at the address http://localhost:3000.

Remembering that you will need to create an account on [Firebase](https://firebase.google.com/) and a project to make a Realtime Database available.
### Additional settings required

To run the project you need to connect to a RealTime Database instance from firebase. In order for the application to connect to your instance, create a ".env.local" file containing the following information that can be found on your RealTime Database settings page:

bash
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_AUTH_DOMAIN=
NEXT_PUBLIC_DATABASE_URL=
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=
NEXT_PUBLIC_MESSAGING_SENDER_ID=
NEXT_PUBLIC_APP_ID=
NEXT_PUBLIC_MEASUREMENT_ID=


## 🔖 Layout

You can view the project layout through the link below:

- [Web Layout](https://www.figma.com/file/ieohQ8CMFkJ1lp3dq2G0aS/Projeto-Pessoal-Novo-Audiências?node-id=0%3A1)

Remembering that you need to have an account on [Figma](http://figma.com/).

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.
