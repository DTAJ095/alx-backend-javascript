// const getPaymentTokenFromAPI = (success) => new Promise((resolve, reject) => {
//   if (success) {
//     resolve({ data: 'Successful response from the API' });
//   }
// });
function getPaymentTokenFromAPI(success) {
  if (success) {
    return new Promise.resolve({data: 'Successful response from the API' })
  }
}

module.exports = getPaymentTokenFromAPI;
