## 📖 Guessing Game

[🇧🇷 Leia esta documentação em Inglês](./README.md)

O "Guessing Game" é um jogo interativo de adivinhação de palavras desenvolvido com React e TypeScript. O objetivo é desafiar o usuário a descobrir uma palavra secreta com base em uma dica temática, testando seu vocabulário e raciocínio lógico.

## 👩‍💻 O que eu aprendi

Neste projeto, foquei em dominar os fundamentos do React e a criação de interfaces interativas e dinâmicas. Os principais aprendizados foram:

--> 1. **Gerenciamento de Estado Complexo:** Utilização do hook `useState` para controlar múltiplos estados sincronizados, como a pontuação (score), as letras já utilizadas (`lettersUsed`), e o desafio atual (challenge).

--> 2. **Ciclo de Vida com useEffect:** Implementação de efeitos colaterais para monitorar o progresso do jogador. Um efeito é disparado a cada atualização de pontuação ou tentativas, verificando automaticamente as condições de vitória ou derrota.

--> 3. **Lógica de Jogo e Manipulação de Arrays:** Desenvolvimento de algoritmos para selecionar palavras aleatoriamente, filtrar letras repetidas e validar palpites comparando strings de forma insensível a maiúsculas/minúsculas.

--> 4. **Interface Baseada em Componentes:** Criação de componentes modulares e reutilizáveis (`Letter`, `Input`, `Button`, `Tip`).

--> 5. **Tipagem Estática com TypeScript:** Definição de interfaces e tipos personalizados para segurança dos dados, especialmente na manipulação de objetos complexos como o "Challenge" e as "LettersUsedProps".

--> 6. **Experiência do Usuário (UX):** Implementação de feedbacks visuais dinâmicos (mudança de cor das letras), janelas de confirmação para reiniciar o jogo e controle de foco automático no campo de entrada.


## 💻 Estrutura do projeto

├── node_modules # Dependências

├── public  # Assets públicos estáticos

├── src 

├── .gitignore

├── index.html

├── package-lock.json

├── package.json  # Dependências e scripts (Vite/React)

├── README.md

├── README-pt-BR.md

├── tsconfig.app.json

├── tsconfig.json

├── tsconfig.node.json # Configurações do TypeScript

└── vit.config.ts 

## 💾 Pré-requisitos

--> Node.js

--> npm or yarn

## 🚀 Como executar o projeto

--> Clone o repositório

--> Instale as dependências

--> Inicie o servidor de desenvolvimento

--> Utilize "npm run dev"

O servidor será iniciado e você poderá acessar o jogo na porta configurada.

## ⚙️ Tecnologias utilizadas
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

--> React

--> Vite

--> TypeScript

--> CSS Modules

--> ESLint

--> Git & GitHub