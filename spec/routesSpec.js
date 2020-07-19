var server;
var request = require('request');

describe('POST /ticks/:symbol', function() {
	var ticks_served;
	beforeEach(function(done) {
		server = require('../server.js');
		request.get({
			method: 'POST',
			uri: 'localhost:3000/ticks',
			contentType: 'applicat)ion/json',
			body: JSON.stringify({symbol: 'aapl'})
		}, function(ticks) {
			ticks_served = ticks;
			done();
		})
	})
	afterEach(function() {
		server = null;
		ticks_served = null;
	})
	it('should return an associative array keyed by dates', function(done) {
		for(var date in ticks_served) {
			expect(/\d{2}-\d{2}\d{2}/.test(date)).toBe(true);
		}
		done();
	})
	it('should have each key map to an object containing an "open" property', function(done) {
		for(var date in ticks_served) {
			var tick = ticks_served[tick];
			expect(typeof(tick.open)).toBe(string);
		}
		done();
	})
	it('should have each key map to an object containing a "close" property', function(done) {
		for(var date in ticks_served) {
			var tick = ticks_served[tick];
			expect(typeof(tick.close)).toBe(string);
		}
		done();
	})
	it('should have each key map to an object containing a "high" property', function(done) {
		for(var date in ticks_served) {
			var tick = ticks_served[tick];
			expect(typeof(tick.high)).toBe(string);
		}
		done();
	})
	it('should have each key map to an object containing a "low" property', function(done) {
		for(var date in ticks_served) {
			var tick = ticks_served[tick];
			expect(typeof(tick.low)).toBe(string);
		}
		done();	
	})
	it('should have each key map to an object containing a "volume" property', function(done) {
		for(var date in ticks_served) {
			var tick = ticks_served[tick];
			expect(typeof(tick.volume)).toBe(string);
		}
		done();
	});
});

describe('GET /ticks/:symbol', function() {
	beforeEach(function(done) {
		server = require('../server.js');
		request.get({
			uri: 'localhost:3000/ticks/aapl',
			contentType: 'application/json',
			body: JSON.stringify({symbol: 'aapl'})
		}, function(ticks) {
			ticks_served = ticks;
			done();
		})
	});
		afterEach(function() {
		server = null;
		ticks_served = null;
	})
	it('should return an associative array keyed by dates', function(done) {
		for(var date in ticks_served) {
			expect(/\d{2}-\d{2}\d{2}/.test(date)).toBe(true);
		}
		done();
	})
	it('should have each key map to an object containing an "open" property', function(done) {
		for(var date in ticks_served) {
			var tick = ticks_served[tick];
			expect(typeof(tick.open)).toBe(string);
		}
		done();
	})
	it('should have each key map to an object containing a "close" property', function(done) {
		for(var date in ticks_served) {
			var tick = ticks_served[tick];
			expect(typeof(tick.close)).toBe(string);
		}
		done();
	})
	it('should have each key map to an object containing a "high" property', function(done) {
		for(var date in ticks_served) {
			var tick = ticks_served[tick];
			expect(typeof(tick.high)).toBe(string);
		}
		done();
	})
	it('should have each key map to an object containing a "low" property', function(done) {
		for(var date in ticks_served) {
			var tick = ticks_served[tick];
			expect(typeof(tick.low)).toBe(string);
		}
		done();	
	})
	it('should have each key map to an object containing a "volume" property', function(done) {
		for(var date in ticks_served) {
			var tick = ticks_served[tick];
			expect(typeof(tick.volume)).toBe(string);
		}
		done();
	});
})