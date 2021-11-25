const assertEqual = require('../assertEqual');
// Test Cases
// should pass
assertEqual(1, 1);
assertEqual('hello', 'hello');
// should fail
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 2);
assertEqual(1, '1');
assertEqual(1, true);
assertEqual(1, { 1: 'one' });
assertEqual(1, [1]);
