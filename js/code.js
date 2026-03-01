const progressElement = document.getElementById("progress");
const introScreenElement = document.getElementById("intro-screen");
const quizSectionElement = document.getElementById("quiz-section");
const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("button-grid");
const imageElement = document.getElementById("question-image");
const resultCardElement = document.getElementById("result-card");
const resultTypeElement = document.getElementById("result-type");
const resultDrinkElement = document.getElementById("result-drink");
const resultTraitsElement = document.getElementById("result-traits");
const resultQuoteElement = document.getElementById("result-quote");
const resultBreakdownElement = document.getElementById("result-breakdown");
const startButtonElement = document.getElementById("start-button");
const restartButtonElement = document.getElementById("restart-button");

const temperamentTraits = {
  NT: "Strong, focused, and efficient.",
  NF: "Unique flavors, warmth, and comfort.",
  SJ: "No-nonsense picks with dependable quality.",
  SP: "Fun, adventurous drinks with personality.",
};

const temperamentQuotes = {
  NT: "You optimize the plan and still make it taste great.",
  NF: "You choose with heart, and it shows in your flavor.",
  SJ: "Reliable taste, clear choices, no fuss.",
  SP: "You follow energy, experiment fast, and keep it fun.",
};

const typeToDrink = {
  INTJ: "Matcha Latte",
  INTP: "Nitro Cold Brew",
  ENTJ: "Masala Chai",
  ENTP: "Diet Coke",
  INFJ: "Lavender Latte",
  INFP: "Hot Earl Grey Tea",
  ENFJ: "Hot Chocolate",
  ENFP: "Dubai Chocolate Latte",
  ISTJ: "Instant Coffee",
  ISFJ: "Espresso",
  ESTJ: "Iced Americano",
  ESFJ: "Iced Latte",
  ISTP: "Strawberry Matcha",
  ISFP: "Cold Brew with Citrus Sweet Cream",
  ESTP: "Iced Latte with 4x Shots",
  ESFP: "Mimosa",
};

const openingQuestions = [
  {
    axis: "EI",
    text: "It's your day off and you wake up refreshed. What's your first move?",
    options: [
      { text: "I want to stay in bed and recharge.", letter: "I" },
      { text: "Keep it low-key and chill on my own.", letter: "I" },
      { text: "Meet up with friends.", letter: "E" },
      { text: "Depends who's free. I'm down for something social.", letter: "E" },
    ],
  },
  {
    axis: "SN",
    text: "You decide to spend the day at a cafe. Which one do you choose?",
    options: [
      { text: "The new cafe that just opened and looks inviting.", letter: "N" },
      { text: "A hidden hole-in-the-wall that somehow pulls me in.", letter: "N" },
      { text: "My go-to spot where I know the best seat and order.", letter: "S" },
      { text: "The place with the best bang for buck.", letter: "S" },
    ],
  },
  {
    axis: "EI",
    text: "At the door, you see a friend you haven't spoken to in ages. What do you do?",
    options: [
      { text: "Look away and pretend I didn't see them.", letter: "I" },
      { text: "Think about saying hi, then decide not to.", letter: "I" },
      { text: "Run over and say hi right away.", letter: "E" },
      { text: "Wait for the moment, then start a chat.", letter: "E" },
    ],
  },
  {
    axis: "JP",
    text: "You reach the counter. What do you order?",
    options: [
      { text: "The drink I already researched.", letter: "J" },
      { text: "The most popular drink on the menu.", letter: "J" },
      { text: "Ask the barista for a recommendation.", letter: "P" },
      { text: "Pick the one that just feels right.", letter: "P" },
    ],
  },
  {
    axis: "TF",
    text: "Your first choice is sold out. How do you react?",
    options: [
      { text: "I'm frustrated there wasn't a sold-out sign.", letter: "T" },
      { text: "I ask why it sold out and what happened.", letter: "T" },
      { text: "All good, these things happen.", letter: "F" },
      { text: "The staff looks stressed, so I stay kind about it.", letter: "F" },
    ],
  },
  {
    axis: "EI",
    text: "Back at your seat, how do you spend your cafe time?",
    options: [
      { text: "Sit quietly and read.", letter: "I" },
      { text: "Journal and enjoy solo time.", letter: "I" },
      { text: "Wait for my friends.", letter: "E" },
      { text: "Chat with people nearby (or their dog).", letter: "E" },
    ],
  },
];

const soloBranchQuestions = [
  {
    axis: "JP",
    text: "Spotify recommends an artist you don't usually listen to. What now?",
    options: [
      { text: "Skip it. I'm locking in with my usual playlist.", letter: "J" },
      { text: "Quickly research them before deciding.", letter: "J" },
      { text: "Nice, I'll give it a listen.", letter: "P" },
      { text: "The cover art looks cool. I'm in.", letter: "P" },
    ],
  },
  {
    axis: "TF",
    text: "A friend messages you saying work was rough. How do you support them?",
    options: [
      { text: "Ask exactly what happened and troubleshoot.", letter: "T" },
      { text: "Help them sort what's in their control.", letter: "T" },
      { text: "Send a voice note hyping them up.", letter: "F" },
      { text: "Offer emotional support and listen.", letter: "F" },
    ],
  },
  {
    axis: "JP",
    text: "You leave the cafe with a couple hours free. What's the plan?",
    options: [
      { text: "Make a to-do list and get productive.", letter: "J" },
      { text: "Check what's nearby and make a plan.", letter: "J" },
      { text: "Wander and decide in the moment.", letter: "P" },
      { text: "Walk around and see where the day goes.", letter: "P" },
    ],
  },
];

