// ---------------- QUIZ ----------------
const quizData = [
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "Home Tool Markup", "Hyperlinks"],
    correct: 0
  },
  {
    question: "Which is used for styling?",
    answers: ["HTML", "CSS", "Python"],
    correct: 1
  },
  {
    question: "JavaScript is used for?",
    answers: ["Structure", "Styling", "Interactivity"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.onclick = () => checkAnswer(index);
    answersDiv.appendChild(btn);
  });

  document.getElementById("score").textContent = `Score: ${score}`;
}

function checkAnswer(index) {
  if (index === quizData[currentQuestion].correct) {
    score++;
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong!");
  }
}

function nextQuestion() {
  currentQuestion = (currentQuestion + 1) % quizData.length;
  loadQuestion();
}

loadQuestion();


// ---------------- CAROUSEL ----------------
const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400"
];

let currentImage = 0;

function showImage() {
  document.getElementById("carousel-img").src = images[currentImage];
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage();
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage();
}

// Auto slide every 3 sec
setInterval(nextImage, 3000);

showImage();


// ---------------- API ----------------
function getJoke() {
  const jokeEl = document.getElementById("joke");
  jokeEl.textContent = "Loading...";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      jokeEl.textContent = `${data.setup} 🤔 ... ${data.punchline} 😂`;
    })
    .catch(() => {
      jokeEl.textContent = "Failed to load joke 😢";
    });
}