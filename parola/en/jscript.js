//menu content
let titleButton = document.getElementById('intro-title-button')
let homeIntro = document.getElementById('home-intro')
let homeButton = document.getElementById('home')
let homeContent = document.getElementById('home-content')
let infoIntro = document.getElementById('info-intro')
let infoButton = document.getElementById('info')
let infoContent = document.getElementById('info-content')
let quizButton = document.getElementById('quiz-button')
let githubIntro = document.getElementById('github-intro')
let githubButton = document.getElementById('github')
let githubContent = document.getElementById('github-content')

//home content
let homeGuide = document.getElementById('home-guide')
let homeClick1 = document.getElementById('home-click-1')
let homeClick2 = document.getElementById('home-click-2')
let homeClick3 = document.getElementById('home-click-3')
let homeClick4 = document.getElementById('home-click-4')
let homeImg1 = document.getElementById('home-img-1')
let homeImg2 = document.getElementById('home-img-2')
let homeNavToInfoText = document.getElementById('home-navToInfoText')

//info content
let infoContainer1 = document.getElementById('info-container-1')
let infoContainerBtn1 = document.getElementById('info-container-btn-1')
let infoContainer2 = document.getElementById('info-container-2')
let infoContainerBtn2 = document.getElementById('info-container-btn-2')
let infoContainer3 = document.getElementById('info-container-3')
let infoContainerBtn3 = document.getElementById('info-container-btn-3')
let infoContainer4 = document.getElementById('info-container-4')
let infoContainerBtn4 = document.getElementById('info-container-btn-4')
let infoContainer5 = document.getElementById('info-container-5')
let infoContainerBtn5 = document.getElementById('info-container-btn-5')
let unEncText = document.getElementById("message");
let encTextMD5 = document.getElementById("digest");
let encTextSHA256 = document.getElementById("digest-2")
let infoNavToQuiz = document.getElementById("info-navToQuiz")
let infoNavToGithub = document.getElementById("info-navToGithub")
let infoNavToGithubText = document.getElementById("info-navToGithubText")

//github content
let textbutton = document.getElementById("textbutton");
let githubtext = document.getElementById("githubText");

let kHomeClick = 0;

titleButton.addEventListener('click', () => {
  window.location.href = '../..'
})

homeButton.addEventListener('click', () => {
  if (!homeButton.classList.contains('active')) {
    homeIntro.classList.remove('hidden')
    homeButton.classList.add('active')
    homeContent.classList.remove('hidden')
    infoButton.classList.remove('active')
    infoIntro.classList.add('hidden')
    infoContent.classList.add('hidden')
    githubButton.classList.remove('active')
    githubIntro.classList.add('hidden')
    githubContent.classList.add('hidden')
    window.scrollTo(0, 0);
  }
})

infoButton.addEventListener('click', () => {
  if (!infoButton.classList.contains('active')) {
    let onHomePage = !homeIntro.classList.contains('hidden') && homeButton.classList.contains('active') && !homeContent.classList.contains('hidden')
    if (onHomePage) {
      kHomeClick--
    }
    infoIntro.classList.remove('hidden')
    infoButton.classList.add('active')
    infoContent.classList.remove('hidden')
    homeButton.classList.remove('active')
    homeIntro.classList.add('hidden')
    homeContent.classList.add('hidden')
    githubButton.classList.remove('active')
    githubIntro.classList.add('hidden')
    githubContent.classList.add('hidden')
  }
})

quizButton.addEventListener('click', () => {
  kHomeClick--
})

