import React from "react"

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