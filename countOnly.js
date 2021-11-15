// Data
const firstNames = [
	'Karl',
	'Salima',
	'Agouhanna',
	'Fang',
	'Kavith',
	'Jason',
	'Salima',
	'Fang',
	'Joe',
];
// Assertion
const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

// Main
const countOnly = (items, count) => {
	const results = {};
	for (const item of items) {
		if (count[item]) {
			console.log(count[item]);
			if (results[item]) {
				results[item] += 1;
			} else {
				results[item] = 1;
			}
		}
	}
	return results;
};
// Test Cases
const result1 = countOnly(firstNames, {
	Jason: true,
	Karima: true,
	Fang: true,
	Agouhanna: false,
});
assertEqual(result1['Jason'], 1);
assertEqual(result1['Karima'], undefined);
assertEqual(result1['Fang'], 2);
assertEqual(result1['Agouhanna'], undefined);
