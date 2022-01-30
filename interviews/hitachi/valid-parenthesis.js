const TOKENS = [['{','}'],['(',')'],['[',']']];

function isOpenTerm(c) {
	for (let token of TOKENS) {
		if (token[0] === c) {
			return true;
		}
	}
	return false;
}

function isMatch(openTerm, closeTerm) {
	for (let token of TOKENS) {
		if (token[0] === openTerm && token[1] === closeTerm) {
			return true;
		}
	}
	return false;
}

function isValid(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
		if (isOpenTerm(str[i])) {
			stack.push(str[i]);
		} else {
			if (stack.length === 0) {
				return false;
			}
			if (!isMatch(stack.pop(), str[i])) {
				return false;
			}
		}
	}
	return (stack.length === 0);
}

console.log(isValid('()[]{}'));
console.log(isValid('([]{})'));
console.log(isValid('{([)]{})'));