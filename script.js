// Quiz Controller
class QuizManager {
    constructor(quizData) {
        this.quizData = quizData;
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswers = [];
        this.quizStarted = false;
        this.quizFinished = false;
        this.answered = false;
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

        // Render question
        let html = `
            <div class="question-number">Question ${this.currentQuestion + 1}</div>
            <div class="question-text">${question.question}</div>
            <div class="options">
        `;

        question.options.forEach((option, index) => {
            html += `
                <label class="option">
                    <input type="radio" name="answer" value="${index}">
                    ${option}
                </label>
            `;
        });

        html += `
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
        
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            }
            if (index === this.selectedAnswers[this.currentQuestion] && !isCorrect) {
                option.classList.add('incorrect');
            }
            option.classList.add('disabled');
        });

        // Show source
        const sourceElement = document.getElementById('question-source');
        if (sourceElement) {
            sourceElement.classList.add('show');
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        prevBtn.disabled = this.currentQuestion === 0;
        
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
        const scoreElement = document.getElementById('results-score');
        const messageElement = document.getElementById('results-message');
        const detailsElement = document.getElementById('results-details');

        scoreElement.textContent = `${this.score}/${this.quizData.questions.length}`;

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

        messageElement.textContent = message;

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

        detailsElement.innerHTML = detailsHtml;
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

// Initialize quiz when page loads
let quizManager;
document.addEventListener('DOMContentLoaded', () => {
    const quizData = quizzesData.educationCanine;
    quizManager = new QuizManager(quizData);
    quizManager.init();

    // Setup navigation buttons
    document.getElementById('next-btn').addEventListener('click', () => quizManager.nextQuestion());
    document.getElementById('prev-btn').addEventListener('click', () => quizManager.prevQuestion());
    document.getElementById('restart-btn').addEventListener('click', () => quizManager.restartQuiz());
});
