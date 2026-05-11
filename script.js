const LEADERBOARD_KEY = "onlineQuizLeaderboard";
const QUIZ_QUESTIONS_KEY = "quizQuestions";
const QUIZ_SETTINGS_KEY = "quizSettings";
const MAX_LEADERBOARD_ITEMS = 10;
const DEFAULT_QUESTIONS_PER_ATTEMPT = 5;

const defaultQuizData = {
  html: {
    title: "HTML Basics",
    description: "Tags, attributes, and page structure",
    questions: [
      {
        question: "Which tag is used to create a hyperlink in HTML?",
        answers: ["<link>", "<a>", "<href>", "<nav>"],
        correct: 1
      },
      {
        question: "What does the alt attribute provide for an image?",
        answers: ["Image size", "Image source", "Alternative text", "Image border"],
        correct: 2
      },
      {
        question: "Which element contains metadata about the webpage?",
        answers: ["<body>", "<main>", "<head>", "<footer>"],
        correct: 2
      },
      {
        question: "Which input type is best for collecting an email address?",
        answers: ["text", "mail", "email", "address"],
        correct: 2
      },
      {
        question: "What is the purpose of semantic HTML?",
        answers: ["Only to add colors", "To make content meaning clear", "To replace CSS", "To hide scripts"],
        correct: 1
      },
      {
        question: "Which tag is used for the largest heading?",
        answers: ["<heading>", "<h6>", "<h1>", "<title>"],
        correct: 2
      },
      {
        question: "Which tag creates an ordered list?",
        answers: ["<ul>", "<ol>", "<li>", "<list>"],
        correct: 1
      },
      {
        question: "Which attribute opens a link in a new tab?",
        answers: ["target=\"_blank\"", "new=\"tab\"", "open=\"new\"", "tab=\"true\""],
        correct: 0
      },
      {
        question: "Which element is used to collect form data?",
        answers: ["<form>", "<section>", "<article>", "<data>"],
        correct: 0
      },
      {
        question: "Which tag inserts a line break?",
        answers: ["<lb>", "<break>", "<br>", "<line>"],
        correct: 2
      }
    ]
  },
  css: {
    title: "CSS Styling",
    description: "Selectors, layout, and responsive design",
    questions: [
      {
        question: "Which CSS property changes text color?",
        answers: ["font-color", "text-color", "color", "paint"],
        correct: 2
      },
      {
        question: "Which layout module is ideal for one-dimensional alignment?",
        answers: ["Flexbox", "Tables", "Float", "Inline-block"],
        correct: 0
      },
      {
        question: "What does a media query help with?",
        answers: ["Database access", "Responsive styling", "Password hashing", "Server routing"],
        correct: 1
      },
      {
        question: "Which selector targets an element with id='quiz'?",
        answers: [".quiz", "#quiz", "quiz", "*quiz"],
        correct: 1
      },
      {
        question: "What does border-box include in an element's total width?",
        answers: ["Only content", "Content and margin", "Content, padding, and border", "Only padding"],
        correct: 2
      },
      {
        question: "Which property controls the space inside an element border?",
        answers: ["margin", "padding", "spacing", "outline"],
        correct: 1
      },
      {
        question: "Which CSS unit is relative to the root font size?",
        answers: ["px", "rem", "vh", "cm"],
        correct: 1
      },
      {
        question: "Which property changes the background color?",
        answers: ["background-color", "color-background", "bg-style", "paint-color"],
        correct: 0
      },
      {
        question: "Which value makes a grid column take available free space?",
        answers: ["auto-fit", "1fr", "max", "fill"],
        correct: 1
      },
      {
        question: "Which pseudo-class styles an element when the pointer is over it?",
        answers: [":focus", ":active", ":hover", ":visited"],
        correct: 2
      }
    ]
  },
  js: {
    title: "JavaScript",
    description: "DOM, events, variables, and logic",
    questions: [
      {
        question: "Which method selects an element by its id?",
        answers: ["getElementById()", "queryById()", "selectId()", "findElement()"],
        correct: 0
      },
      {
        question: "Which keyword declares a block-scoped variable?",
        answers: ["var", "let", "define", "set"],
        correct: 1
      },
      {
        question: "Which event runs when a user clicks a button?",
        answers: ["submit", "load", "click", "change"],
        correct: 2
      },
      {
        question: "What does JSON commonly store?",
        answers: ["Structured data", "Only images", "CSS rules", "Compiled code"],
        correct: 0
      },
      {
        question: "Which symbol is used for strict equality?",
        answers: ["=", "==", "===", "!="],
        correct: 2
      },
      {
        question: "Which method adds an item to the end of an array?",
        answers: ["push()", "pop()", "shift()", "join()"],
        correct: 0
      },
      {
        question: "Which browser API stores small key-value data locally?",
        answers: ["fetch", "localStorage", "canvas", "history"],
        correct: 1
      },
      {
        question: "Which function runs code after a fixed delay?",
        answers: ["setTimeout()", "setDelay()", "waitFor()", "pause()"],
        correct: 0
      },
      {
        question: "What does DOM stand for?",
        answers: ["Data Object Method", "Document Object Model", "Display Order Mode", "Digital Output Model"],
        correct: 1
      },
      {
        question: "Which method converts a JavaScript object to a JSON string?",
        answers: ["JSON.parse()", "JSON.stringify()", "Object.json()", "String.json()"],
        correct: 1
      }
    ]
  },
  web: {
    title: "Web Technology",
    description: "Mixed questions for viva practice",
    questions: [
      {
        question: "What is the main role of a web browser?",
        answers: ["Store databases", "Render web pages", "Compile Java", "Manage routers"],
        correct: 1
      },
      {
        question: "Which protocol is commonly used to transfer webpages?",
        answers: ["SMTP", "HTTP", "FTP only", "Bluetooth"],
        correct: 1
      },
      {
        question: "What does CSS stand for?",
        answers: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Syntax", "Code Styling System"],
        correct: 1
      },
      {
        question: "Which language adds interactivity to web pages?",
        answers: ["HTML", "CSS", "JavaScript", "SQL"],
        correct: 2
      },
      {
        question: "What is localStorage used for?",
        answers: ["Saving data in the browser", "Hosting a website", "Sending emails", "Drawing vector icons"],
        correct: 0
      },
      {
        question: "What does URL stand for?",
        answers: ["Uniform Resource Locator", "Universal Runtime Link", "User Request Location", "Unified Route List"],
        correct: 0
      },
      {
        question: "Which status code usually means a page was not found?",
        answers: ["200", "301", "404", "500"],
        correct: 2
      },
      {
        question: "Which tool is commonly used to inspect webpage HTML and CSS?",
        answers: ["Task Manager", "Developer Tools", "File Explorer", "Control Panel"],
        correct: 1
      },
      {
        question: "Which file name is commonly used as a website's home page?",
        answers: ["main.css", "index.html", "script.js", "home.exe"],
        correct: 1
      },
      {
        question: "Which web technology is mainly responsible for page structure?",
        answers: ["HTML", "CSS", "JavaScript", "HTTP"],
        correct: 0
      }
    ]
  }
};

