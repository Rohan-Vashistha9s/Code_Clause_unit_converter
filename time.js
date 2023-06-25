
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from, option_to;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);


option_from = inputType.value;
option_to = resultType.value;


function myResult() {

    option_from = inputType.value;
    option_to = resultType.value;

    if (option_from === "Second" && option_to === "Minutes") {
        result.value = Number(input.value) / 60;
    }
    else if (option_from === "Second" && option_to === "Hours") {
        result.value = Number(input.value) / 3600;

    }
    else if (option_from === "Second" && option_to === "Second") {
        result.value = input.value
    }



    if (option_from === "Minutes" && option_to === "Second") {
        result.value = Number(input.value) * 60;
    }
    else if (option_from === "Minutes" && option_to === "Hours") {
        result.value = Number(input.value) / 60;
    }
    else if (option_from === "Minutes" && option_to === "Minutes") {
        result.value = input.value
    }



    if (option_from === "Hours" && option_to === "Second") {
        result.value = Number(input.value) * 3600;
    }
    else if (option_from === "Hours" && option_to === "Minutes") {
        result.value = Number(input.value) * 60;
    }
    else if (option_from === "Hours" && option_to === "Hours") {
        result.value = input.value
    }



}






