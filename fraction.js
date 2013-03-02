var Fraction = function(value) {
	this.Value = value;
	this.toDecimal = function() {
		var splitter = this.Value.split('/'), decimal;
		if(splitter.length = 2) {
			decimal = parseFloat(splitter[0] / splitter[1]);
			decimal = isNaN(decimal) ? NaN : decimal;
		} else {
			decimal = NaN;
		}
		return decimal;
	}
};