let quizData = loadQuizData();

function loadQuizData() {
  const savedData = localStorage.getItem(QUIZ_QUESTIONS_KEY);
  if (savedData) {
    try {
      const parsed = JSON.parse(savedData);
      const merged = { ...defaultQuizData };
      Object.keys(merged).forEach(key => {
        if (parsed[key] && parsed[key].questions) {
          merged[key].questions = [...merged[key].questions, ...parsed[key].questions];
        }
      });
      return merged;
    } catch (e) {
      console.error("Error loading quiz data:", e);
    }
  }
  return defaultQuizData;
}

function saveQuestion(category, questionData) {
  const savedData = localStorage.getItem(QUIZ_QUESTIONS_KEY) || "{}";
  const parsed = JSON.parse(savedData);
  if (!parsed[category]) {
    parsed[category] = { questions: [] };
  }
  parsed[category].questions.push(questionData);
  localStorage.setItem(QUIZ_QUESTIONS_KEY, JSON.stringify(parsed));
  // Reload quizData
  quizData = loadQuizData();
}

function loadQuizSettings() {
  const savedSettings = localStorage.getItem(QUIZ_SETTINGS_KEY);
  if (savedSettings) {
    try {
      const settings = JSON.parse(savedSettings);
      return settings.questionsPerAttempt || DEFAULT_QUESTIONS_PER_ATTEMPT;
    } catch (e) {
      console.error("Error loading quiz settings:", e);
    }
  }
  return DEFAULT_QUESTIONS_PER_ATTEMPT;
}

function saveQuizSettings(questionsPerAttempt) {
  const settings = {
    questionsPerAttempt: Math.max(1, Math.min(50, questionsPerAttempt))
  };
  localStorage.setItem(QUIZ_SETTINGS_KEY, JSON.stringify(settings));
}

function shuffleArray(items) {
  const shuffledItems = [...items];

  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledItems[index], shuffledItems[randomIndex]] = [shuffledItems[randomIndex], shuffledItems[index]];
  }

  return shuffledItems;
}

