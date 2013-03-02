var Decimal = function(value) {
	this.Value = value;
	this.toFraction = function() {
		var fraction;
		if(!isNaN(parseFloat(this.Value))) {
			var integer = Math.floor(this.Value);
			fraction = parseAbsoluteDecimal(integer, this.Value - integer);
		} else {
			fraction = '';
		}
		return fraction;
	}

	function parseAbsoluteDecimal(integer, decimal) {
		var maxiter = 20, num = decimal, epsilon = Math.pow(10, -6), d = [0, 1]; z = num, n = 1, t = 1;
		for(var i = 0; i <= maxiter; i++) {
			d.push(0);
		}
		while(num && t < maxiter && Math.abs((n / d[t]) - num) > epsilon) {
			t++;
			z = (1 / (z - Math.floor(z)));
			d[t] = (d[t - 1] * Math.floor(z)) + d[t - 2];
			n = Math.floor((num * d[t]) + 0.5);
		}

		return integer + ' and ' + n + '/' + d[t];
	}
};
