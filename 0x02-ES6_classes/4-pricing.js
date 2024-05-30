import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    // setter for amount
    set amount(newAmount) {
        if (Object.getPrototypeOf(newAmount) !== Number.prototype) {
            throw TypeError('Amount must be a number');
        }
        this._amount = newAmount;
    }

    // setter for currency
    set currency(newCurrency) {
        if (!(newCurrency instanceof Currency)) {
            throw TypeError('Currency must be a Currency');
        }
        this._currency = newCurrency;
    }

    // getter for amount
    get amount() {
        return this._amount;
    }

    // getter for currency
    get currency() {
        return this._currency;
    }

    // Method to display full price
    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    // Static method to convert price
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}