const elements = {
  startScreen: document.getElementById("start-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),
  adminLoginScreen: document.getElementById("admin-login-screen"),
  adminScreen: document.getElementById("admin-screen"),
  // Updated to use select dropdown instead of grid
  categorySelect: document.getElementById("category-select"),
  studentName: document.getElementById("student-name"),
  startBtn: document.getElementById("start-btn"),
  adminBtn: document.getElementById("admin-btn"),
  adminPassword: document.getElementById("admin-password"),
  adminLoginBtn: document.getElementById("admin-login-btn"),
  adminCancelBtn: document.getElementById("admin-cancel-btn"),
  adminLogoutBtn: document.getElementById("admin-logout-btn"),
  adminCategory: document.getElementById("admin-category"),
  adminQuestion: document.getElementById("admin-question"),
  answerInputs: [
    document.getElementById("answer-0"),
    document.getElementById("answer-1"),
    document.getElementById("answer-2"),
    document.getElementById("answer-3")
  ],
  correctAnswer: document.getElementById("correct-answer"),
  saveQuestionBtn: document.getElementById("save-question-btn"),
  backToStartBtn: document.getElementById("back-to-start-btn"),
  questionsPerQuiz: document.getElementById("questions-per-quiz"),
  saveSettingsBtn: document.getElementById("save-settings-btn"),
  currentQuestionsDisplay: document.getElementById("current-questions-display"),
  quizCategory: document.getElementById("quiz-category"),
  questionCount: document.getElementById("question-count"),
  timerValue: document.getElementById("timer-value"),
  progressBar: document.getElementById("progress-bar"),
  questionText: document.getElementById("question-text"),
  answers: document.getElementById("answers"),
  nextBtn: document.getElementById("next-btn"),
  resultTitle: document.getElementById("result-title"),
  scorePercent: document.getElementById("score-percent"),
  scoreSummary: document.getElementById("score-summary"),
  correctCount: document.getElementById("correct-count"),
  wrongCount: document.getElementById("wrong-count"),
  timeUsed: document.getElementById("time-used"),
  reviewList: document.getElementById("review-list"),
  retryBtn: document.getElementById("retry-btn"),
  restartBtn: document.getElementById("restart-btn"),
  startLeaderboardList: document.getElementById("start-leaderboard-list"),
  resultLeaderboardList: document.getElementById("result-leaderboard-list"),
  clearLeaderboardBtn: document.getElementById("clear-leaderboard-btn")
};

// Admin shortfall banner elements (may be null if HTML not loaded yet)
elements.adminShortfallWarning = document.getElementById("admin-shortfall-warning");
elements.adminShortfallText = document.getElementById("admin-shortfall-text");
elements.adminStayBtn = document.getElementById("admin-stay-btn");
elements.adminLogoutForceBtn = document.getElementById("admin-logout-force-btn");

const ADMIN_PASSWORD = "admin123@";

const state = {
  categoryKey: "html",
  activeQuestions: [],
  currentQuestion: 0,
  score: 0,
  selectedAnswers: [],
  secondsLeft: 30,
  totalSecondsUsed: 0,
  timerId: null,
  isAdminLoggedIn: false,
  questionsPerAttempt: loadQuizSettings(),
  lastDesiredAttempt: null
};

function showScreen(screen) {
  [elements.startScreen, elements.quizScreen, elements.resultScreen, elements.adminLoginScreen, elements.adminScreen].forEach((item) => {
    item.classList.remove("active");
  });
  screen.classList.add("active");
}

function populateCategorySelect() {
  elements.categorySelect.innerHTML = "";
  const keys = Object.keys(quizData);
  
  const dropdown = document.getElementById("category-dropdown");
  const trigger = document.getElementById("dropdown-trigger");
  const menu = document.getElementById("dropdown-menu");
  const selectedText = trigger.querySelector(".dropdown-selected");
  
  keys.forEach((key, idx) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = quizData[key].title;
    if (idx === 0) {
      option.selected = true;
      state.categoryKey = key;
      selectedText.textContent = quizData[key].title;
    }
    elements.categorySelect.appendChild(option);
  });
  
  // Custom dropdown toggle
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });
  
  // Option selection
  menu.querySelectorAll(".dropdown-option").forEach(opt => {
    opt.addEventListener("click", () => {
      const value = opt.dataset.value;
      const title = quizData[value].title;
      
      state.categoryKey = value;
      elements.categorySelect.value = value;
      
      selectedText.textContent = title;
      menu.querySelectorAll(".dropdown-option").forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      
      dropdown.classList.remove("open");
    });
  });
  
  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
  
  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") dropdown.classList.remove("open");
  });
}

