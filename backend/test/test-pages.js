var expect  = require('chai').expect;
var request = require('request');

it('All', function(done) {
    request('http://localhost:3001/restaurants/all' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
it('SortBy Name', function(done) {
    request('http://localhost:3001/restaurants/SortedByName/all' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
it('SortBy Cuisine', function(done) {
    request('http://localhost:3001/restaurants/SortedByCuisine/all' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
it('SortBy Rating', function(done) {
    request('http://localhost:3001/restaurants/SortedByRating/all' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
it('SortBy Rating and Cuisine Filter', function(done) {
    request('http://localhost:3001/restaurants/SortedByRating/American' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});