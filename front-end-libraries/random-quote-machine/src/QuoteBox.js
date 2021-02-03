import React from "react"

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.tweetQuote = this.tweetQuote.bind(this);
        this.setFontSize = this.setFontSize.bind(this);
    }

    tweetQuote(str1, str2) {
        return `https://twitter.com/intent/tweet?text="${str1}" (${str2})`;
    }

    setFontSize(str, n) {
        const coef = Math.sqrt(Math.ceil(100 / str.length));
        const fontSize = ((coef <= 2 ? coef : 2) * (n / 100));
        return {fontSize:  fontSize.toFixed(1) + 'rem'};
    }

    render() {
        const text = this.props.text;
        const author = this.props.author;
        const median = this.props.median;
        console.log(this.setFontSize(text, median));
        return (
            <div id="quote-box">
                <blockquote id="text" style={this.setFontSize(text, median)}>
                &ldquo;{text}&rdquo;
                </blockquote>
                <p id="author">
                    -- {author}
                </p>
                <div id="new-quote-wrapper" className="wrapper">
                    <button id="new-quote" onClick={this.props.newQuote}>
                        New Quote
                    </button>
                </div>
                <div id="tweet-quote-wrapper" className="wrapper">
                    <a href={this.tweetQuote(text, author)} id="tweet-quote" target="_blank" rel="noreferrer">
                        <button>
                            Tweet Quote
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default QuoteBox