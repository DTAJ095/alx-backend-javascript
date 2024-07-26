// const getPaymentTokenFromAPI = (success) => new Promise((resolve, reject) => {
//   if (success) {
//     resolve({ data: 'Successful response from the API' });
//   }
// });
function getPaymentTokenFromAPI(success) {
  new Promise((resolve) => {
    if (success) {
      resolve({ data: 'Successful response from the API' })
    }
  })
}

module.exports = getPaymentTokenFromAPI;
