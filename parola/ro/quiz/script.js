const quizData = [
    {
        question:"Ce defineste o parola sigura?",
        a:"a) O parola cu multe caractere",
        b:"b) O parola cu multe tipuri de caractere",
        c:"c) O parola fara cuvinte din dictionar",
        d:"d) Toate cele de mai sus",
        correct:"d"
    },
    {
        question:"De ce este important sa avem o parola sigura?",
        a:"a) Pentru a evita decriptarea sau spargerea contului nostru",
        b:"b) Pentru o incriptie mai buna SHA256",
        c:"c) Pentru ca este greu de memorat la prima vedere",
        d:"d) Nu este important daca am 2-Factor Authentification",
        correct:"a"
    },
    {
        question:"Ce reprezinta un factor de risc pentru spargerea contului tau?",
        a:"a) Bresele de securitate",
        b:"b) Introducerea parolei pe un website periculos",
        c:"c) Instalarea si executarea unui virus tip keylogger",
        d:"d) Toate cele de mai sus",
        correct:"d"
    },
    {
        question:"Numiti un set de functii hash criptografice pe care websiteurile il folosesc",
        a:"a) ENC24",
        b:"b) SHA256",
        c:"c) MB4",
        d:"d) BM64",
        correct:"b"
    },
    {
        question:"Mai numiti inca un set de functii hash criptografice pe care websiteurile il folosesc.",
        a:"a) MD5",
        b:"b) ARK64",
        c:"c) HMPAC",
        d:"d) RT256",
        correct:"a"
    },
    {
        question:"Ce vulnerabilitate importanta este corectata de HMAC? (Hash-based message authentication code)",
        a:"a) Infiltrarea bazelor de date prin codul sursa",
        b:"b) Usurinta citirii algoritmului si ghicirea parolei prin hash-ul encriptat.",
        c:"c) Verificarea si concatenarea a doua rezultate hash pentru aflarea si decriptarea parolei",
        d:"d) Toate cele de mai sus",
        correct:"c"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const switchDarkMode = document.getElementById('switch')
const darkmodeText = document.getElementById('darkmodediv')
const body = document.body;
let isdarkmode = false;

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        console.log("ANSWERS: " + answerEl.value)
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            if(isdarkmode) {
                quiz.innerHTML = `
                <h2 class="dark-mode-header" id="header">Ai raspuns corect la ${score}/${quizData.length} intrebari!</h2>
                `
                if(score != quizData.length) {
                    quiz.innerHTML += `
                    <h2 class="dark-mode-header" id="header2">Incearca iar!</h2>
                    `
                } else {
                    quiz.innerHTML += `
                    <h2 class="dark-mode-header" id="header2">Felicitari!</h2>
                    `
                }
                quiz.innerHTML += `<button class="dark-button" id="submit" onclick="location.reload()">Reincearca</button>`
            } else if(!isdarkmode){
                quiz.innerHTML = `
                <h2 id="header">Ai raspuns corect la ${score}/${quizData.length} intrebari!</h2>
                `
                if(score != quizData.length) {
                    quiz.innerHTML += `
                    <h2 id="header2">Incearca iar!</h2>
                    `
                } else {
                    quiz.innerHTML += `
                    <h2 id="header2">Felicitari!</h2>
                    `
                }
                quiz.innerHTML += `<button id="submit" onclick="location.reload()">Reincearca</button>`
            }
        }
    }
})

switchDarkMode.addEventListener('click', () => {
    darkmode();
    if(!isdarkmode) {
        isdarkmode = true;
    } else {
        isdarkmode = false;
    }
})


function darkmode() {
    let submitBtnTemp = document.getElementById('submit');
    body.classList.toggle("dark-mode-body");
    quiz.classList.toggle("dark-mode-container");
    darkmodeText.classList.toggle("dark-mode-header");
    if(submitBtnTemp === null) {
        let submitBtnTempFix = document.getElementById('submit');
        submitBtnTempFix.classList.toggle("dark-button")
    } else {
        submitBtnTemp.classList.toggle("dark-button");
    }
    if(document.getElementById('header2') !== null) {
    let header_final = document.getElementById('header2');
    header_final.classList.toggle("dark-mode-header");
    }
    if(!header.classList) {
        let headerFix = document.getElementById('header')
        headerFix.classList.toggle("dark-mode-header");
    } else {
        header.classList.toggle("dark-mode-header");
    }
}

