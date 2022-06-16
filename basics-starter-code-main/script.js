var names = [];
var main = function (input) {
	var found = false;

	var index = 0;
	while (index < names.length) {
		var currentName = names[index];
		if (currentName == input) {
			found = true;
		}
		index = index + 1;
	}

	if (found) {
		console.log(`${input} was already found in the names array`);
	} else {
		names.push(input);
		console.log(`${input} has been added to the names array`);
	}
	// Return the full array of names
	var myOutputValue = 'All names: ' + names;
	return myOutputValue;
};
