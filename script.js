const apiKey = "47e006852b240bbb6a5f34c1";
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const convertBtn = document.getElementById("convert");
const resultDiv = document.getElementById("result");

const populateCurrencies = async () => {
  const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
  const data = await res.json();
  const currencies = Object.keys(data.conversion_rates);

  currencies.forEach((currency) => {
    let option1 = document.createElement("option");
    option1.value = currency;
    option1.text = currency;

    let option2 = option1.cloneNode(true);

    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
  });

  fromCurrency.value = "USD";
  toCurrency.value = "INR";
};

convertBtn.addEventListener("click", async () => {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amt = parseFloat(amount.value);

  if (isNaN(amt)) {
    resultDiv.innerText = "Please enter a valid amount.";
    return;
  }

  const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`);
  const data = await res.json();

  const rate = data.conversion_rates[to];
  const converted = (amt * rate).toFixed(2);

  resultDiv.innerText = `${amt} ${from} = ${converted} ${to}`;
});

populateCurrencies();
