// Data
const ab = { a: '1', b: '2', c: [1, 2] };
const ba = { b: '2', a: '1', c: [1, 2] };
const abc = { a: '1', b: '2', c: '3' };
// Array
const eqArrays = (array, match) => {
	return (
		Array.isArray(array) &&
		Array.isArray(match) &&
		array.length === match.length &&
		array.every((val, index) => val === match[index])
	);
};
// Assertion
const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};
// Main
const eqObjects = (obj1, obj2) => {
	if (Object.keys(obj1).length !== Object.keys(obj2).length) return;
	for (const key of Object.keys(obj1)) {
		for (const k of Object.keys(obj2)) {
			if (Array.isArray(key)) {
				eqArrays(key, k);
			}
			if (key === k) return true;
		}
	}
	// if (key === Object.values(obj2)) return true;
};
// Test Cases
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), undefined); // => false
