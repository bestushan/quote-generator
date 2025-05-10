async function getQuote() {
    try {
      const response = await fetch("https://zenquotes.io/api/random");
      const data = await response.json();
      quoteText.textContent = `"${data[0].q}"`;
      authorText.textContent = `— ${data[0].a}`;
    } catch (error) {
      quoteText.textContent = "Failed to fetch quote. Try again!";
    }
  }