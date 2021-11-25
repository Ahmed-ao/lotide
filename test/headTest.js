// const assert = require('chai').assert;
const head = require('../head');
const assertEqual = require('../assertEqual');

// describe('#head', () => {
//   it('returns 1 for [1, 2, 3]', () => {
//     assert.strictEqual(head([1, 2, 3]), 1);
// 	});
// });
//  Test Cases
// should pass
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
// should fail
assertEqual(head([5, 6, 7]), 6);
assertEqual(head([5, 6, 7]), '5');
