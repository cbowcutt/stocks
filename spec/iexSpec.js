var iex = require('../app/services/iex.js');
describe('iex', function() {
				var responseBody;
	describe('iex.tops()', function() {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000000;
		beforeEach(function(done) {

			iex.tops((body) => {
				responseBody = body;
				done();
			})
		});
		it('should return an array with an object for each stock symbol', function(done) {
			for(var obj in responseBody) {
				expect(obj.symbol).not.toBe(undefined);
			}
			done();
		});
	})
})
