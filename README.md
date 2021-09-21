<h1 align="center">
    Eventos Interativos
</h1>
<h2 align="center">
    (Projeto em Desenvolvimento)
</h2>

<br>


## 💻 Projeto

Eventos Interativos é um projeto baseado na aplicação Audiências Interativas da Câmara dos deputados. Permite a interação de pessoas durante uma transmissão ao vivo por meio de um chat e de uma sessão de perguntas que podem ser utilizadas pelos administradores para fomentar o debate do evento estimulando a participação pública.


## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NextJS](https://nextjs.org)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)

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
- [ ] Painel de Administração do sistema para usuários administradores;
- [ ] Página de estatísticas para os usuários administradores;
- [ ] Moderação do Chat por parte dos administradores;
- [ ] Painel de administração da sala de um evento para administradores;
- [ ] Página de perfil do usuário, permitindo o gerenciamento de suas contribuições;


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

---

Feito com 💜 by Rocketseat 👋🏻 [Participe da nossa comunidade](https://discord.gg/gKUVrzrPrU)