import React from "react";

function QuotesCard({ quote, addToFavorites }) {
  function onClick() {
    addToFavorites(quote);
  }
  return (
    <div className="quotes-card" onClick={onClick}>
      <li className="quotes-text">{quote.text}</li>
      <p>{quote.author}</p>
    </div>
  );
}

export default QuotesCard;
