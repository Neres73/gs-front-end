document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    const manualImages = document.querySelectorAll('#slideshow-container-manual .slideshow-image-manual');
    const prevButtonManual = document.getElementById('prev-button-manual');
    const nextButtonManual = document.getElementById('next-button-manual');

    let manualCurrentIndex = 0;

    function showManualSlide(index) {
        if (manualImages.length === 0) return;

        manualImages.forEach(img => img.classList.remove('active'));

        manualCurrentIndex = index;
        if (manualCurrentIndex >= manualImages.length) {
            manualCurrentIndex = 0;
        }
        if (manualCurrentIndex < 0) {
            manualCurrentIndex = manualImages.length - 1;
        }

        manualImages[manualCurrentIndex].classList.add('active');
    }

    if (manualImages.length > 0) {
        showManualSlide(manualCurrentIndex);
    }

    if (nextButtonManual) {
        nextButtonManual.addEventListener('click', () => {
            showManualSlide(manualCurrentIndex + 1);
        });
    }

    if (prevButtonManual) {
        prevButtonManual.addEventListener('click', () => {
            showManualSlide(manualCurrentIndex - 1);
        });
    }

    const questions = [
        {
            question: "Qual a principal causa de enchentes urbanas?",
            answers: [
                { text: "Desmatamento em áreas rurais", correct: false },
                { text: "Acúmulo de lixo e bueiros entupidos", correct: true },
                { text: "Seca prolongada", correct: false },
                { text: "Terremotos submarinos", correct: false }
            ]
        },
        {
            question: "O que fazer com documentos importantes em caso de enchente?",
            answers: [
                { text: "Deixar à mostra", correct: false },
                { text: "Guardar em local alto e impermeável", correct: true },
                { text: "Jogar fora", correct: false },
                { text: "Queimar", correct: false }
            ]
        },
        {
            question: "Qual o número de emergência dos Bombeiros no Brasil?",
            answers: [
                { text: "190", correct: false },
                { text: "193", correct: true },
                { text: "192", correct: false },
                { text: "199", correct: false }
            ]
        },
        {
            question: "Deve-se ter contato direto com a água de enchente?",
            answers: [
                { text: "Sim, é seguro", correct: false },
                { text: "Não, pelo risco de contaminação e objetos perigosos", correct: true },
                { text: "Apenas se estiver de botas", correct: false },
                { text: "Depende do dia", correct: false }
            ]
        },
        {
            question: "O que desligar em casa em caso de enchente?",
            answers: [
                { text: "A TV", correct: false },
                { text: "Apenas as luzes", correct: false },
                { text: "Energia elétrica e gás", correct: true },
                { text: "Nada, não é necessário", correct: false }
            ]
        },
        {
            question: "O que é um sinal visual de alerta de enchente?",
            answers: [
                { text: "Céu limpo e ensolarado", correct: false },
                { text: "Aumento rápido do nível da água em rios ou córregos", correct: true },
                { text: "Diminuição da pressão da água nas torneiras", correct: false },
                { text: "Plantas secando rapidamente", correct: false }
            ]
        },
        {
            question: "O que fazer com alimentos que tiveram contato com a água da enchente?",
            answers: [
                { text: "Cozinhar bem e consumir", correct: false },
                { text: "Lavar e guardar", correct: false },
                { text: "Descartar imediatamente", correct: true },
                { text: "Dar para animais", correct: false }
            ]
        },
        {
            question: "Para onde ir se sua casa estiver em área de risco de enchente?",
            answers: [
                { text: "Ficar no andar de baixo", correct: false },
                { text: "Procurar um local alto e seguro imediatamente", correct: true },
                { text: "Ir para a rua e esperar o resgate", correct: false },
                { text: "Dormir e esperar a água baixar", correct: false }
            ]
        },
        {
            question: "Qual o termo para a área de captação de água da chuva que drena para um corpo d'agua?",
            answers: [
                { text: "Lago artificial", correct: false },
                { text: "Bacia hidrográfica", correct: true },
                { text: "Piscina natural", correct: false },
                { text: "Poço artesiano", correct: false }
            ]
        },
        {
            question: "Qual a importância de um kit de emergência para enchentes?",
            answers: [
                { text: "Para viajar durante a enchente", correct: false },
                { text: "Para sobreviver com itens essenciais durante e após a enchente", correct: true },
                { text: "Para fazer piquenique", correct: false },
                { text: "Para limpar a casa", correct: false }
            ]
        }
    ];

    const questionElement = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-button");
    const finalScoreArea = document.getElementById("final-score");
    const scoreTextElement = document.getElementById("score-text");
    const restartButton = document.getElementById("restart-button");
    const quizArea = document.getElementById("quiz-area");

    let currentQuestionIndex = 0;
    let score = 0;

    if (questionElement && answerButtons && nextButton && finalScoreArea && scoreTextElement && restartButton && quizArea) {
        startQuiz();
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Próxima";
        quizArea.style.display = 'block';
        finalScoreArea.style.display = 'none';
        showQuestion();
    }

    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
            answerButtons.appendChild(button);
        });
    }

    function resetState() {
        nextButton.style.display = "none";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }

        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.removeEventListener("click", selectAnswer);
            button.style.pointerEvents = 'none';
        });
        nextButton.style.display = "block";
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }

    function showScore() {
        quizArea.style.display = 'none';
        finalScoreArea.style.display = 'block';
        scoreTextElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            if (currentQuestionIndex < questions.length) {
                handleNextButton();
            } else {
                startQuiz();
            }
        });
    }

    if (restartButton) {
        restartButton.addEventListener("click", startQuiz);
    }

    const backToHomeButton = document.getElementById("back-to-home-button");
    if (backToHomeButton) {
        backToHomeButton.addEventListener("click", () => {
            window.location.href = 'index.html';
        });
    }

});