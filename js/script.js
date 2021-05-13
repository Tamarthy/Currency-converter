let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

let rateEUR = 4.4;
let rateUSD = 3.4;
let rateCZK = 2.4;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;
    switch (currency) {
        case "EUR":
            result = amount / rateEUR; break;
        case "USD":
            result = amount / rateUSD; break;
        case "CZK":
            result = amount / rateCZK; break;
    }
resultElement.innerHTML=`${amount.toFixed(2)}PLN=${result.toFixed(2)}${currency}`;
})