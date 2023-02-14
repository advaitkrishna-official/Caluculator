function clickButton(val){
    document.getElementById("screen").value += val
}
function clearButton(){
    document.getElementById("screen").value = ""
}
function equalButton(){
    var text = document.getElementById("screen").value;
    var result = eval(text)                                 /* function that does the calculation is eval() */
    document.getElementById("screen").value = result
}