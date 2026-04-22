// BCA Software Engineering Questions (10 questions)
const quizData = [
    {
        question: "Which software development model follows the 'plan-design-code-test' sequence?",
        options: [
            { text: "Waterfall Model", isCorrect: true },
            { text: "Agile Model", isCorrect: false },
            { text: "Spiral Model", isCorrect: false },
            { text: "V-Model", isCorrect: false }
        ]
    },
    {
        question: "What does SRS stand for in software engineering?",
        options: [
            { text: "System Requirements Specification", isCorrect: true },
            { text: "Software Requirement Study", isComplete: false },
            { text: "System Resource Specification", isCorrect: false },
            { text: "Software Review Specification", isCorrect: false }
        ]
    },
    {
        question: "Which metric measures the number of defects per KLOC?",
        options: [
            { text: "Defect Density", isCorrect: true },
            { text: "Cyclomatic Complexity", isCorrect: false },
            { text: "Function Point", isCorrect: false },
            { text: "LOC", isCorrect: false }
        ]
    },
    {
        question: "In which phase of SDLC do we create the database schema?",
        options: [
            { text: "Design Phase", isCorrect: true },
            { text: "Requirement Phase", isCorrect: false },
            { text: "Coding Phase", isCorrect: false },
            { text: "Testing Phase", isCorrect: false }
        ]
    },
    {
        question: "What is the primary goal of Software Configuration Management (SCM)?",
        options: [
            { text: "Version Control", isCorrect: true },
            { text: "Code Optimization", isCorrect: false },
            { text: "Performance Testing", isCorrect: false },
            { text: "User Interface Design", isCorrect: false }
        ]
    },
    {
        question: "Which testing technique tests individual modules independently?",
        options: [
            { text: "Unit Testing", isCorrect: true },
            { text: "Integration Testing", isCorrect: false },
            { text: "System Testing", isCorrect: false },
            { text: "Acceptance Testing", isCorrect: false }
        ]
    },
    {
        question: "What does COCOMO stand for?",
        options: [
            { text: "Constructive Cost Model", isCorrect: true },
            { text: "Comprehensive Cost Management", isCorrect: false },
            { text: "Cost Optimization Model", isCorrect: false },
            { text: "Code Complexity Measurement", isCorrect: false }
        ]
    },
    {
        question: "Which design pattern provides a way to access elements of a collection without exposing its representation?",
        options: [
            { text: "Iterator Pattern", isCorrect: true },
            { text: "Factory Pattern", isCorrect: false },
            { text: "Singleton Pattern", isCorrect: false },
            { text: "Observer Pattern", isCorrect: false }
        ]
    },
    {
        question: "What is the main purpose of UML in software engineering?",
        options: [
            { text: "Visual modeling of systems", isCorrect: true },
            { text: "Code generation", isCorrect: false },
            { text: "Performance analysis", isCorrect: false },
            { text: "Database design", isCorrect: false }
        ]
    },
    {
        question: "Which process model is best suited for projects with high risk and uncertainty?",
        options: [
            { text: "Spiral Model", isCorrect: true },
            { text: "Waterfall Model", isCorrect: false },
            { text: "Incremental Model", isCorrect: false },
            { text: "RAD Model", isCorrect: false }
        ]
    }
];

// DOM Elements
const startScreenEl = document.getElementById('start-screen');
const quizScreenEl = document.getElementById('quiz-screen');
const resultScreenEl = document.getElementById('result-screen');
const questionEl = document.getElementById('question-text');
const answersEl = document.getElementById('answers-container');
const currentQEl = document.getElementById('current-question');
const totalQEl = document.getElementById('total-questions');
const scoreEl = document.getElementById('score');
const progressEl = document.getElementById('progress');
const finalScoreEl = document.getElementById('final-score');
const resultMsgEl = document.getElementById('result-message');
const startBtnEl = document.getElementById('start-btn');
const restartBtnEl = document.getElementById('restart-btn');

let currentQIndex = 0;
let userScore = 0;

// Initialize Quiz
function initQuiz() {
    startBtnEl.addEventListener('click', beginQuiz);
    restartBtnEl.addEventListener('click', resetQuiz);
}

// Start the quiz
function beginQuiz() {
    startScreenEl.classList.remove('active');
    quizScreenEl.classList.add('active');
    currentQIndex = 0;
    userScore = 0;
    displayCurrentQuestion();
}

// Display current question
function displayCurrentQuestion() {
    const qData = quizData[currentQIndex];
    
    // Update UI elements
    questionEl.textContent = qData.question;
    currentQEl.textContent = currentQIndex + 1;
    totalQEl.textContent = quizData.length;
    scoreEl.textContent = userScore;
    
    // Clear previous answers
    answersEl.innerHTML = '';
    
    // Create answer buttons
    qData.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = option.text;
        btn.addEventListener('click', () => handleAnswer(option.isCorrect));
        answersEl.appendChild(btn);
    });
    
    updateProgressBar();
}

// Handle answer selection
function handleAnswer(isCorrect) {
    if (isCorrect) {
        userScore++;
    }
    
    currentQIndex++;
    
    if (currentQIndex < quizData.length) {
        displayCurrentQuestion();
    } else {
        displayResults();
    }
}

// Update progress bar
function updateProgressBar() {
    const progressPercentage = ((currentQIndex ) / quizData.length) * 100;
    progressEl.style.width = progressPercentage + '%';
}

// Show final results
function displayResults() {
    quizScreenEl.classList.remove('active');
    resultScreenEl.classList.add('active');
    
    finalScoreEl.textContent = userScore;
    
    // Determine result message
    let message = '';
    let messageClass = '';
    
    if (userScore === quizData.length) {
        message = "🎊 Perfect Score! You're a Software Engineering Expert!";
        messageClass = 'perfect';
    } else if (userScore >= 7) {
        message = "👍 Excellent! Great understanding of Software Engineering!";
        messageClass = 'good';
    } else if (userScore >= 5) {
        message = "👌 Good job! Keep studying Software Engineering concepts!";
        messageClass = 'good';
    } else {
        message = "📚 Keep learning! Practice more Software Engineering questions!";
        messageClass = 'try-again';
    }
    
    resultMsgEl.textContent = message;
    resultMsgEl.className = messageClass;
}

// Reset quiz
function resetQuiz() {
    resultScreenEl.classList.remove('active');
    startScreenEl.classList.add('active');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initQuiz);