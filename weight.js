
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


	if (option_from === "Kilograms" && option_to === "Grams") {
		result.value = Number(input.value) * 1000;
	}
	else if (option_from === "Kilograms" && option_to === "Pound") {
		result.value = Number(input.value) * 2.20462;

	}
	else if (option_from === "Kilograms" && option_to === "Kilograms") {
		result.value = input.value
	}



	if (option_from === "Grams" && option_to === "Kilograms") {
		result.value = Number(input.value) / 1000;
	}
	else if (option_from === "Grams" && option_to === "Pound") {
		result.value = Number(input.value) * 0.00220462;
	}
	else if (option_from === "Grams" && option_to === "Grams") {
		result.value = input.value
	}



	if (option_from === "Pound" && option_to === "Kilograms") {
		result.value = Number(input.value) * 0.453592;
	}
	else if (option_from === "Pound" && option_to === "Grams") {
		result.value = Number(input.value) * 453.592;
	}
	else if (option_from === "Pound" && option_to === "Pound") {
		result.value = input.value
	}
}