// Initialize Admin Dropdowns
function initAdminDropdowns() {
  // Admin Topic Dropdown
  const adminTopicDropdown = document.getElementById("admin-topic-dropdown");
  if (adminTopicDropdown) {
    const adminTopicTrigger = adminTopicDropdown.querySelector(".dropdown-trigger");
    const adminTopicMenu = adminTopicDropdown.querySelector(".dropdown-menu");
    const adminTopicSelected = adminTopicTrigger.querySelector(".dropdown-selected");
    const adminCategorySelect = document.getElementById("admin-category");
    
    adminTopicTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      adminTopicDropdown.classList.toggle("open");
    });
    
    adminTopicMenu.querySelectorAll(".dropdown-option").forEach(opt => {
      opt.addEventListener("click", () => {
        const value = opt.dataset.value;
        const text = opt.textContent;
        
        adminCategorySelect.value = value;
        adminTopicSelected.textContent = text;
        
        adminTopicMenu.querySelectorAll(".dropdown-option").forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
        
        adminTopicDropdown.classList.remove("open");
      });
    });
  }
  
  // Correct Answer Dropdown
  const correctAnswerDropdown = document.getElementById("correct-answer-dropdown");
  if (correctAnswerDropdown) {
    const correctAnswerTrigger = correctAnswerDropdown.querySelector(".dropdown-trigger");
    const correctAnswerMenu = correctAnswerDropdown.querySelector(".dropdown-menu");
    const correctAnswerSelected = correctAnswerTrigger.querySelector(".dropdown-selected");
    const correctAnswerSelect = document.getElementById("correct-answer");
    
    correctAnswerTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      correctAnswerDropdown.classList.toggle("open");
    });
    
    correctAnswerMenu.querySelectorAll(".dropdown-option").forEach(opt => {
      opt.addEventListener("click", () => {
        const value = opt.dataset.value;
        const text = opt.textContent;
        
        correctAnswerSelect.value = value;
        correctAnswerSelected.textContent = text;
        
        correctAnswerMenu.querySelectorAll(".dropdown-option").forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
        
        correctAnswerDropdown.classList.remove("open");
      });
    });
  }
  
  // Close admin dropdowns on outside click
  document.addEventListener("click", (e) => {
    if (adminTopicDropdown && !adminTopicDropdown.contains(e.target)) {
      adminTopicDropdown.classList.remove("open");
    }
    if (correctAnswerDropdown && !correctAnswerDropdown.contains(e.target)) {
      correctAnswerDropdown.classList.remove("open");
    }
  });
}

function startTypewriterAnimation() {
  const headingEl = document.querySelector('.typewriter-heading');
  const staticText = 'Online ';
  const animatedWord = 'Quiz';
  // clear any existing content
  headingEl.textContent = '';
  const staticSpan = document.createElement('span');
  staticSpan.textContent = staticText;
  headingEl.appendChild(staticSpan);
  const animSpan = document.createElement('span');
  headingEl.appendChild(animSpan);

  let idx = 0;
  let phase = 'type'; // type -> pauseFull -> delete -> pauseEmpty

  function step() {
    if (phase === 'type') {
      if (idx <= animatedWord.length) {
        animSpan.textContent = animatedWord.slice(0, idx);
        idx++;
        setTimeout(step, 150);
      } else {
        phase = 'pauseFull';
        setTimeout(step, 1000);
      }
    } else if (phase === 'pauseFull') {
      phase = 'delete';
      setTimeout(step, 200);
    } else if (phase === 'delete') {
      if (idx >= 0) {
        animSpan.textContent = animatedWord.slice(0, idx);
        idx--;
        setTimeout(step, 80);
      } else {
        phase = 'pauseEmpty';
        setTimeout(step, 400);
      }
    } else if (phase === 'pauseEmpty') {
      phase = 'type';
      idx = 0;
      setTimeout(step, 200);
    }
  }

  step();
}

function startQuiz() {
  // Validate student name
  const nameWarning = document.getElementById("name-warning");
  if (!elements.studentName.value.trim()) {
    nameWarning.classList.add("show");
    elements.studentName.classList.add("has-warning");
    elements.studentName.focus();
    return;
  }
  nameWarning.classList.remove("show");
  elements.studentName.classList.remove("has-warning");

  state.activeQuestions = createQuestionSet(quizData[state.categoryKey].questions);
  state.currentQuestion = 0;
  state.score = 0;
  state.selectedAnswers = [];
  state.totalSecondsUsed = 0;
  showScreen(elements.quizScreen);
  renderQuestion();
}

function renderQuestion() {
  clearInterval(state.timerId);

  const category = quizData[state.categoryKey];
  const question = state.activeQuestions[state.currentQuestion];
  const progress = (state.currentQuestion / state.activeQuestions.length) * 100;

  elements.quizCategory.textContent = category.title;
  elements.questionCount.textContent = `Question ${state.currentQuestion + 1} of ${state.activeQuestions.length}`;
  elements.progressBar.style.width = `${progress}%`;
  elements.questionText.textContent = question.question;
  elements.answers.innerHTML = "";
  elements.nextBtn.disabled = true;
  elements.nextBtn.textContent = state.currentQuestion === state.activeQuestions.length - 1 ? "Finish" : "Next";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => chooseAnswer(index));
    elements.answers.appendChild(button);
  });

  startTimer();
}

