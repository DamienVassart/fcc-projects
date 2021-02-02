import React from "react";

import QuoteBox from "./QuoteBox";

import quotesData from "./assets/quotes"

const quotesArr = quotesData.quotes
const quotesLengths = quotesArr.map(e => e.quote.length);
const median = Math.floor(Math.min(...quotesLengths) + (Math.max(...quotesLengths) - Math.min(...quotesLengths)) / 2);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.randomQuote = this.randomQuote.bind(this);
    this.newQuote = this.newQuote.bind(this);
  }

  randomQuote(n) {
    return (
      <QuoteBox
        text={quotesArr[n].quote}
        author={quotesArr[n].author}
        newQuote={this.newQuote}
        median={median}
      />
    )
  }

  newQuote() {
    this.setState({tate: this.state});
  }

  render () {
    const random = Math.floor(Math.random() * quotesArr.length);
    return (
      <div id="wrapper">
        {this.randomQuote(random)}
      </div>
    );
  }
}

export default App;
