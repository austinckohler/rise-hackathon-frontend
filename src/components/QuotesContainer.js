import React from "react";
import QuoteCard from "./QuotesCard";

function QuotesContainer({ quotes, addToFavorites }) {
  const quotes1 = quotes.map((quote) => {
    return (
      <QuoteCard key={quote.id} quote={quote} addToFavorites={addToFavorites} />
    );
  });
  return (
    <div className="quotes-container">
      <ul>{quotes1}</ul>
    </div>
  );
}

export default QuotesContainer;
