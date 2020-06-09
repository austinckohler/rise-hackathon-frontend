import React, { Component } from "react";
import QuotesContainer from "./components/QuotesContainer";
import "./App.css";
import EventsContainer from "./components/EventsContainer";
import FavoritesContainer from "./components/FavoritesContainer";

export class App extends Component {
  state = {
    quotes: [],
    favorites: [],
    events: [],
  };

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((quotes) => this.setState({ quotes: quotes.slice(0, 25) }));

    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((events) => this.setState({ events }));
  }

  addToFavorites = (quote) => {
    // if (!this.state.favorites.find((q) => q.id === quote.id))
    this.setState({ favorites: [...this.state.favorites, quote] });
  };

  render() {
    return (
      <div className="app">
        <h1 className="title">Rise Inspiration</h1>
        <FavoritesContainer favorites={this.state.favorites} />
        <QuotesContainer
          quotes={this.state.quotes}
          addToFavorites={this.addToFavorites}
        />

        <EventsContainer events={this.state.events} />
      </div>
    );
  }
}

export default App;
