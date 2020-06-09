import React from "react";

function QuotesCard({ quotes }) {
  console.log(quotes);
  return (
    <div>
      <li>{quotes.text}</li>
    </div>
  );
}

export default QuotesCard;
