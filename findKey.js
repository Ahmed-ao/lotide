const findKey = (object, func) => {
	for (const key in object) {
		if (func(object[key])) return key;
	}
	return undefined;
};
// };function that takes in an object and  a callback function and returns the first key for which the callback function returns true.
// If no key is found, then it should return undefined.
// Examples:s
console.log(
	findKey(
		{
			Blue: { stars: 1 },
			Akaleri: { stars: 3 },
			noma: { stars: 2 },
			elBulli: { stars: 3 },
			Ora: { stars: 2 },
			Akelarre: { stars: 3 },
		},
		(x) => {
			x.stars === 2;
		}
	)
);
