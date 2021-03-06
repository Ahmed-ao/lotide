// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

// Test Cases
assertEqual(1, 1);
assertEqual('hello', 'hello');
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 2);
assertEqual(1, '1');
assertEqual(1, true);
assertEqual(1, { 1: 'one' });
assertEqual(1, [1]);
