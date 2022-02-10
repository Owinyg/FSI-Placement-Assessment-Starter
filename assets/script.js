

function increase() {
    var a = 1;
    var textBox = document.getElementById("qty-gb");
    textBox.value++;
}
function decrease(){
    var textBox = document.getElementById("qty-gb");
    textBox.value--;
}

function Plus() {
    var a = 1;
    var textBox = document.getElementById("qty-cc");
    textBox.value++;
}
function minus(){
    var textBox = document.getElementById("qty-cc");
    textBox.value--;
}

function add() {
    var a = 1;
    var textBox = document.getElementById("qty-sugar");
    textBox.value++;
}
function sub(){
    var textBox = document.getElementById("qty-sugar");
    textBox.value--;
}

//<p id = "total"></p>
var gb = ("qty-gb");
var cc = ("qty-cc");
var sugar = ("qty-sugar");
var results = gb + cc + sugar;
document.getElementById("total").innerHTML = results;
