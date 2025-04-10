const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");

// Fetch a random quote
async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    quoteText.textContent = data.content;
    authorText.textContent = `— ${data.author}`;
    
    // Update Tweet link
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${data.content}" — ${data.author}`
    )}`;
  } catch (error) {
    quoteText.textContent = "Failed to fetch quote. Try again!";
    console.error(error);
  }
}

// Load a quote on page load and button click
newQuoteBtn.addEventListener("click", getQuote);
getQuote(); // Initial load