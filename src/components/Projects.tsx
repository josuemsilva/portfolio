const projects = [
  {
    title: ["Sistema de Chamados", "Help Desk System"],
    description: [
      "Projeto CRUD de chamados. Conta com uma validação em formato de login e personalização de perfil (upload de fotos e nome de usuário).",
      "CRUD project based on a ticketing system. Has an authentication method in a login format and profile customization (pictures upload e username).",
    ],
    technologies: "ReactJS - Firebase",
    image: "sistemasPro.png",
    ghLink: "https://github.com/josuemsilva/sistema",

    deployLink: "https://josuemsilva.github.io/sistema",
  },
  {
    title: [
      "Sistema de Cadastro de Pessoas e Cidades",
      "People And Cities Registration System",
    ],
    description: [
      "Projeto CRUD com o objetivo de registrar pessoas (sendo possível colocar nome e e-mail) e a cidade onde moram, de forma totalmente customizável, responsiva e performática. Autentificação falsa.",
      "CRUD project aimed at registering people (allowing you to input name and email) and the city where they live, in a fully customizable, responsive, and performatic way. Fake authentication.",
    ],
    technologies: "ReactJS - TypeScript - Material UI - JSON Server",
    image: "citiespeople.png",
    ghLink: "https://github.com/josuemsilva/cidades-e-pessoas",
    deployLink: "https://josuemsilva.github.io/cidades-e-pessoas/",
  },
  {
    title: ["Buscador de Repositórios", "Repository Finder"],
    description: [
      "Projeto buscador de repositórios e issues do GitHub. Exemplo de uso: facebook/react.",
      "Project to search for GitHub repositories and issues. Example: facebook/react.",
    ],
    technologies: "ReactJS - Axios - GitHub API",
    image: "repo.png",
    ghLink: "https://github.com/josuemsilva/projeto_repos",
    deployLink: "https://josuemsilva.github.io/projeto_repos/",
  },
  {
    title: ["Conversor de Moeda", "Currency Converter"],
    description: [
      "Projeto de Conversor de Moeda, mostrando a cotação das 5 principais moedas do mundo ao inserir um valor.",
      "Currency Converter project, showing the exchange rate of the 5 main currencies in the world when entering a value.",
    ],
    image: "conv.png",
    technologies: "ReactJS - Axios - ExchangeRate API",
    ghLink: "https://github.com/josuemsilva/3_conversor_moedas",
    deployLink: "https://josuemsilva.github.io/3_conversor_moedas/",
  },
  {
    title: "React Hook Form",
    description: [
      "Projeto básico de formulário de cadastramento. Inclui Schema de validação de dados.",
      "Basic registration form project. Includes data validation Schema.",
    ],
    technologies: "ReactJS - React Hook Form - Typescript - TailwindCSS",
    image: "hookform.png",
    ghLink: "https://github.com/josuemsilva/21_React_Hook_Form_TS",
    deployLink: "https://josuemsilva.github.io/21_React_Hook_Form_TS/",
  },
  {
    title: ["Jogo da Memória", "Memory Game"],
    description: [
      "Projeto de jogo da memória simples, utilizando React. Há 6 tentativas para vencer o jogo, se elas se esgotarem, basta clicar em 'reiniciar o jogo'",
      "Simple memory game project using React. There are 6 attempts to win the game, if they run out, just click 'restart the game.'",
    ],
    technologies: "ReactJS",
    image: "memory.png",
    ghLink: "https://github.com/josuemsilva/24_memory_game",
    deployLink: "https://josuemsilva.github.io/24_memory_game/",
  },
  {
    title: ["Avaliação Multi-Etapa", "Multi-Step Review"],
    description: [
      "Projeto de avaliação de produto contendo identificação, nível de satisfação do usuário, e uma mensagem com um resumo da avaliação.",
      "Product review project including identification, user satisfaction level, and a message with a summary of the evaluation.",
    ],
    technologies: "ReactJS, Typescript",
    image: "review.png",
    ghLink: "https://github.com/josuemsilva/20_multistep_form",
    deployLink: "https://josuemsilva.github.io/20_multistep_form/",
  },
  {
    title: ["Filmes em cartaz", "Now Showing Movies"],
    description: [
      "Projeto que mostra quais filmes estão em cartaz, contendo poster, trailer e avaliação. É possível favoritar filmes.",
      "Project that shows movies currently playing, including poster, trailer, and rating. It is possible to favorite movies.",
    ],
    technologies: "ReactJS, TheMovieDB API",
    image: "movies.png",
    ghLink: "https://github.com/josuemsilva/20_multistep_form",
    deployLink: "https://josuemsilva.github.io/20_multistep_form/",
  },
];

export default projects;
