//display number in text box
function displayNumber(num){
    result.value+=num;
    // console.log(num);
}

//clear text box=to apply on AC
function clearDisplay(){
    result.value="  " ;
}

//evaluate expression = to apply on equal
function evaluateDisplay(){
    evaluation=result.value;
    output=eval(evaluation);
    result.value=output;
}

//remove last item from text box
function backSpace(){
    currentExpr=result.value
    result.value=currentExpr.slice(0,-1)
}