function startTimer() {
  state.secondsLeft = 30;
  elements.timerValue.textContent = state.secondsLeft;
  elements.timerValue.parentElement.classList.remove("warning");

  state.timerId = setInterval(() => {
    state.secondsLeft -= 1;
    state.totalSecondsUsed += 1;
    elements.timerValue.textContent = state.secondsLeft;

    if (state.secondsLeft <= 10) {
      elements.timerValue.parentElement.classList.add("warning");
    }

    if (state.secondsLeft === 0) {
      chooseAnswer(null);
    }
  }, 1000);
}

function chooseAnswer(selectedIndex) {
  clearInterval(state.timerId);

  const question = state.activeQuestions[state.currentQuestion];
  const buttons = [...elements.answers.querySelectorAll(".answer-btn")];
  const isCorrect = selectedIndex === question.correct;

  if (isCorrect) {
    state.score += 1;
  }

  state.selectedAnswers.push({
    question: question.question,
    answers: question.answers.map(ans => String(ans)), // Ensure all answers are strings
    selectedIndex,
    correctIndex: question.correct
  });

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.correct) {
      button.classList.add("correct");
    } else if (index === selectedIndex) {
      button.classList.add("wrong");
    }
  });

  elements.nextBtn.disabled = false;
}

function goNext() {
  const totalQuestions = state.activeQuestions.length;

  if (state.currentQuestion < totalQuestions - 1) {
    state.currentQuestion += 1;
    renderQuestion();
    return;
  }

  showResult();
}

function showResult() {
  clearInterval(state.timerId);

  const category = quizData[state.categoryKey];
  const student = elements.studentName.value.trim() || "Student";
  const totalQuestions = state.activeQuestions.length;
  const percentage = Math.round((state.score / totalQuestions) * 100);
  const wrongAnswers = totalQuestions - state.score;

  elements.progressBar.style.width = "100%";
  elements.resultTitle.textContent = `Well done, ${student}`;
  elements.scorePercent.textContent = `${percentage}%`;
  elements.scoreSummary.textContent = `You scored ${state.score} out of ${totalQuestions} in ${category.title}. ${getMessage(percentage)}`;
  elements.correctCount.textContent = state.score;
  elements.wrongCount.textContent = wrongAnswers;
  elements.timeUsed.textContent = `${state.totalSecondsUsed}s`;
  saveLeaderboardEntry({
    name: student,
    category: category.title,
    score: state.score,
    total: totalQuestions,
    percentage,
    time: state.totalSecondsUsed
  });
  renderReview();
  renderLeaderboard();
  showScreen(elements.resultScreen);
}

function getMessage(percentage) {
  if (percentage >= 80) {
    return "Excellent performance.";
  }
  if (percentage >= 50) {
    return "Good effort, revise the incorrect answers once.";
  }
  return "Keep practicing and try the quiz again.";
}

function renderReview() {
  elements.reviewList.innerHTML = "";

  state.selectedAnswers.forEach((item, index) => {
    // Ensure answers is an array
    const answersArray = Array.isArray(item.answers) ? item.answers : [];
    
    // Safely get the selected answer
    let selectedAnswer = "Not answered";
    if (item.selectedIndex !== null && item.selectedIndex !== undefined && item.selectedIndex >= 0 && item.selectedIndex < answersArray.length) {
      const ans = answersArray[item.selectedIndex];
      selectedAnswer = ans ? String(ans) : "Not answered";
    }
    
    // Safely get the correct answer
    let correctAnswer = "Not available";
    if (item.correctIndex !== null && item.correctIndex !== undefined && item.correctIndex >= 0 && item.correctIndex < answersArray.length) {
      const ans = answersArray[item.correctIndex];
      correctAnswer = ans ? String(ans) : "Not available";
    }

    const article = document.createElement("article");
    article.className = `review-item ${item.selectedIndex === item.correctIndex ? "" : "incorrect"}`;

    const qStrong = document.createElement("strong");
    qStrong.textContent = `Q${index + 1}. ${item.question}`;
    article.appendChild(qStrong);

    const pYour = document.createElement("p");
    pYour.textContent = `Your answer: ${selectedAnswer}`;
    article.appendChild(pYour);

    const pCorrect = document.createElement("p");
    pCorrect.textContent = `Correct answer: ${correctAnswer}`;
    article.appendChild(pCorrect);

    elements.reviewList.appendChild(article);
  });
}

