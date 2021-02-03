import React from "react";

import QuoteBox from "./QuoteBox";

import quotesData from "./assets/quotes"

const quotesArr = quotesData.quotes
const quotesLengths = quotesArr.map(e => e.quote.length);
const median = Math.floor(Math.min(...quotesLengths) + (Math.max(...quotesLengths) - Math.min(...quotesLengths)) / 2);

const randomRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.newQuote = this.newQuote.bind(this);
    this.setColors = this.setColors.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
  }

  newQuote() {
    this.setState({state: this.state});
  }

  setColors() {
    let randomHue = randomRange(0, 360);

    return {
      bgColor: `hsl(${randomHue}, ${randomRange(50, 100)}%, ${randomRange(0, 100)}%)`,
      textColor: `hsl(${(randomHue + 120) % 360}, ${randomRange(50, 100)}%, ${randomRange(20, 50)}%)`,
      btnColor: `hsl(${(randomHue + 240) % 360}, ${randomRange(50, 100)}%, ${randomRange(20, 50)}%)`
    };
  }

  setFontSize(str, n) {
    const coef = Math.sqrt(Math.ceil(100 / str.length));
    const fontSize = ((coef <= 2 ? coef : 2) * (n / 100));
    return fontSize.toFixed(1) + 'rem'
  }

  render () {
    const n = Math.floor(Math.random() * quotesArr.length);
    const text = quotesArr[n].quote;
    const author = quotesArr[n].author;
    const colors = this.setColors();
    document.body.style.backgroundColor = colors.bgColor;
    return (
      <div id="wrapper">
        <QuoteBox
        text={text}
        author={author}
        newQuote={this.newQuote}
        fontSize={this.setFontSize(text, median)}
        colors={colors}
      />
      </div>
    );
  }
}

export default App;
