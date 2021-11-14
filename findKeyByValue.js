// Assertion
const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};
// Main function
const findKeyByValue = (object, value) => {
	for (const key in object) {
		if (object[key] === value) {
			return key;
		}
	}
	return undefined;
};

// Test Cases
assertEqual(findKeyByValue({ 1: 'one', 2: 'two', 3: 'three' }, 'one'), '1');
assertEqual(findKeyByValue({ 1: 'one', 2: 'two', 3: 'three' }, 'three'), '3');
assertEqual(
	findKeyByValue({ 1: 'one', 2: 'two', 3: 'three' }, 'four'),
	undefined
);
assertEqual(findKeyByValue({ 1: 'one', 2: 'two', 3: 'three' }, 'three'), '4');
assertEqual(findKeyByValue({ 1: 'one', 2: 'two', 3: 'three' }, 'four'), '3');