function createQuestionSet(questionBank) {
  const uniqueQuestions = [];
  const seenQuestions = new Set();
  const shuffled = shuffleArray(questionBank);
  
  // Ensure no duplicate questions
  for (const q of shuffled) {
    if (!seenQuestions.has(q.question)) {
      uniqueQuestions.push(q);
      seenQuestions.add(q.question);
      if (uniqueQuestions.length === state.questionsPerAttempt) {
        break;
      }
    }
  }
  
  return uniqueQuestions.map((question) => {
    const shuffledAnswers = shuffleArray(question.answers);
    const correctAnswer = question.answers[question.correct];

    return {
      question: question.question,
      answers: shuffledAnswers,
      correct: shuffledAnswers.indexOf(correctAnswer)
    };
  });
}

function saveNewQuestion() {
  const category = elements.adminCategory.value;
  const question = elements.adminQuestion.value.trim();
  const answers = elements.answerInputs.map(input => input.value.trim());
  const correct = parseInt(elements.correctAnswer.value);

  if (!question || answers.some(ans => !ans)) {
    alert("Please fill in all fields.");
    return;
  }

  const questionData = {
    question,
    answers,
    correct
  };

  saveQuestion(category, questionData);

  // Clear form
  elements.adminQuestion.value = "";
  elements.answerInputs.forEach(input => input.value = "");
  elements.correctAnswer.value = "0";

  alert("Question added successfully!");
}

function getLeaderboard() {
  const savedData = localStorage.getItem(LEADERBOARD_KEY);

  if (!savedData) {
    return [];
  }

  try {
    return JSON.parse(savedData);
  } catch {
    return [];
  }
}

function saveLeaderboardEntry(entry) {
  const leaderboard = getLeaderboard();
  const entryWithDate = {
    ...entry,
    completedAt: new Date().toLocaleDateString("en-IN")
  };

  const sortedEntries = [...leaderboard, entryWithDate]
    .sort((first, second) => {
      if (second.percentage !== first.percentage) {
        return second.percentage - first.percentage;
      }
      if (second.score !== first.score) {
        return second.score - first.score;
      }
      return first.time - second.time;
    })
    .slice(0, MAX_LEADERBOARD_ITEMS);

  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(sortedEntries));
}

function getTotalParticipants() {
  const leaderboard = getLeaderboard();
  return leaderboard.length;
}

function renderLeaderboard() {
  const leaderboard = getLeaderboard();
  const totalParticipants = getTotalParticipants();
  
  // Update participants count
  const participantsCountElement = document.getElementById("participants-count");
  if (participantsCountElement) {
    participantsCountElement.textContent = `Participants: ${totalParticipants}`;
  }
  
  renderLeaderboardList(elements.startLeaderboardList, leaderboard.slice(0, 5));
  renderLeaderboardList(elements.resultLeaderboardList, leaderboard);
}

function renderLeaderboardList(container, leaderboard) {
  container.innerHTML = "";

  if (leaderboard.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty";
    emptyMessage.textContent = "No scores yet. Complete a quiz to appear here.";
    container.appendChild(emptyMessage);
    return;
  }

  leaderboard.forEach((entry, index) => {
    const row = document.createElement("article");
    row.className = "row";
    row.innerHTML = `
      <span class="rank">${index + 1}</span>
      <div>
        <p class="name">${entry.name}</p>
        <p class="meta">${entry.category} | ${entry.completedAt} | ${entry.time}s</p>
      </div>
      <span class="score">${entry.percentage}% (${entry.score}/${entry.total})</span>
    `;
    container.appendChild(row);
  });
}

function authenticateAdmin() {
  const password = elements.adminPassword.value.trim();
  const passwordWarning = document.getElementById("password-warning");
  if (password === ADMIN_PASSWORD) {
    state.isAdminLoggedIn = true;
    elements.adminPassword.value = "";
    passwordWarning.classList.remove("show");
    updateSettingsDisplay();
    showScreen(elements.adminScreen);
  } else {
    passwordWarning.classList.add("show");
    elements.adminPassword.value = "";
    elements.adminPassword.focus();
  }
}
function logoutAdmin() {
  // If admin attempted to set a higher number than was saved, show inline warning and prevent logout
  if (state.lastDesiredAttempt && state.lastDesiredAttempt > state.questionsPerAttempt) {
    // show banner and keep admin logged in
    if (elements.adminShortfallWarning && elements.adminShortfallText) {
      const desired = state.lastDesiredAttempt;
      const saved = state.questionsPerAttempt;
      const shortfall = desired - saved;
      const categoryKey = elements.adminCategory ? elements.adminCategory.value : state.categoryKey;
      const categoryTitle = (quizData[categoryKey] && quizData[categoryKey].title) ? quizData[categoryKey].title : categoryKey;
      elements.adminShortfallText.textContent = `Attempted ${desired} for ${categoryTitle}, saved ${saved}. Need ${shortfall} more.`;
      elements.adminShortfallWarning.style.display = "block";
    }
    return; // prevent logout so admin can add questions or explicitly logout
  }

  // proceed with logout
  state.isAdminLoggedIn = false;
  state.lastDesiredAttempt = null;
  elements.adminPassword.value = "";
  showScreen(elements.startScreen);
}

