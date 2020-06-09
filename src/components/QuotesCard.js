import React from "react";

function QuotesCard({ quote }) {
  return (
    <div>
      <li>{quote.text}</li>
      <li>{quote.author}</li>
      
    </div>
  );
}

export default QuotesCard;