githubButton.addEventListener('click', () => {
  if (!githubButton.classList.contains('active')) {
    let onHomePage = !homeIntro.classList.contains('hidden') && homeButton.classList.contains('active') && !homeContent.classList.contains('hidden')
    if (onHomePage) {
      kHomeClick--
    }
    githubIntro.classList.remove('hidden')
    githubButton.classList.add('active')
    githubContent.classList.remove('hidden')
    homeButton.classList.remove('active')
    homeIntro.classList.add('hidden')
    homeContent.classList.add('hidden')
    infoButton.classList.remove('active')
    infoIntro.classList.add('hidden')
    infoContent.classList.add('hidden')
  }
})
document.addEventListener('click', () => {
  let onHomePage = !homeIntro.classList.contains('hidden') && homeButton.classList.contains('active') && !homeContent.classList.contains('hidden')
  if (!onHomePage) {
    return;
  }
  if (kHomeClick >= 5) {
    return;
  }
  kHomeClick += 1;

  if (kHomeClick == 1) {
    homeGuide.classList.add('hidden')
    homeClick1.classList.remove('hidden')
    homeClick1.classList.add('home-left-animation')
    homeImg1.classList.remove('hidden')
  }
  if (kHomeClick == 2) {
    homeClick2.classList.remove('hidden')
    homeClick2.classList.add('home-left-animation')
    homeClick2.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  if (kHomeClick == 3) {
    homeClick1.classList.add('hidden')
    homeImg1.classList.add('hidden')
    homeClick2.classList.add('hidden')
    homeClick3.classList.remove('hidden')
    homeClick3.classList.add('home-left-animation')
    homeImg2.classList.remove('hidden')
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 2);
  }
  if (kHomeClick == 4) {
    homeClick4.classList.remove('hidden')
    homeClick4.classList.add('home-left-animation')
    homeClick4.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  if (kHomeClick == 5) {
    homeClick1.classList.remove('home-left-animation')
    homeClick2.classList.remove('home-left-animation')
    homeClick1.classList.remove('hidden')
    homeClick2.classList.remove('hidden')
    homeImg1.style.animation = "none"
    homeImg1.classList.remove('hidden')
  }
})

homeNavToInfoText.addEventListener('click', () => {
  if (!infoButton.classList.contains('active')) {
    infoIntro.classList.remove('hidden')
    infoButton.classList.add('active')
    infoContent.classList.remove('hidden')
    homeButton.classList.remove('active')
    homeIntro.classList.add('hidden')
    homeContent.classList.add('hidden')
    githubButton.classList.remove('active')
    githubIntro.classList.add('hidden')
    githubContent.classList.add('hidden')
  }
})

function containerButtons(infoContainer, infoContainerBtn) {
  infoContainer.classList.toggle('hidden')
  if (infoContainer.classList.contains('hidden')) {
    infoContainerBtn.innerText = "Show";
  } else {
    infoContainerBtn.innerText = "Hide";
  }
}

infoContainerBtn1.addEventListener('click', () => {
  containerButtons(infoContainer1, infoContainerBtn1)
})
infoContainerBtn2.addEventListener('click', () => {
  containerButtons(infoContainer2, infoContainerBtn2)
})
infoContainerBtn3.addEventListener('click', () => {
  containerButtons(infoContainer3, infoContainerBtn3)
})
infoContainerBtn4.addEventListener('click', () => {
  containerButtons(infoContainer4, infoContainerBtn4)
})
infoContainerBtn5.addEventListener('click', () => {
  containerButtons(infoContainer5, infoContainerBtn5)
})

async function hash(string) {
  const utf8 = new TextEncoder().encode(string);
  const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((bytes) => bytes.toString(16).padStart(2, '0'))
    .join('');
  return hashHex;
}

unEncText.addEventListener('keyup', async (updateValue) => {
  let getValueMD5 = unEncText.value
  let encryptedValueMD5 = await md5(getValueMD5)
  encTextMD5.value = encryptedValueMD5

  let getValueSHA256 = unEncText.value
  let encryptedValueSHA256 = await hash(getValueSHA256)
  encTextSHA256.value = encryptedValueSHA256;
});

infoNavToQuiz.addEventListener('click', () => {
  window.location.href = './quiz'
})

infoNavToGithub.addEventListener('click', () => {
  if (!githubButton.classList.contains('active')) {
    githubIntro.classList.remove('hidden')
    githubButton.classList.add('active')
    githubContent.classList.remove('hidden')
    homeButton.classList.remove('active')
    homeIntro.classList.add('hidden')
    homeContent.classList.add('hidden')
    infoButton.classList.remove('active')
    infoIntro.classList.add('hidden')
    infoContent.classList.add('hidden')
  }
})

infoNavToGithubText.addEventListener('click', () => {
  if (!githubButton.classList.contains('active')) {
    githubIntro.classList.remove('hidden')
    githubButton.classList.add('active')
    githubContent.classList.remove('hidden')
    homeButton.classList.remove('active')
    homeIntro.classList.add('hidden')
    homeContent.classList.add('hidden')
    infoButton.classList.remove('active')
    infoIntro.classList.add('hidden')
    infoContent.classList.add('hidden')
  }
})


function clickCopy() {
  githubtext.select();
  githubtext.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(githubtext.value);
}

textbutton.addEventListener('click', () => {
  clickCopy();
})