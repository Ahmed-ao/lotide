// Main
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

// Test Cases
// Sould Pass
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
// Should fail
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], ['1', 2, 3]);
