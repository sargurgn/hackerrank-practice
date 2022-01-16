// This is not correct solution. Yet to solve
function isValidString(str) {
    const charArray = Array.from(str)
    console.log(charArray);
    for (let i = 0; i < charArray.length; i++) {
		if ((charArray[i] === '(' && charArray[charArray.length - (i+1)] === ')') ||
			(charArray[i] === '[' && charArray[charArray.length - (i+1)] === ']') ||
			(charArray[i] === '{' && charArray[charArray.length - (i+1)] === '}'))
			return true;
		else 
			return false;
	}
}

console.log(isValidString('()[]{}'));
