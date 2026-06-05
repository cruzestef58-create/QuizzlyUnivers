
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
        const nextBtn = document.getElementById('next-button');

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
                    <p style="font-size: 0.75rem; color: #9ca3af; margin-top: 0.4rem; font-style: italic;">${question.source}</p>
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

    if (nextBtn) nextBtn.onclick = () => quizManager.nextQuestion();
}

// Function to start quiz with difficulty for education canine
function startQuizEducationCanine(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.educationCanine;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
}

// Function to start quiz with difficulty for cats
function startQuizChats(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.lesChats;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
}

// Function to start quiz with difficulty for ornithology
function startQuizOrnithologie(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.ornithologie;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
}

// Function to start quiz with difficulty for reptiles
function startQuizReptiles(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.reptiles;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
}

// Function to start quiz with difficulty for marine mammals
function startQuizMammiferesMarin(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.mammiferesMarin;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
}

// Function to start quiz with difficulty for lion
function startQuizLion(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.letion;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
}

// Function to start quiz with difficulty for aigle royal
function startQuizAigleRoyal(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.laigleroyal;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
}

// Function to start quiz with difficulty for tigre
function startQuizTigre(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const quizData = quizzesData.letigre;
    quizManager = new QuizManager(quizData, difficulty);
    quizManager.init();

    const nextBtn = document.getElementById('next-button');

    nextBtn.onclick = () => quizManager.nextQuestion();
}

// Initialize quiz when page loads
let quizManager;

// ── Proposer un thème ──────────────────────────────────────────────────────

function showSuggestionModal() {
    if (!document.getElementById('suggestion-modal')) createSuggestionModal();
    const modal = document.getElementById('suggestion-modal');
    if (!document.body.contains(modal)) document.body.appendChild(modal);
    setTimeout(() => modal.classList.remove('hidden'), 10);
}

function hideSuggestionModal() {
    const modal = document.getElementById('suggestion-modal');
    if (modal) modal.classList.add('hidden');
}

function createSuggestionModal() {
    const modal = document.createElement('div');
    modal.id = 'suggestion-modal';
    modal.className = 'modal hidden';
    modal.innerHTML = `
        <div class="modal-content suggestion-modal-content">
            <button class="modal-close" aria-label="Fermer">&times;</button>
            <h2>💡 Proposer un thème</h2>
            <p>Tu as une idée de thème pour un nouveau quiz ? Propose-la, on lit tous les messages !</p>
            <div class="modal-form">
                <input id="new-theme-input" type="text" placeholder="Ex : Les oiseaux marins, Les requins…" />
                <button id="submit-theme-button" class="btn btn-primary">Envoyer</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector('.modal-close').addEventListener('click', hideSuggestionModal);
    modal.addEventListener('click', e => { if (e.target === modal) hideSuggestionModal(); });
    modal.querySelector('#submit-theme-button').addEventListener('click', submitThemeSuggestion);
    modal.querySelector('#new-theme-input').addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); submitThemeSuggestion(); }
    });
}

async function submitThemeSuggestion() {
    const input = document.getElementById('new-theme-input');
    const theme = input.value.trim();
    if (!theme) { alert('Écris un thème avant d\'envoyer !'); return; }

    const btn = document.getElementById('submit-theme-button');
    btn.disabled = true;
    btn.textContent = 'Envoi…';

    try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                type: '💡 Proposition de thème',
                message: theme,
                date: new Date().toLocaleDateString('fr-FR')
            })
        });
        if (res.ok) {
            input.value = '';
            btn.textContent = '✅ Envoyé !';
            setTimeout(() => {
                btn.disabled = false;
                btn.textContent = 'Envoyer';
                hideSuggestionModal();
            }, 1500);
        } else {
            throw new Error();
        }
    } catch {
        alert('Erreur lors de l\'envoi. Réessaie plus tard.');
        btn.disabled = false;
        btn.textContent = 'Envoyer';
    }
}

// ── Report / Suggestion modal ──────────────────────────────────────────────

function createReportModal() {
    const modal = document.createElement('div');
    modal.id = 'report-modal';
    modal.className = 'modal hidden';
    modal.innerHTML = `
        <div class="modal-content report-modal-content">
            <button class="modal-close" aria-label="Fermer">&times;</button>
            <h2>🐛 Signaler un bug ou faire une suggestion</h2>
            <p>Tu as trouvé une erreur dans une question, une explication incorrecte, ou tu as une idée d'amélioration ? Dis-le nous !</p>
            <div class="report-form">
                <label class="report-label">Type</label>
                <div class="report-type-buttons">
                    <button class="report-type-btn active" data-type="bug">🐛 Bug / Erreur</button>
                    <button class="report-type-btn" data-type="suggestion">💡 Suggestion</button>
                </div>
                <label class="report-label">Quiz concerné</label>
                <select id="report-quiz-select" class="report-select">
                    <option value="">— Choisir un quiz —</option>
                    <option>Éducation Canine</option>
                    <option>Les Chats</option>
                    <option>Ornithologie</option>
                    <option>Reptiles</option>
                    <option>Mammifères Marins</option>
                    <option>Le Lion</option>
                    <option>L'Aigle Royal</option>
                    <option>Le Tigre</option>
                    <option value="general">Général / Autre</option>
                </select>
                <label class="report-label">Description</label>
                <textarea id="report-text" class="report-textarea" placeholder="Décris le problème ou la suggestion ici…" rows="4"></textarea>
                <button id="report-submit-btn" class="btn btn-primary">Envoyer</button>
            </div>
            <div id="report-history" class="report-history"></div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.modal-close').addEventListener('click', closeReportModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeReportModal(); });

    modal.querySelectorAll('.report-type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.querySelectorAll('.report-type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    modal.querySelector('#report-submit-btn').addEventListener('click', submitReport);
    renderReportHistory();
}

function openReportModal() {
    if (!document.getElementById('report-modal')) createReportModal();
    renderReportHistory();
    const modal = document.getElementById('report-modal');
    setTimeout(() => modal.classList.remove('hidden'), 10);
}

function closeReportModal() {
    const modal = document.getElementById('report-modal');
    if (modal) modal.classList.add('hidden');
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvzngdvd';

async function submitReport() {
    const typeBtn = document.querySelector('.report-type-btn.active');
    const type = typeBtn ? typeBtn.dataset.type : 'bug';
    const quiz = document.getElementById('report-quiz-select').value;
    const text = document.getElementById('report-text').value.trim();

    if (!text) { alert('Merci d\'écrire une description avant d\'envoyer.'); return; }

    const submitBtn = document.getElementById('report-submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours…';

    try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                type: type === 'bug' ? '🐛 Bug / Erreur' : '💡 Suggestion',
                quiz: quiz || 'Général',
                message: text,
                date: new Date().toLocaleDateString('fr-FR')
            })
        });

        if (res.ok) {
            document.getElementById('report-quiz-select').value = '';
            document.getElementById('report-text').value = '';
            submitBtn.textContent = '✅ Envoyé !';
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer';
                closeReportModal();
            }, 1500);
        } else {
            throw new Error('Erreur serveur');
        }
    } catch (e) {
        alert('Une erreur est survenue. Réessaie plus tard.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Envoyer';
    }
}

