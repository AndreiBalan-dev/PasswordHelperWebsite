const quizData = [
    {
        question:"What defines a strong password?",
        a:"A password with many characters",
        b:"A password with many types of characters",
        c:"A password without dictionary words",
        d:"All of the above",
        correct:"d"
    },
    {
        question:"Why having a strong password is important?",
        a:"To avoid decryption or getting our account compromised",
        b:"For a better SHA256 encryption",
        c:"Because it is hard to remember after seeing it",
        d:"It is not important if I have 2-Factor Authentification",
        correct:"a"
    },
    {
        question:"What represents a risk factor for getting your account compromised?",
        a:"Data Breaches",
        b:"Inserting my password on a dangerous website",
        c:"The installation and execution of a keylogger",
        d:"All of the above",
        correct:"d"
    },
    {
        question:"Name a set of cryptographic hash functions that websites use.",
        a:"ENC24",
        b:"SHA256",
        c:"MB4",
        d:"BM64",
        correct:"b"
    },
    {
        question:"Name another set of this type.",
        a:"MD5",
        b:"ARK64",
        c:"HMPAC",
        d:"RT256",
        correct:"a"
    },
    {
        question:"What a significant vulnerability is corrected by HMAC? (Hash-based message authentication code)",
        a:"Infiltrating databases through source code",
        b:"Ease of reading the algorithm and guessing the password through the encrypted hash",
        c:"Checking and concatenating two hash results to find and decrypt the password",
        d:"All of the above",
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
                <h2 class="dark-mode-header" id="header">You answered ${score}/${quizData.length} questions correctly!</h2>
                `
                if(score != quizData.length) {
                    quiz.innerHTML += `
                    <h2 class="dark-mode-header" id="header2">Try again!</h2>
                    `
                } else {
                    quiz.innerHTML += `
                    <h2 class="dark-mode-header" id="header2">Congratulations!</h2>
                    `
                }
                quiz.innerHTML += `<button class="dark-button" id="submit" onclick="location.reload()">Reload</button>`
            } else if(!isdarkmode){
                quiz.innerHTML = `
                <h2 id="header">You answered ${score}/${quizData.length} questions correctly!</h2>
                `
                if(score != quizData.length) {
                    quiz.innerHTML += `
                    <h2 id="header2">Try again!</h2>
                    `
                } else {
                    quiz.innerHTML += `
                    <h2 id="header2">Congratulations!</h2>
                    `
                }
                quiz.innerHTML += `<button id="submit" onclick="location.reload()">Reload</button>`
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
