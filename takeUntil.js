// Data
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = [
	"I've",
	'been',
	'to',
	'Hollywood',
	',',
	"I've",
	'been',
	'to',
	'Redwood',
];
// Assertion
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
// Main
const takeUntil = (array, predict) => {
	const tempIndex = array.findIndex((item) => predict(item));
	const result = [];
	array.forEach((value, index) => {
		if (!predict(value, index) && index < tempIndex) result.push(value);
	});
	return result;
};
// Test Cases
assertArraysEqual(
	takeUntil(data1, (x) => x < 0),
	[1, 2, 5, 7, 2]
);
assertArraysEqual(
	takeUntil(data2, (x) => x === ','),
	["I've", 'been', 'to', 'Hollywood']
);
