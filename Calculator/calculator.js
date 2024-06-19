const display = document.getElementById("display");

function displayInput(input){
    display.value+=input;
}

function clearDisplay(){
    display.value = "";
}

function erase(){
    var currentValue = display.value;
    display.value = currentValue.slice(0,-1);
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"
    }
    
}