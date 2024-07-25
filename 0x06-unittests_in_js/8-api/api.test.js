const request = require('request');
const { expect } = require('chai');

describe('API Integration test', () => {
    const URL_API = 'http://localhost:7865';

    it('GET / returns the correct response', (done) => {
        request.get(`${URL_API}/`, (_error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});
