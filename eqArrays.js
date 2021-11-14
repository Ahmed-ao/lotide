// Assertion
const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

// Main
const eqArrays = (array, match) => {
	return (
		Array.isArray(array) &&
		Array.isArray(match) &&
		array.length === match.length &&
		array.every((val, index) => val === match[index])
	);
};

// Test Cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(
	eqArrays(['me', 'you', 'him', 1, false], ['me', 'you', 'him', 1, false]),
	true
);
assertEqual(
	eqArrays(['me', 'you', 'him', 1, false], ['me', 'you', 'him', 1, false]),
	false
);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
