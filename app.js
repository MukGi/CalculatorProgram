const result = document.getElementById("result");

function appendToResult(input){
result.value+= input;
}
function calculate(){
    try {
        result.value  =  eval(result.value)
    } catch (error) {
        result.value  =  "Error"
    }
    

}

function clearResult(){
result.value =""
}