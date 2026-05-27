// Quiz Controller
class QuizManager {
    constructor(quizData, difficulty = 'moyen') {
        this.allQuizData = quizData;
        this.difficulty = difficulty;
        
        // Get all questions for the selected difficulty
        const allQuestions = quizData[difficulty] || quizData.moyen;
        
        // Shuffle and select 10 random questions from the pool of 20+
        this.quizData = {
            ...quizData,
            questions: this.getRandomQuestions(allQuestions, 10)
        };
        
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswers = [];
        this.quizStarted = false;
        this.quizFinished = false;
        this.answered = false;
    }

    // Shuffle array using Fisher-Yates algorithm
    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Get 10 random questions from the pool
    getRandomQuestions(allQuestions, count = 10) {
        const shuffled = this.shuffle(allQuestions);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    init() {
        this.renderQuestion();
    }

    renderQuestion() {
        if (this.currentQuestion >= this.quizData.questions.length) {
            this.finishQuiz();
            return;
        }

        const question = this.quizData.questions[this.currentQuestion];
        const questionContainer = document.getElementById('question-container');
        const progressBar = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');

        // Update progress
        const progress = ((this.currentQuestion + 1) / this.quizData.questions.length) * 100;
        progressBar.style.width = progress + '%';
        progressText.textContent = `Question ${this.currentQuestion + 1}/${this.quizData.questions.length}`;

        // Render question with randomized answer order
        const optionsWithIndex = question.options.map((option, index) => ({ option, index }));
        const shuffledOptions = this.shuffle(optionsWithIndex);

        let html = `
            <div class="question-number">Question ${this.currentQuestion + 1}</div>
            <div class="question-text">${question.question}</div>
            <div class="options">
        `;

        shuffledOptions.forEach((item) => {
            html += `
                <label class="option" data-index="${item.index}">
                    <input type="radio" name="answer" value="${item.index}">
                    <span>${item.option}</span>
                </label>
            `;
        });

        html += `
            </div>
            <div class="explanation" id="question-explanation">
                <div class="explanation-title">💡 Explication :</div>
                <div class="explanation-text">${question.explanation || 'Pas d\'explication disponible.'}</div>
            </div>
            <div class="source" id="question-source">
                <div class="source-title">📚 Source :</div>
                <div class="source-text">${question.source}</div>
            </div>
        `;

        questionContainer.innerHTML = html;

        // Add event listeners to radio buttons
        document.querySelectorAll('input[name="answer"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.selectAnswer(parseInt(e.target.value)));
        });

        // Reset state
        this.answered = false;
        this.updateNavigationButtons();
    }

    selectAnswer(index) {
        if (this.answered) return; // Prevent changing answer after submission

        this.selectedAnswers[this.currentQuestion] = index;
        const question = this.quizData.questions[this.currentQuestion];
        const isCorrect = index === question.correct;

        // Mark answer as answered
        this.answered = true;

        // Update score
        if (isCorrect) {
            this.score++;
        }

        // Show feedback
        this.showFeedback(isCorrect, question);

        // Disable all options
        document.querySelectorAll('input[name="answer"]').forEach(radio => {
            radio.disabled = true;
        });

        // Update button state
        this.updateNavigationButtons();
    }

    showFeedback(isCorrect, question) {
        const options = document.querySelectorAll('.option');
        
        options.forEach((option) => {
            const optionIndex = parseInt(option.dataset.index, 10);
            if (optionIndex === question.correct) {
                option.classList.add('correct');
            }
            if (optionIndex === this.selectedAnswers[this.currentQuestion] && !isCorrect) {
                option.classList.add('incorrect');
            }
            option.classList.add('disabled');
        });

        // Show explanation
        const explanationElement = document.getElementById('question-explanation');
        if (explanationElement) {
            explanationElement.classList.add('show');
        }

        // Show source
        const sourceElement = document.getElementById('question-source');
        if (sourceElement) {
            sourceElement.classList.add('show');
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-button');
        const nextBtn = document.getElementById('next-button');

        if (prevBtn) {
            if (this.currentQuestion === 0) {
                prevBtn.style.display = 'none';
                prevBtn.disabled = true;
            } else {
                prevBtn.style.display = 'inline-block';
                prevBtn.disabled = false;
            }
        }
        
        if (nextBtn) {
            if (this.answered) {
                if (this.currentQuestion === this.quizData.questions.length - 1) {
                    nextBtn.textContent = 'Voir les résultats';
                } else {
                    nextBtn.textContent = 'Suivant →';
                }
                nextBtn.disabled = false;
            } else {
                nextBtn.disabled = true;
                if (this.currentQuestion === this.quizData.questions.length - 1) {
                    nextBtn.textContent = 'Terminer';
                } else {
                    nextBtn.textContent = 'Suivant →';
                }
            }
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.quizData.questions.length - 1) {
            this.currentQuestion++;
            this.renderQuestion();
        } else {
            this.finishQuiz();
        }
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.renderQuestion();
        }
    }

    finishQuiz() {
        this.showResults();
    }

