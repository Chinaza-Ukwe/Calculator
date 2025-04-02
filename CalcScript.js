const display = document.getElementById("display");

function AddToDisplay(input){
    display.value += input;
}

function Clear(){
 display.value = "";
}

function Calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value ="Error";
    }
}