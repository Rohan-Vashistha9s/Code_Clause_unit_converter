var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);


option_from = inputType.value;
option_to   = resultType.value;


function myResult(){

	option_from = inputType.value;
	option_to = resultType.value;


	if(option_from === "Liter" && option_to==="Cubic_Meter")
	{
		result.value = Number(input.value) / 1000;
	}
	else if(option_from === "Liter" && option_to==="MiliLiter")
	{
		result.value = Number(input.value) * 1000;

	}
	else if(option_from === "Liter" && option_to==="Liter")
	{
		result.value = input.value
	}



	if(option_from === "MiliLiter" && option_to==="Cubic_Meter")
	{
		result.value = Number(input.value) / 1000000;
	}
	else if(option_from === "MiliLiter" && option_to==="Liter")
	{
		result.value = Number(input.value) / 1000;
	}
	else if(option_from === "MiliLiter" && option_to==="MiliLiter")
	{
		result.value = input.value
	}



	if(option_from === "Cubic_Meter" && option_to==="MiliLiter")
	{
		result.value = Number(input.value) / 1000000;
	}
	else if(option_from === "Cubic_Meter" && option_to==="Liter")
	{
		result.value = Number(input.value) * 1000;
	}
	else if(option_from === "Cubic_Meter" && option_to==="Cubic_Meter")
	{
		result.value = input.value
	}
}