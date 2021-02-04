import React from "react"

import twitterIcn from './assets/tw.png';
import refresh from './assets/refresh.png'

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.tweetQuote = this.tweetQuote.bind(this);
    }

    tweetQuote(str1, str2) {
        return `https://twitter.com/intent/tweet?text="${str1}" (${str2})`;
    }

    render() {
        const text = this.props.text;
        const author = this.props.author;
        return (
            <div id="quote-box">
                <blockquote id="text" style={{fontSize: this.props.fontSize, color: this.props.colors.textColor}}>
                &ldquo;{text}&rdquo;
                </blockquote>
                <p id="author">
                    -- {author}
                </p>
                <div id="new-quote-wrapper" className="wrapper">
                    <button id="new-quote" onClick={this.props.newQuote} style={{backgroundColor: this.props.colors.btnColor}}>
                        <img src={refresh} alt="refresh" width="16px" height="16px" /> New Quote
                    </button>
                </div>
                <div id="tweet-quote-wrapper" className="wrapper">
                    <a href={this.tweetQuote(text, author)} id="tweet-quote" target="_blank" rel="noreferrer">
                        <button style={{backgroundColor: this.props.colors.btnColor}}>
                            <img src={twitterIcn} alt="twitter-icon" width="16px" height="16px"/> Tweet
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default QuoteBox