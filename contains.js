String.prototype.contains = function(strings, index) {
	if(!Array.isArray(strings)) throw Error('1 argument is not an array');
	return strings.some(string => this.includes(string, index), this);
}

// This should most likely be longer, but I need help improving it. Not sure how to