    showResults() {
        const quizContainer = document.getElementById('quiz-container');
        const resultsContainer = document.getElementById('results-container');
        
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';

        const percentage = (this.score / this.quizData.questions.length) * 100;
        
        // Support both old and new structure
        const scorePercentageElement = document.getElementById('score-percentage');
        const scoreTextElement = document.getElementById('score-text');
        const performanceMessageElement = document.getElementById('performance-message');
        const reviewSection = document.getElementById('review-section');
        const messageElement = document.getElementById('results-message');
        
        // Old structure elements
        const scoreElement = document.getElementById('results-score');
        const detailsElement = document.getElementById('results-details');

        // Update new structure if elements exist
        if (scorePercentageElement) {
            scorePercentageElement.textContent = `${Math.round(percentage)}%`;
        }
        if (scoreTextElement) {
            scoreTextElement.textContent = `${this.score}/${this.quizData.questions.length}`;
        }

        // Update old structure if elements exist
        if (scoreElement) {
            scoreElement.textContent = `${this.score}/${this.quizData.questions.length}`;
        }

        let message = '';
        if (percentage === 100) {
            message = 'Excellent ! Vous êtes un expert ! 🏆';
        } else if (percentage >= 80) {
            message = 'Très bien ! Vous avez des connaissances solides ! 👏';
        } else if (percentage >= 60) {
            message = 'Bien ! Vous avez une bonne compréhension du sujet. 😊';
        } else if (percentage >= 40) {
            message = 'À améliorer. Continuez à apprendre ! 📚';
        } else {
            message = 'Essayez encore ! Vous progresserez. 💪';
        }

        if (messageElement) {
            messageElement.textContent = message;
        }
        if (performanceMessageElement) {
            performanceMessageElement.textContent = message;
        }

        // Show detailed review
        let detailsHtml = '<h3>Récapitulatif de vos réponses :</h3>';
        this.quizData.questions.forEach((question, index) => {
            const isCorrect = this.selectedAnswers[index] === question.correct;
            const icon = isCorrect ? '✅' : '❌';
            detailsHtml += `
                <div style="margin-top: 1rem; padding: 1rem; background: ${isCorrect ? '#e8f5e9' : '#ffebee'}; border-radius: 5px;">
                    <p><strong>${icon} Question ${index + 1}:</strong> ${question.question}</p>
                    <p>Votre réponse: <strong>${question.options[this.selectedAnswers[index]]}</strong></p>
                    ${!isCorrect ? `<p>Bonne réponse: <strong>${question.options[question.correct]}</strong></p>` : ''}
                    <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;"><strong>Source:</strong> ${question.source}</p>
                </div>
            `;
        });

        if (reviewSection) {
            reviewSection.innerHTML = detailsHtml;
        }
        if (detailsElement) {
            detailsElement.innerHTML = detailsHtml;
        }
    }

    restartQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswers = [];
        this.answered = false;
        document.getElementById('quiz-container').style.display = 'block';
        document.getElementById('results-container').style.display = 'none';
        this.renderQuestion();
    }
}

// Function to start quiz with difficulty
function startQuiz(difficulty) {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme') || 'educationCanine';
    
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData[theme] || quizzesData.educationCanine;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button') || document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-button') || document.getElementById('prev-btn');

    if (nextBtn) nextBtn.onclick = () => quizManager.nextQuestion();
    if (prevBtn) prevBtn.onclick = () => quizManager.prevQuestion();
}

// Function to start quiz with difficulty for education canine
function startQuizEducationCanine(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.educationCanine;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');
    const prevBtn = document.getElementById('prev-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
    prevBtn.onclick = () => quizManager.prevQuestion();
}

// Function to start quiz with difficulty for cats
function startQuizChats(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.lesChats;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');
    const prevBtn = document.getElementById('prev-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
    prevBtn.onclick = () => quizManager.prevQuestion();
}

// Function to start quiz with difficulty for ornithology
function startQuizOrnithologie(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.ornithologie;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');
    const prevBtn = document.getElementById('prev-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
    prevBtn.onclick = () => quizManager.prevQuestion();
}

// Function to start quiz with difficulty for reptiles
function startQuizReptiles(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.reptiles;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');
    const prevBtn = document.getElementById('prev-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
    prevBtn.onclick = () => quizManager.prevQuestion();
}

// Function to start quiz with difficulty for marine mammals
function startQuizMammiferesMarin(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.mammiferesMarin;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');
    const prevBtn = document.getElementById('prev-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
    prevBtn.onclick = () => quizManager.prevQuestion();
}

// Function to start quiz with difficulty for lion
function startQuizLion(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.letion;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');
    const prevBtn = document.getElementById('prev-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
    prevBtn.onclick = () => quizManager.prevQuestion();
}

// Function to start quiz with difficulty for aigle royal
function startQuizAigleRoyal(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.laigleroyal;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');
    const prevBtn = document.getElementById('prev-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
    prevBtn.onclick = () => quizManager.prevQuestion();
}

// Function to start quiz with difficulty for tigre
function startQuizTigre(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.letigre;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');
    const prevBtn = document.getElementById('prev-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
    prevBtn.onclick = () => quizManager.prevQuestion();
}

// Initialize quiz when page loads
let quizManager;
function suggestNewTheme() {
    const suggestion = prompt('Quel thème souhaitez-vous proposer pour un nouveau quiz ?');
    if (suggestion && suggestion.trim()) {
        alert(`Merci pour votre suggestion : "${suggestion.trim()}". Nous allons l'étudier !`);
    } else {
        alert('Aucune suggestion envoyée.');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Show difficulty selection
    const difficultySelection = document.getElementById('difficulty-selection');
    if (difficultySelection) {
        difficultySelection.style.display = 'block';
        document.getElementById('quiz-container').style.display = 'none';
    }
});
