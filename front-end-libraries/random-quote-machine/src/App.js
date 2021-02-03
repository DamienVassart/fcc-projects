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
    this.randomQuote = this.randomQuote.bind(this);
    this.newQuote = this.newQuote.bind(this);
    this.randomColor = this.randomColor.bind(this);
    this.setStyle = this.setStyle.bind(this);
  }

  randomQuote(n) {
    const text = quotesArr[n].quote;
    return (
      <QuoteBox
        text={text}
        author={quotesArr[n].author}
        newQuote={this.newQuote}
        style={this.setStyle(text, median)}
      />
    )
  }

  newQuote() {
    this.setState({tate: this.state});
  }

 randomColor() {
    let randomHue = randomRange(0, 360);
    let bgColor = {
      hue: randomHue,
      sat: randomRange(50, 100),
      lum: randomRange(0, 100)
    };
  
    let textColor = {
      hue: (randomHue + 120) % 360,
      sat: randomRange(50, 100),
      lum: randomRange(20, 50)
    };
  
    let btnColor = {
      hue: (randomHue + 240) % 360,
      sat: randomRange(50, 100),
      lum: randomRange(20, 50)
    };
    
    return [bgColor, textColor, btnColor]; 
  }

  setStyle(str, n) {
    const coef = Math.sqrt(Math.ceil(100 / str.length));
    const fontSize = ((coef <= 2 ? coef : 2) * (n / 100));
    return {
      fontSize:  fontSize.toFixed(1) + 'rem'
    };
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
