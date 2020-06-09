import React from "react";
import QuoteCard from "./QuotesCard";

function QuotesContainer({ quotes }) {
  const quotes1 = quotes.map((quote) => {
    return <QuoteCard key={quote.id} quote={quote.text} />;
  });
  return (
    <div className="quotes-container">
      <ul>{quotes1}</ul>
    </div>
  );
}

export default QuotesContainer;
