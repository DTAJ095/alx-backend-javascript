const request = require('request');
const { expect } = require('chai');

describe('API Integration test', () => {
  const URL_API = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${URL_API}/`, (_err, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${URL_API}/cart/101`, (_err, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 101');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${URL_API}/cart/-101`, (_err, response, _body) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, response, _body) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
});
