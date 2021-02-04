import React from "react";

import QuoteBox from "./QuoteBox";

import quotesData from "./assets/quotes"

const quotesArr = quotesData.quotes

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
      bgColor: `hsl(${randomHue}, ${randomRange(50, 100)}%, ${randomRange(20, 100)}%)`,
      textColor: `hsl(${(randomHue + 120) % 360}, ${randomRange(50, 100)}%, ${randomRange(20, 50)}%)`,
      btnColor: `hsl(${(randomHue + 240) % 360}, ${randomRange(50, 100)}%, ${randomRange(20, 40)}%)`
    };
  }

  setFontSize(str) {
    const coef = Math.sqrt(Math.ceil(100 / str.length));
    const fontSize = ((coef <= 2 ? coef : 2) * 1.5);
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
          fontSize={this.setFontSize(text)}
          colors={colors}
        />
      </div>
    );
  }
}

export default App;
