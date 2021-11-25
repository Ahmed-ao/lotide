const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
// Test Cases
// should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(
	eqArrays(['me', 'you', 'him', 1, false], ['me', 'you', 'him', 1, false]),
	true
);
// should fail
assertEqual(
	eqArrays(['me', 'you', 'him', 1, false], ['me', 'you', 'him', 1, false]),
	false
);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
