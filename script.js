fetch("https://www.boredapi.com/api/activity")
  .then((data) => data.json())
  .then((inspoQuote) => {
    const inspoText = inspoQuote.activity;
    const quote = document.getElementById("quote");
    quote.innerHTML = inspoText;
  });
