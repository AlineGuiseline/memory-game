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

// Função para embaralhar as cartas
function shuffleCards(array) {
  const shuffled = array.sort(() => (Math.random() > 0.5 ? 1 : -1)); // gera um número aleatório entre 0 e 1, se for maior que 0.5 retorna 1, senão retorna -1
  // positivo vai depois; negativo vai antes
  // o método sort() ordena os elementos do array de acordo com a função de comparação
  // nesse caso, estamos embaralhando os elementos do array
  return shuffled;
}

function createCard(card) {
  // cria o elemento principal da carta
  const cardElement = document.createElement("div");
  cardElement.className = "card";

  // cria o elemento do emoji
  const emoji = document.createElement("span");
  emoji.className = "card-emoji";
  emoji.textContent = card.content;

  // adiciona o emoji ao card
  cardElement.appendChild(emoji);

  // adiciona o evento de clique ao card
  cardElement.addEventListener("click", () => {
    handleCardClick(cardElement, card);
  });

  return cardElement;
}

function renderCards() {
  const deck = document.getElementById("deck");
  deck.innerHTML = "";

  const cards = shuffleCards(cardItems);

  cards.forEach((item) => {
    const cardElement = createCard(item);
    deck.appendChild(cardElement);
  });
}

function handleCardClick(cardElement, card) {
  if (isCheckingPair || cardElement.classList.contains("revealed")) {
    return; // ignora o clique enquanto verifica o par ou se a carta já está virada
  }
  // revela a carta
  cardElement.classList.add("revealed");

  // adiciona no array as cartas viradas
  flippedCards.push({ cardElement, card });

  // verifica se é a segunda carta virada
  if (flippedCards.length === 2) {
    isCheckingPair = true; // trava o jogo
    attempts++; // incrementa o contador de tentativas

    // selecionar as cartas viradas
    const [firstCard, secondCard] = flippedCards;

    // verifica se as cartas formam um par
    if (firstCard.card.content === secondCard.card.content) {
      matchedPairs++; // incrementa o contador de pares encontrados

      // marca as cartas como encontradas
      cardItems.forEach((item) => {
        if (item.content === firstCard.card.content) {
          item.matched = true;
        }
      });

      resetRevealedCards();

      // verifica se tem itens para encontrar
      const toFind = cardItems.find((item) => item.matched === false);

      // se não encontrar mais itens, exibe mensagem de vitória
      if (!toFind) {
        alert("Parabéns! Você encontrou todos os pares!");
      }
    } else {
      setTimeout(() => {
        firstCard.cardElement.classList.remove("revealed");
        secondCard.cardElement.classList.remove("revealed");

        resetRevealedCards();
      }, 1000);
    }
  }
}

function resetRevealedCards() {
  flippedCards = []; // limpa o array de cartas viradas
  isCheckingPair = false; // libera o jogo para novas jogadas
  updateStats();
}

function updateStats() {
  document.getElementById("stats").textContent = `${matchedPairs} ${
    matchedPairs === 1 ? "acerto" : "acertos"
  } de ${attempts} ${attempts === 1 ? "tentativa" : "tentativas"}`;
}

// função para reiniciar o jogo
function resetGame() {
  flippedCards = [];
  matchedPairs = 0;
  attempts = 0;
  isCheckingPair = false;

  // reseta o estado das cartas
  cardItems.forEach((item) => {
    item.matched = false;
  });

  // atualiza as estatísticas
  updateStats();

  // renderiza as cartas novamente
  renderCards();
}

function initGame() {
  renderCards();

  document.getElementById("reset").addEventListener("click", resetGame);
}

initGame();