function forcedLogout() {
  // Force logout ignoring shortfall
  state.isAdminLoggedIn = false;
  state.lastDesiredAttempt = null;
  if (elements.adminShortfallWarning) elements.adminShortfallWarning.style.display = "none";
  elements.adminPassword.value = "";
  showScreen(elements.startScreen);
}

function updateSettingsDisplay() {
  elements.questionsPerQuiz.value = state.questionsPerAttempt;
  if (state.lastDesiredAttempt && state.lastDesiredAttempt > state.questionsPerAttempt) {
    const shortfall = state.lastDesiredAttempt - state.questionsPerAttempt;
    elements.currentQuestionsDisplay.textContent = `Current: ${state.questionsPerAttempt} questions per quiz (attempted ${state.lastDesiredAttempt}, need ${shortfall} more)`;
    if (elements.adminShortfallWarning && elements.adminShortfallText) {
      const desired = state.lastDesiredAttempt;
      const saved = state.questionsPerAttempt;
      const categoryKey = elements.adminCategory ? elements.adminCategory.value : state.categoryKey;
      const categoryTitle = (quizData[categoryKey] && quizData[categoryKey].title) ? quizData[categoryKey].title : categoryKey;
      elements.adminShortfallText.textContent = `Attempted ${desired} for ${categoryTitle}, saved ${saved}. Need ${shortfall} more.`;
      elements.adminShortfallWarning.style.display = 'block';
    }
  } else {
    elements.currentQuestionsDisplay.textContent = `Current: ${state.questionsPerAttempt} questions per quiz`;
    if (elements.adminShortfallWarning) elements.adminShortfallWarning.style.display = 'none';
  }
}

function saveAdminSettings() {
  const questionsPerAttemptDesired = parseInt(elements.questionsPerQuiz.value);

  if (isNaN(questionsPerAttemptDesired) || questionsPerAttemptDesired < 1) {
    alert("Please enter a valid number (at least 1).");
    return;
  }

  if (questionsPerAttemptDesired > 50) {
    alert("Maximum 50 questions per quiz.");
    return;
  }

  // Determine available questions for the currently selected admin category
  const categoryKey = elements.adminCategory ? elements.adminCategory.value : state.categoryKey;
  const available = (quizData[categoryKey] && Array.isArray(quizData[categoryKey].questions)) ? quizData[categoryKey].questions.length : 0;

  let savedAttempt = Math.min(questionsPerAttemptDesired, available);

  // If no questions available, ensure at least 1 is saved (fallback)
  if (savedAttempt < 1 && questionsPerAttemptDesired >= 1) {
    savedAttempt = 0; // keep zero to indicate nothing available
  }

  state.questionsPerAttempt = savedAttempt;
  saveQuizSettings(savedAttempt);

  // Track the admin's desired value so we can warn if there's a shortfall
  state.lastDesiredAttempt = questionsPerAttemptDesired;

  updateSettingsDisplay();

  if (savedAttempt < questionsPerAttemptDesired) {
    const shortfall = questionsPerAttemptDesired - savedAttempt;
    alert(`Saved ${savedAttempt} because only ${available} question${available !== 1 ? 's' : ''} exist in this category. You need ${shortfall} more to reach ${questionsPerAttemptDesired}.`);
  } else {
    alert(`Quiz settings updated! New attempts will have ${savedAttempt} questions.`);
  }
}

elements.startBtn.addEventListener("click", startQuiz);

// Hide name warning when user starts typing
elements.studentName.addEventListener("input", () => {
  const nameWarning = document.getElementById("name-warning");
  if (nameWarning) {
    nameWarning.classList.remove("show");
    elements.studentName.classList.remove("has-warning");
  }
});
elements.adminBtn.addEventListener("click", () => showScreen(elements.adminLoginScreen));
elements.adminLoginBtn.addEventListener("click", authenticateAdmin);

