import React, { Component } from "react";
import QuotesContainer from "./components/QuotesContainer";

export class App extends Component {
  state = {
    quotes: [],
  };

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((quotes) => 
      
      this.setState({ quotes: quotes.slice(0,25) }));
  }
  render() {
    return (
      <div>
        <h1>test</h1>
        <QuotesContainer quotes={this.state.quotes} />
      </div>
    );
  }
}

export default App;
