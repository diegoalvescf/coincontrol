# Controle de Gastos

Este é um projeto com foco em estudos, é um aplicativo web de controle de gastos que permite aos usuários gerenciar suas despesas e receitas. Ele oferece recursos de CRUD (criação, leitura, atualização e exclusão) para os dados do usuário, bem como controle de lançamentos de gastos. Além disso, o aplicativo fornece totalizadores de gastos e entradas com base no mês selecionado. A lista de custos é renderizada dinamicamente de acordo com o mês selecionado pelo usuário.

## Tecnologias Utilizadas 

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- Next.js: Framework React de renderização do lado do servidor (SSR) e criação de aplicativos web.
- Firebase: Plataforma de desenvolvimento de aplicativos móveis e web.
- TypeScript: Linguagem de programação JavaScript com suporte a tipos estáticos.
- Tailwind CSS: Framework CSS utilitário para criação de interfaces responsivas.
- Mantine: Biblioteca de componentes React com foco em usabilidade e acessibilidade.
- Tabler Icons: Conjunto de ícones SVG gratuitos para uso em interfaces.
- HTML5: Linguagem de marcação para estruturar e apresentar o conteúdo da web.
- JavaScript (JS): Linguagem de programação para adicionar interatividade a páginas web.
- CSS: Linguagem de estilo para estilizar os elementos da página.

## Instalação e Execução

Siga as instruções abaixo para executar o projeto localmente:

1. Clone este repositório.
2. Navegue até o diretório do projeto.
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npm run dev` para iniciar o servidor de desenvolvimento.
5. Abra o navegador e acesse `http://localhost:3000`.

_obs: necessário configuração do firebase [Console do Firebase](https://console.firebase.google.com/)_

Após as configurações no firebase, basta configurar o projeto

- Copie as informações de configuração fornecidas pelo Firebase e adicione-as ao seu projeto.

- No diretório do projeto, abra o arquivo .env.local (ou crie um novo arquivo .env.local na raiz do projeto).
Adicione as seguintes variáveis de ambiente no arquivo .env.local:

   NEXT_PUBLIC_FIREBASE_PROJECT_ID= 
   
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN= 
   
   NEXT_PUBLIC_FIREBASE_API_KEY= 

## Caso deseje ver o projeto publicado, segue o link do projeto: https://coincontrol.vercel.app/
