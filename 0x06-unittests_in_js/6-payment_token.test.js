const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromApi', () => {
  it('getPaymentTokenFromApi(success), where success == true', (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.be.equal({ data: 'Successful response from the API' });
      (done);
    });
  });
});