// Hide password warning when user starts typing
elements.adminPassword.addEventListener("input", () => {
  const passwordWarning = document.getElementById("password-warning");
  if (passwordWarning) passwordWarning.classList.remove("show");
});
elements.adminPassword.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    authenticateAdmin();
  }
});
elements.adminCancelBtn.addEventListener("click", () => showScreen(elements.startScreen));
function handleTopLogout(e) {
  // Refresh display (ensure latest state) and show banner if shortfall exists
  updateSettingsDisplay();
  if (state.lastDesiredAttempt && state.lastDesiredAttempt > state.questionsPerAttempt) {
    // banner will be shown by updateSettingsDisplay; prevent logout
    return;
  }
  // no shortfall — proceed
  logoutAdmin();
}

elements.adminLogoutBtn.addEventListener("click", handleTopLogout);
elements.saveQuestionBtn.addEventListener("click", saveNewQuestion);
elements.saveSettingsBtn.addEventListener("click", saveAdminSettings);
elements.backToStartBtn.addEventListener("click", () => {
  logoutAdmin();
});
// shortfall banner buttons
if (elements.adminStayBtn) {
  elements.adminStayBtn.addEventListener('click', () => {
    // hide banner and allow admin to stay
    if (elements.adminShortfallWarning) elements.adminShortfallWarning.style.display = 'none';
  });
}
if (elements.adminLogoutForceBtn) {
  elements.adminLogoutForceBtn.addEventListener('click', () => {
    forcedLogout();
  });
}
elements.nextBtn.addEventListener("click", goNext);
elements.restartBtn.addEventListener("click", () => {
  clearInterval(state.timerId);
  renderLeaderboard();
  showScreen(elements.startScreen);
});

// Retry button – start a new quiz with same settings
elements.retryBtn.addEventListener("click", () => {
  clearInterval(state.timerId);
  // Reset state variables for a fresh quiz session
  state.activeQuestions = createQuestionSet(quizData[state.categoryKey].questions);
  state.currentQuestion = 0;
  state.score = 0;
  state.selectedAnswers = [];
  state.totalSecondsUsed = 0;
  // Show quiz screen and render first question
  showScreen(elements.quizScreen);
  renderQuestion();
});
elements.clearLeaderboardBtn.addEventListener("click", () => {
  localStorage.removeItem(LEADERBOARD_KEY);
  renderLeaderboard();
});

populateCategorySelect();
initAdminDropdowns();
startTypewriterAnimation();
renderLeaderboard();
updateSettingsDisplay();

// Theme toggle functionality
const THEME_KEY = "quizAppTheme";

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
  const isDark = document.body.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.classList.toggle("is-dark", newTheme === "dark");
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  let themeToApply = "light";
  if (savedTheme) {
    themeToApply = savedTheme;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    themeToApply = "dark";
  }
  applyTheme(themeToApply);
  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.classList.toggle("is-dark", themeToApply === "dark");
  }
}

// Initialize theme on page load
initTheme();

// Theme toggle button
const themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", toggleTheme);
}

// Accessibility: focus management for screen readers
function announceToScreenReader(message) {
  const announcer = document.getElementById("screen-reader-announcer") || createAnnouncer();
  announcer.textContent = message;
}

function createAnnouncer() {
  const announcer = document.createElement("div");
  announcer.id = "screen-reader-announcer";
  announcer.setAttribute("aria-live", "polite");
  announcer.setAttribute("aria-atomic", "true");
  announcer.style.cssText = "position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;";
  document.body.appendChild(announcer);
  return announcer;
}

// Enhanced keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const activeScreen = document.querySelector(".screen.active");
    if (activeScreen && activeScreen.id === "admin-login-screen") {
      showScreen(elements.startScreen);
    }
  }
});

// Improve focus visibility for quiz answers
function enhanceAnswerFocus() {
  const answerButtons = document.querySelectorAll(".answer-btn");
  answerButtons.forEach(btn => {
    btn.addEventListener("focus", () => {
      btn.style.outline = "3px solid var(--brand)";
      btn.style.outlineOffset = "2px";
    });
    btn.addEventListener("blur", () => {
      btn.style.outline = "";
      btn.style.outlineOffset = "";
    });
  });
}

// Override renderQuestion to add focus enhancements
const originalRenderQuestion = renderQuestion;
renderQuestion = function() {
  originalRenderQuestion();
  setTimeout(enhanceAnswerFocus, 50);
};

// Override showScreen to manage focus
const originalShowScreen = showScreen;
showScreen = function(screen) {
  originalShowScreen(screen);
  // Focus first interactive element in the new screen
  const firstFocusable = screen.querySelector("button, input, select, textarea");
  if (firstFocusable) {
    setTimeout(() => firstFocusable.focus(), 100);
  }
  // Announce screen change to screen readers
  const screenName = screen.id.replace("-screen", "").replace(/-/g, " ");
  announceToScreenReader(`Now viewing ${screenName}`);
};