const socialBranchQuestions = [
  {
    axis: "JP",
    text: "Your friends finally arrive after being 30 minutes late. How do you react?",
    options: [
      {
        text: "I already planned how the day would go, and now everything feels off.",
        letter: "J",
      },
      {
        text: "I had a quiet moment to myself while waiting, so I adjusted.",
        letter: "J",
      },
      { text: "I probably didn't even notice they were late.", letter: "P" },
      {
        text: "Time flew while I people-watched and daydreamed.",
        letter: "P",
      },
    ],
  },
  {
    axis: "TF",
    text: "One friend had a rough date. How do you cheer them up?",
    options: [
      { text: "Ask what happened and help troubleshoot it.", letter: "T" },
      { text: "Help list what's in their control and what is not.", letter: "T" },
      { text: "Tell them they're doing amazing.", letter: "F" },
      { text: "Offer them a shoulder to cry on.", letter: "F" },
    ],
  },
  {
    axis: "JP",
    text: "After finishing your coffees, what is the plan?",
    options: [
      { text: "We have a tight schedule. Let's move on.", letter: "J" },
      {
        text: "I already booked tickets for an exhibit, so we head there.",
        letter: "J",
      },
      { text: "Let's wander and see where we end up.", letter: "P" },
      { text: "Let's see what's happening around us and decide.", letter: "P" },
    ],
  },
];

const closingQuestions = [
  {
    axis: "SN",
    text: "You pause to watch the sunset. What goes through your mind?",
    options: [
      { text: "I wonder the exact sunset time today.", letter: "S" },
      { text: "Perfect light for a walk right now.", letter: "S" },
      { text: "It reminds me of a vivid memory.", letter: "N" },
      { text: "I feel small, peaceful, and reflective.", letter: "N" },
    ],
  },
  {
    axis: "TF",
    text: "On your walk home, you pass a flower shop. How do you choose a bouquet?",
    options: [
      { text: "Pick buds that will bloom and last longer.", letter: "T" },
      { text: "Choose one that best complements my decor.", letter: "T" },
      { text: "Choose the one that makes me feel calm.", letter: "F" },
      { text: "Pick the one that feels nostalgic.", letter: "F" },
    ],
  },
  {
    axis: "SN",
    text: "You settle down for the night. What thoughts show up first?",
    options: [
      { text: "I mentally prep tomorrow's calendar and tasks.", letter: "S" },
      { text: "I check practical details like alarm and outfit.", letter: "S" },
      { text: "My mind wanders through what-ifs and ideas.", letter: "N" },
      { text: "I feel grateful and trust tomorrow to unfold.", letter: "N" },
    ],
  },
];

function buildQuestionFlow(branch) {
  const middle = branch === "social" ? socialBranchQuestions : soloBranchQuestions;
  return [...openingQuestions, ...middle, ...closingQuestions];
}

let activeQuestions = buildQuestionFlow("solo");

let currentQuestionIndex = 0;
let scores = freshScores();

function freshScores() {
  return { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
}

function showIntro() {
  introScreenElement.classList.remove("hidden");
  quizSectionElement.classList.add("hidden");
  resultCardElement.classList.add("hidden");
  progressElement.textContent = "";
  progressElement.classList.add("hidden");
  imageElement.src = "images/cat.jpeg";
}

function startQuiz() {
  scores = freshScores();
  currentQuestionIndex = 0;
  activeQuestions = buildQuestionFlow("solo");
  introScreenElement.classList.add("hidden");
  quizSectionElement.classList.remove("hidden");
  resultCardElement.classList.add("hidden");
  progressElement.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const question = activeQuestions[currentQuestionIndex];
  progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${
    activeQuestions.length
  }`;
  textElement.textContent = question.text;
  imageElement.src = "images/cat.jpeg";

  optionButtonsElement.replaceChildren();
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.className = "button";
    button.addEventListener("click", () => selectOption(option.letter));
    optionButtonsElement.appendChild(button);
  });
}

function selectOption(letter) {
  scores[letter] += 1;

  // Question 6 determines whether Q7-Q9 follow solo or friends branch.
  if (currentQuestionIndex === 5) {
    activeQuestions = buildQuestionFlow(letter === "E" ? "social" : "solo");
  }

  currentQuestionIndex += 1;

  if (currentQuestionIndex < activeQuestions.length) {
    renderQuestion();
    return;
  }

  renderResult();
}

function buildType() {
  const ei = scores.E >= scores.I ? "E" : "I";
  const sn = scores.S >= scores.N ? "S" : "N";
  const tf = scores.T >= scores.F ? "T" : "F";
  const jp = scores.J >= scores.P ? "J" : "P";
  return `${ei}${sn}${tf}${jp}`;
}

function renderResult() {
  const type = buildType();
  const drink = typeToDrink[type] || "Mystery House Blend";
  const temperament = `${type[1]}${type[3]}`;

  progressElement.textContent = "";
  progressElement.classList.add("hidden");
  textElement.textContent = "You finished the quiz.";
  optionButtonsElement.replaceChildren();
  imageElement.src = "images/coffee.webp";

  resultTypeElement.textContent = type;
  resultDrinkElement.textContent = `Your drink match: ${drink}`;
  resultTraitsElement.textContent = temperamentTraits[temperament];
  resultQuoteElement.textContent = `"${temperamentQuotes[temperament]}"`;
  resultBreakdownElement.textContent = `Score breakdown · E:${scores.E} I:${scores.I} · S:${scores.S} N:${scores.N} · T:${scores.T} F:${scores.F} · J:${scores.J} P:${scores.P}`;
  resultCardElement.classList.remove("hidden");
}

startButtonElement.addEventListener("click", startQuiz);
restartButtonElement.addEventListener("click", showIntro);

showIntro();
