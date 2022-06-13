var num1 = ""; /**this is the firts number in the operation*/ 
var num2 = ""; /**this is the second number in the operation */
var operation = ""; /**This is the sing of the operation */
var result; /**This is the result of the operation*/
var dark = false;   /**This is the dark mode status */
var number = 1; /**This is the screen color status */
var screenTam = 0; /**This is screen size status */
var numTam = 0; /**This is the state of the size of the numbers */
/**
 * This function allows us to display the result on the screen
 */
function printScreen(){
    let screen = document.getElementById('screen');
    if(result == undefined)
        screen.innerHTML = num2 + " " + operation + " " + num1;
    else
        screen.innerHTML = result;    

}
/**
 * this function allows us add a number when we press a button
 * @param {float} number is the number that was just pressed 
 */
function addNumber(number){
    if(operation.length != 0){
        num1 += number; 
    }
    else{
        num2 += number;
    }
       
}
/**
 * this  function allows us add the sign to the operation or the sign of a number
 * @param {char} op is the sing of the operation or the sing of a number
 */
function addOperation(op){
    if(num2.length == 0){
        num2 += op;
    }else if(num2.length > 0 && operation.length >0 && num1.length == 0){
        num1 += op;
    }else{
        operation = op
    }
    
}
/**This function allows us reset the calculator */
function reset(){
    num1 = "";
    num2 = ""
    operation = "";
    result = undefined;
    let screen = document.getElementById('screen');
    screen.innerHTML = "";
}
/**This function allows us add a point to the number */
function addPoint(){
    addNumber(".");
}
/**This function allows us save the result in num1 */
function acumulator(){
    if(result != undefined){
        num2 = result;
        operation = "";
        num1 = "";
        result = undefined;
    }
    else{
        result = "Syntax error";
    }
}
/**This function allows us change the dark mode or ligth mode */
function darkMode(){
    if(dark == false){
        btnLigth();
        dark = true;
    }
    else{
        btnDark();
        dark = false;
    }
}
/**This function change the interfaze for dark mode */
function btnDark(){
    let imgDark = document.getElementById("dark-mode-img")
    let document_body = document.getElementById("body-id");
    imgDark.src = "./img/moon-solid.svg"
    document_body.style.backgroundColor = "#3d3d3d";
    let btns = document.getElementsByClassName('btn');
    for(let i = 0; i < btns.length; i++){
        btns[i].style.backgroundColor = "#4b4b4b"
        btns[i].style.color = "white"
    }
}
/**This function change the interfaze for ligth mode */
function btnLigth(){
    let imgDark = document.getElementById("dark-mode-img")
    let document_body = document.getElementById("body-id");
    imgDark.src = "./img/sun-solid.svg"
    document_body.style.backgroundColor = "white"
    let btns = document.getElementsByClassName('btn');
    for(let i = 0; i < btns.length; i++){
        btns[i].style.backgroundColor = "white"
        btns[i].style.color = "black"
    }
}
/**This function allows us change the screen color */
function screenColor(){
    let screen = document.getElementById("screen");
    button = document.getElementById('screen-color');
    number++;
    if(number > 3){
        number = 1;
    }
    if(number == 1){
        screen.style.backgroundColor = "#ff4d4d"
        button.style.backgroundColor = "#ff4d4d"
        screen.style.color = "black";
        screen.style.fontWeight = "600";
    }
    if(number == 2){
        screen.style.backgroundColor = "#32ff7e"
        button.style.backgroundColor = "#32ff7e"
        screen.style.color = "black";
        screen.style.fontWeight = "600";
    }
    if(number == 3){
        screen.style.backgroundColor = "black";
        button.style.backgroundColor = "white";
        screen.style.color = "white";
        screen.style.fontWeight = "500";
    }
}
/**This function allows us increase the font size of the screen */
function screenPlus(){
    let screen = document.getElementById("screen")
    if(screenTam <= 5){
        screenTam++;
    }
    switch(screenTam){
        case 1:
            screen.style.fontSize = "30px";
            break;
        case 2:
            screen.style.fontSize = "35px";
            break;
        case 3:
            screen.style.fontSize = "40px";
            break;
        case 4:
            screen.style.fontSize = "45px";
            break;
        case 5:
            screen.style.fontSize = "50px";
    }

}
/**This function allows us decrease the font size of the screen */
function screenSubtraction(){
    let screen = document.getElementById("screen");
    if(screenTam >= 1){
        screenTam--;
    }
    switch(screenTam){
        case 1:
            screen.style.fontSize = "30px";
            break;
        case 2:
            screen.style.fontSize = "35px";
            break;
        case 3:
            screen.style.fontSize = "40px";
            break;
        case 4:
            screen.style.fontSize = "45px";
            break;
        case 5:
            screen.style.fontSize = "50px";
    }
}
/**This function allows us increase the font size of the buttons */
function numPlus(){
    let tam;
    let buttons = document.getElementsByClassName('btn');
    if(numTam <= 5){
        numTam++;
    }
    switch(numTam){
        case 1:
            tam = "40px";
            break;
        case 2:
            tam = "45px";
            break;
        case 3:
            tam = "50px";
            break;
        case 4:
            tam  = "55px";
            break;
        case 5:
            tam = "60px";
            break;
    }
    buttons.forEach(element =>{
        element.style.fontSize = tam;
    });
}
/**This function allows us decrease the font size of the buttons */
function numSubtraction(){
    let tam;
    let buttons = document.getElementsByClassName('btn');
    if(numTam >= 1){
        numTam--;
    }
    switch(numTam){
        case 1:
            tam = "40px";
            break;
        case 2:
            tam = "45px" 
            break;
        case 3:
            tam = "50px"
            break;
        case 4:
            tam = "55px"
            break;
        case 5:
            tam = "60px";
            break;
    }
    buttons.forEach(element => {
        element.style.fontSize = tam;
    });
}
/**This function allows us make the operation */
function makeOperation(){
    switch(operation){
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num2) - parseFloat(num1);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            if(num1 == 0)
                result = "Math error";
            else
                result = parseFloat(num2) / parseFloat(num1);
            break;
        case '%':
            result = parseFloat(num2) % parseFloat(num1);
            break;
    }
}