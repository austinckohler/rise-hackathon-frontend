import React from "react";

function FavoritesCard(props) {
  return (
    <div>
      <h2>{props.quote.text}</h2>
    </div>
  );
}

export default FavoritesCard;
