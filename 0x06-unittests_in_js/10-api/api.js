const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (_, response) => {
    response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
    const id = request.params.id;

    response.send(`Payment methods for cart :${id}`);
});

app.post('/login', (request, response) => {
    let userName = '';

    if (request.body) {
        userName = request.body.userName;
    }
    response.send(`Welcome :${userName}`);
});

app.get('/available_payments', (_request, response) => {
    response.send({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
