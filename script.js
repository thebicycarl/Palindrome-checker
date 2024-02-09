const result = document.getElementById("result");
const checkButton = document.getElementById("check-btn");
const input = document.getElementById("text-input");




function runCheck() {
    if (input.value.length == 0) {
        alert("Please input a value")
        return false;
    }
    const cleanedValue = cleanValue(input);
    //const output = cleanedValue;
    const reverse = reverseString(cleanedValue);
    const checkStatement = cleanedValue === reverse ? "is a palindrome": "is not a palindrome";
	result.innerHTML = `${input.value} ${checkStatement}`;
}

function cleanValue(val) {
	const noSpace = removeSpace(val.value);
	const cleaned = noSpace.toLowerCase();
    return cleaned
}


function removeSpace(val) {
	const noSpace = val.replace(/[^A-Za-z0-9]/g, '')
    return noSpace
}

function reverseString(val) {
	const reversed = val.split("").reverse().join("");
    return reversed
}


checkButton.addEventListener("click", runCheck);
