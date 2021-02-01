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
        return (
            <div id="quote-box">
                <blockquote id="text">
                    "{this.props.text}"
                </blockquote>
                <p id="author">
                    -- {this.props.author}
                </p>
                <div id="buttons">
                    <button id="new-quote" onClick={this.props.newQuote}>
                        New Quote
                    </button>
                    <a href={this.tweetQuote(this.props.text, this.props.author)} id="tweet-quote" target="_blank" rel="noreferrer">
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