const letterContainer = document.getElementById('letter-container');
const letterContent = document.getElementById('letter-content');
const gameBoard = document.getElementById('game-board');

const letterLines = [
  "Hai Revi... 🐣",
  "",
  "Terima kasih untuk kata-kata kamu yang hangat itu.",
  "Serius, tulisanmu itu bagus banget dan bener-bener penuh support 😊.",
  "Kadang seseorang cuma butuh diingatkan bahwa dia berarti.",
  "",
  "Dan kamu udah lakuin itu buat aku. 😌",
  "Makasih udah jadi teman yang nyambung dan nggak ngebosenin,",
  "yang bisa diajak ngobrol saat waktu luang. 😆",
  "",
  "Jadi... sebagai balasan... yaudahh... kamu *kena bom!* 💥",
  "Dan hukumanmu? Harus baca ini sampai habis yaa. 😜",
  "",
  "Aku bersyukur bisa kenal kamu. Jangan berubah, ya! ✨",
  "Tetap jadi Revi yang unik dan seru! 💫",
  "",
  "- dari seseorang yang juga senang mengenalmu 😄"
];

// Emoji lucu untuk kotak
const emojiList = ["🐸", "🐱", "🐷", "🐵", "😈", "👻", "💩", "🤡", "🐤", "🦄", "🐙", "🐼", "🤪", "🐶", "🐧"];
const totalCards = 15;
const bomIndex = Math.floor(Math.random() * totalCards);

for (let i = 0; i < totalCards; i++) {
  const card = document.createElement('div');
  card.classList.add('card');

  const emoji = emojiList[i % emojiList.length];
  card.textContent = emoji;

  card.addEventListener('click', () => {
    if (i === bomIndex) {
      card.textContent = "💣";
      triggerPunishment();
    } else {
      card.style.opacity = 0.4;
      card.style.pointerEvents = 'none';
    }
  });

  gameBoard.appendChild(card);
}

function triggerPunishment() {
  document.getElementById('game-container').style.display = 'none';
  letterContainer.classList.remove('hidden');
  showLetterLineByLine();
}

function showLetterLineByLine(index = 0) {
  if (index < letterLines.length) {
    const line = letterLines[index];
    const lineElement = document.createElement('div');
    letterContent.appendChild(lineElement);

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      lineElement.textContent += line.charAt(charIndex);
      charIndex++;
      if (charIndex >= line.length) {
        clearInterval(typingInterval);
        setTimeout(() => showLetterLineByLine(index + 1), 600);
      }
    }, 30);
  }
}