function renderReportHistory() {
    const container = document.getElementById('report-history');
    if (!container) return;
    const reports = JSON.parse(localStorage.getItem('quizReports') || '[]');
    if (reports.length === 0) { container.innerHTML = ''; return; }
    container.innerHTML = `<h3>Tes signalements (${reports.length})</h3>` +
        reports.slice().reverse().map(r => `
            <div class="report-card">
                <span class="report-tag report-tag-${r.type}">${r.type === 'bug' ? '🐛 Bug' : '💡 Suggestion'}</span>
                <span class="report-quiz-tag">${r.quiz}</span>
                <p>${r.text}</p>
                <small>${r.date}</small>
            </div>
        `).join('');
}

// ── End Report modal ───────────────────────────────────────────────────────

function suggestNewTheme() {
    showSuggestionModal();
}

document.addEventListener('DOMContentLoaded', () => {
    // Show difficulty selection
    const difficultySelection = document.getElementById('difficulty-selection');
    if (difficultySelection) {
        difficultySelection.style.display = 'block';
        document.getElementById('quiz-container').style.display = 'none';
    }
    // ensure suggestion button works on all pages
    if (document.querySelector('.suggestion-button')) {
        if (!document.getElementById('suggestion-modal')) {
            createSuggestionModal();
        }
    }
});

// Expose functions globally (requis pour type="module")
window.suggestNewTheme = suggestNewTheme;
window.openReportModal = openReportModal;
window.closeReportModal = closeReportModal;
window.hideSuggestionModal = hideSuggestionModal;
window.startQuiz = startQuiz;
window.startQuizEducationCanine = startQuizEducationCanine;
window.startQuizChats = startQuizChats;
window.startQuizOrnithologie = startQuizOrnithologie;
window.startQuizReptiles = startQuizReptiles;
window.startQuizMammiferesMarin = startQuizMammiferesMarin;
window.startQuizLion = startQuizLion;
window.startQuizAigleRoyal = startQuizAigleRoyal;
window.startQuizTigre = startQuizTigre;
