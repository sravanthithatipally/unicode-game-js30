let userinputel = document.getElementById("userInput");
let ulele = document.getElementById("keyCodeList");

function addli(event) {
    let val = event.key;
    let listitem = document.createElement("li");
    listitem.textContent = event.keyCode;
    ulele.appendChild(listitem);
}
userinputel.addEventListener("keydown", addli);