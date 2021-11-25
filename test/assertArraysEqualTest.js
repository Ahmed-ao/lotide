const assertArraysEqual = require('../assertArraysEqual');
// Test Cases
// Sould Pass
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
// Should fail
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], ['1', 2, 3]);
