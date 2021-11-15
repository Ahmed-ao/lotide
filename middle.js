const eqArrays = (array, match) => {
	return (
		Array.isArray(array) &&
		Array.isArray(match) &&
		array.length === match.length &&
		array.every((val, index) => val === match[index])
	);
};
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
const middle = (arr) => {
	if (arr.length === 1) return [];
	if (arr.length === 2) return [];
	const middle = Math.floor((arr.length - 1) / 2);
	if (arr.length % 2 === 0) {
		return arr.slice(middle, middle + 2);
	} else {
		return arr.slice(middle, middle + 1);
	}
};
// Test Cases

middle([1, 2, 3, 4, 5, 6, 7, 8]);
middle([1, 2, 3, 4, 5, 6]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3]);
middle([1, 2]);
middle([1]);
