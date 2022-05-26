let button = document.getElementById("button_start")
let learnText = document.getElementById("typewrite")
let detalii = document.getElementById("detalii")
let nonText = document.getElementById("message");
let encText = document.getElementById("digest").value;


function learnTextF() {
    window.location='/parola/'
}


button.onclick = function(){

    learnTextF();

}

detalii.onclick = function() {

    location.href='#section1'

}

nonText.onchange = function() {
    let str = nonText.value;
    test()
    console.log(str)
}


async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }

function test() {
    alert(1)
}
