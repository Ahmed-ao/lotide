// data
const words = ['ground', 'control', 'to', 'major', 'tom'];
// Assertion
const assertArraysEqual = (array, match) => {
	if (
		Array.isArray(array) &&
		Array.isArray(match) &&
		array.length === match.length &&
		array.every((val, index) => val === match[index])
	) {
		console.log(`✅✅✅ Assertion Passed: ${array} === ${match}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${array} !== ${match}`);
	}
};
// Main
const map = function (array, callback) {
	const results = [];
	for (let item of array) {
		console.log(item);
		results.push(callback(item));
	}
	console.log(results);
	return results;
};
// Test Cases

assertArraysEqual(
	map(words, (item) => item),
	words
);
