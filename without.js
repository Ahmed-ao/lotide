const eqArrays = (array, match) => {
	return (
		Array.isArray(array) &&
		Array.isArray(match) &&
		array.length === match.length &&
		array.every((val, index) => val === match[index])
	);
};

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

const without = (sourceArr, itemsToRemove) => {
	if (!Array.isArray(itemsToRemove)) {
		return sourceArr.filter((value) => value !== itemsToRemove);
	} else {
		return sourceArr.filter((value, index) => value !== itemsToRemove[index]);
	}
};

console.log(without([1, 2, 3], 1));
console.log(without([1, 2, 3, '1'], '1'));
console.log(without([1, 2, 3, 4, 5, 6, 7], [1, 2]));
console.log(without(['1', '2', '3', '1'], ['2', '1']));
console.log(without([1, 2, 3, '1'], [1, '1']));
