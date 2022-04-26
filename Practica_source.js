
var counterVal = 0;
var score=0;

function incrementClick() {
    updateDisplay(++counterVal);
    if ( counterVal==20){
        score++
       resetCounter();
       updatescore (score);
       updatesonido(val);
    }
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;

}

function updatescore(val) {
    document.getElementById("score").innerHTML = val;

}

function updatesonido(val) {
    document.getElementById("Sonido").innerHTML = val;

}