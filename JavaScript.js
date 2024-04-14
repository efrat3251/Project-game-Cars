var max = 0;
//const n = prompt("enter name of player");
function moveLeft() {
    let left = parseInt(window.getComputedStyle(character)
        .getPropertyValue("left"));
    if (left == 377) character.style.left = "210px";
    //left -= 100;
    //if (left >= 0) {
    //    character.style.left = left + "px";
    //}
}
function moveRight() {
    let left = parseInt(window.getComputedStyle(character)
        .getPropertyValue("left"));
    if (left == 210) character.style.left = "377px";
    //left += 100;
    //if (left < 300) {
    //    character.style.left = left + "px";
    //}
}
document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") { moveLeft(); }
    if (event.key === "ArrowRight") { moveRight(); }
});

var block = document.getElementById("block");

var counter = 0;

block.addEventListener('animationiteration',
    () => {
        var random = Math.floor(Math.random() * 10);
        //left = random * 100;
        if (random % 2 == 0) block.style.marginLeft = "27%";  
        else block.style.marginLeft = "1%";  
        counter++;
if (counter > max) {
    max = counter;
}
        document.getElementById("player").innerHTML = "player : " + n;;
        document.getElementById("record").innerHTML = "record : " + max;
        document.getElementById("count").innerHTML = "score : " + counter;
    });

setInterval(function () {
    var characterLeft =
        parseInt(window.getComputedStyle(character)
            .getPropertyValue("left"));
    var blockLeft =
        parseInt(window.getComputedStyle(block)
            .getPropertyValue("margin-left"));
    var blockTop =
        parseInt(window.getComputedStyle(block)
            .getPropertyValue("top"));
    if ((characterLeft == 377&& blockLeft==172 ||  characterLeft == 210 && blockLeft ==6 )&&
        blockTop < 500 && blockTop > 300) {
        location.replace("game over.html");
    }
}, 1);
function openPage() {
    var playerName = document.getElementById("fname").value;
    if (playerName == "") {
        alert("הקש שם משתמש");
    } else {
        sessionStorage.setItem("playerName", playerName);
        var url = 'HtmlPage1.html';
        window.open(url);
    }
}


