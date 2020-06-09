import React, { Component } from "react";
import QuotesContainer from "./components/QuotesContainer";
import EventsContainer from "./components/EventsContainer";

export class App extends Component {
  state = {
    quotes: [],
    events: []
  };

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((quotes) => 
      
      this.setState({ quotes: quotes.slice(0,25) }));

      // fetch("http://localhost3000")
      .then((response) => response.json())
      .then((events) => 
      
      this.setState({ events }));
  }
  render() {
    return (
      <div>
        <h1>test</h1>
        <QuotesContainer quotes={this.state.quotes} />
        <EventsContainer events={this.state.events}/>
      </div>
    );
  }
}

export default App;
