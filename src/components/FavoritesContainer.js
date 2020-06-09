import React from "react";
import FavoritesCard from "./FavoritesCard";

function FavoritesContainer(props) {
  const { favorites, quote } = props;
  const fav1 = favorites.map((favorite) => (
    <FavoritesCard key={favorite.id} quote={favorite} />
  ));
  return (
    <div className="favorites-container">
      <p>{fav1}</p>
    </div>
  );
}

export default FavoritesContainer;
