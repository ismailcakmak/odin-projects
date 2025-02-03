




const state = {
    leftOperand : "0",
    operator : null,
    rightOperand : null
} 

let currentInput = null;

/*

state1 ->  {
                leftOperand : valid,
                operator : null,
                rightOperand : null
            } 
       
            
state2 ->  {
                leftOperand : valid,
                operator : valid,
                rightOperand : null
            } 


state3 ->  {
                leftOperand : valid,
                operator : valid,
                rightOperand : valid
            } 

*/

function getStateType(){
    if (!state.operator) return "state1";
    else if (!state.rightOperand) return "state2";
    else return "state3";
}

function getInputType(){

    input = currentInput;
    if (["0","1","2","3","4","5","6","7","8","9"].includes(input))
        return "number";
    else if (["*","/","+","-","%"].includes(input)) 
        return "operator";
    else if (input === "AC")
        return "AC";
    else if (input === "+/-")
        return "+/-";
    else if (input === ".")
        return ".";
    else if (input === "=")
        return "=";
}

function calculate(){
    //change state3 to state1

    let leftOperand = Number(state.leftOperand);
    let rightOperand = Number(state.rightOperand);

    switch (state.operator) {
        case "+":
            leftOperand = leftOperand + rightOperand;
            break;

        case "-":
            leftOperand = leftOperand - rightOperand;
            break;

        case "/":
            leftOperand = leftOperand / rightOperand;
            break;

        case "*":
            leftOperand = leftOperand * rightOperand;
            break;

        case "%":
            leftOperand = leftOperand % rightOperand;
            break;
        
        default:
            break;
    }

    let strLeftOperand = String(leftOperand);
    
    //limit only 3 char after dot
    if(strLeftOperand.includes(".") & (strLeftOperand.length - strLeftOperand.indexOf("."))>4)
        strLeftOperand = strLeftOperand.slice(0,strLeftOperand.indexOf(".")+4) 

    state.leftOperand = strLeftOperand;
    state.operator = null;
    state.rightOperand = null;


}

function updateState(stateType, inputType){

    /** independent from state type, clear display when AC is clicked */
    if (inputType === "AC"){

        //change it to state1
        state.leftOperand = "0";
        state.operator = null;
        state.rightOperand = null;

    }

    if (stateType==="state1"){

        switch (inputType) {

            case "number":
                if(state.leftOperand === "0")
                    state.leftOperand = currentInput;
                else
                    state.leftOperand += currentInput;
                break;

            case "operator":
                //change it to state2
                state.operator = currentInput;
                break;

            case "+/-":
                if (state.leftOperand[0] === "-")
                    state.leftOperand = state.leftOperand.slice(1);
                else
                    state.leftOperand = "-"+ state.leftOperand;
                break;

            case ".":
                state.leftOperand += currentInput;
                break;

            case "=":
                break;

            default:
                break;
        } 
    }

    else if (stateType === "state2") {

        switch (inputType) {

            case "number":
                //change to state3
                state.rightOperand = currentInput;
              
                break;

            case "operator":
                break;

            case "+/-":
                break;
                
            case ".":
                break;
            
            case "=":
                break;

            default:
                break;
        } 

    }

    else if (stateType === "state3"){

        switch (inputType) {

            case "number":
                state.rightOperand += currentInput;
                break;

            case "operator":
                //change to state 2
                calculate();
                state.operator = currentInput;
                break;

            case "+/-":
                if (state.rightOperand[0] === "-")
                    state.rightOperand = state.rightOperand.slice(1);
                else
                    state.rightOperand = "-"+ state.rightOperand;
                break;

            case ".":
                state.rightOperand += ".";
                break;
            
            case "=":
                calculate();
                break;

            default:
                break;
        } 

    }

}


function display(){
    const screen = document.querySelector(".screen");

    let textContent = null;
    let stateType = getStateType(); 

    switch (stateType) {

        case "state1":
            textContent = `${state.leftOperand}`;
            break;

        case "state2":
            textContent = `${state.leftOperand} ${state.operator}`;
            break;

        case "state3":
            textContent = `${state.leftOperand} ${state.operator} ${state.rightOperand}`;
            break;

        default:
            break;
    }

    screen.textContent = textContent;

}

function runCalculator(){

    let stateType = getStateType();
    let inputType = getInputType();
    
    updateState(stateType, inputType);
    console.log(`state type : ${getStateType()}`);
    display();
}

function main(){

    /** event listeners */
    const buttons = document.querySelectorAll(".btn");
    console.log("acme here");
    buttons.forEach((button)=> {
        button.addEventListener("click", (event)=>{
            currentInput = event.target.textContent;
            runCalculator();
            console.log(currentInput);
        });
    });

}

main();