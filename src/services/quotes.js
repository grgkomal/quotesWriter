export function quoteSave(newQuote) {
	const quotes = JSON.parse(localStorage.getItem("quotes") || "[]");
	const lastId = quotes.at(-1)?.id || 0;
	newQuote.id = lastId + 1;
	quotes.push(newQuote);
	localStorage.setItem("quotes", JSON.stringify(quotes));
	return newQuote;
}

export function deleteQuoteById(quoteId) {
	let quotes = JSON.parse(localStorage.getItem("quotes") || "[]");
	if (quotes.length > 0) {
	  quotes = quotes.filter((q) => q.id !== quoteId);  // fixed typo here
	  localStorage.setItem("quotes", JSON.stringify(quotes));
	  // console.log("Deleting quote with ID:", quoteId);
	  // console.log("Current quotes:", quotes);
	  return quotes;
	}
	return [];
  }
  
export function findAllQuotes() {
	return JSON.parse(localStorage.getItem("quotes") || "[]");
}

export function findQuoteById(quoteId) {
	let quotes = JSON.parse(localStorage.getItem("quotes") || "[]");
	if (quotes.length > 0) {
		quotes = quotes.filter((t) => q.id == quoteId);
		return quotes[0];
	}
}

export function toggleFavoriteById(quoteId) {
	let quotes = JSON.parse(localStorage.getItem("quotes") || "[]");
	const updatedQuotes = quotes.map((quote) => {
	  if (quote.id === quoteId) {
		return { ...quote, favorite: !quote.favorite };
	  }
	  return quote;
	});
	localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
	return updatedQuotes;
  }