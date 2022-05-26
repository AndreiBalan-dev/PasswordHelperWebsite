let nonText = document.getElementById("message");
let encText = document.getElementById("digest");
let section1_press = document.getElementById("section1_press");
let section2_press = document.getElementById("section2_press");
let section3_press = document.getElementById("section3_press");
let section1 = document.getElementById("hidden_1");
let section2 = document.getElementById("hidden_2");
let section3 = document.getElementById("hidden_3");

//Later

/*document.getElementById("body").onscroll = function myFunction() {  
  var scrolltotop = document.scrollingElement.scrollTop;
  var target = document.getElementById("main1");
  var xvalue = "center";
  var factor = 0.5;
  var yvalue = scrolltotop * factor;
  target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}*/



nonText.addEventListener('keyup', async (updateValue) => {
  let getvalue = nonText.value
  let encryptedvalue = await hash(getvalue)
  console.log(getvalue)
  console.log(encryptedvalue)
  encText.value = encryptedvalue;
});

//---------------------------
let k = 0;
let i = 0;
let j = 0;

section1_press.addEventListener('click', () => {
  hide(section1);
  if(k == 0) {
    section1_press.innerText = "Less";
    k++;
  } else if(k == 1) {
    section1_press.innerText = "More";
    k=0;
  }
}); 

section2_press.addEventListener('click', () => {
  hide(section2);
  if(i == 0) {
    section2_press.innerText = "Less";
    i++;
  } else if(i == 1) {
    section2_press.innerText = "More";
    i=0;
  }
}); 

section3_press.addEventListener('click', () => {
  hide(section3);
  if(j == 0) {
    section3_press.innerText = "Less";
    j++;
  } else if(j == 1) {
    section3_press.innerText = "More";
    j=0;
  }
}); 
//---------------------------

async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }

function hide(x) {
  if (x.style.display === "none" || !x.style.display) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



function test(str) {
  alert(str)
}