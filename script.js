// Variáveis de estado
let flippedCards = []; // array que armazena as cartas viradas (sempre terá no máximo 2)
let matchedPairs = 0; // contador de pares encontrados
let attempts = 0; // contador de tentativas do jogador
let isCheckingPair = false; // trava o jogo enquanto verifica o par ou esconde as cartas

// Array com todas as cartas do jogo
const cardItems = [
  {
    content: "🌸",
    id: 1,
    matched: false,
  },
  {
    content: "🌸",
    id: 2,
    matched: false,
  },
  {
    content: "🌟",
    id: 3,
    matched: false,
  },
  {
    content: "🌟",
    id: 4,
    matched: false,
  },
  {
    content: "💫",
    id: 5,
    matched: false,
  },
  {
    content: "💫",
    id: 6,
    matched: false,
  },
  {
    content: "🚀",
    id: 7,
    matched: false,
  },
  {
    content: "🚀",
    id: 8,
    matched: false,
  },
  {
    content: "💅🏼",
    id: 9,
    matched: false,
  },
  {
    content: "💅🏼",
    id: 10,
    matched: false,
  },
  {
    content: "💜",
    id: 11,
    matched: false,
  },
  {
    content: "💜",
    id: 12,
    matched: false,
  },
  {
    content: "💎",
    id: 13,
    matched: false,
  },
  {
    content: "💎",
    id: 14,
    matched: false,
  },
  {
    content: "🔮",
    id: 15,
    matched: false,
  },
  {
    content: "🔮",
    id: 16,
    matched: false,
  },
];

function shuffleCards(array) {
  const shuffled = array.sort(() => (Math.random() > 0.5 ? 1 : -1)); // gera um número aleatório entre 0 e 1, se for maior que 0.5 retorna 1, senão retorna -1
  // positivo vai depois; negativo vai antes
  // o método sort() ordena os elementos do array de acordo com a função de comparação
  // nesse caso, estamos embaralhando os elementos do array
  return shuffled;
}

const cards = shuffleCards(cardItems);
console.log(cards);
