import React from 'react';
import '../styles/quote_card.css';
import sample_quote from './sample_quotes.json';
const helper = require('../js files/external_handling.js');

const QuoteCard = ({currentBtn}) =>{
    helper.setSelectors(document.querySelector('#statement'), document.querySelector('#author'));
    helper.setQoutes(sample_quote.quotes);
    helper.loadQuotes(currentBtn);
    return (
        <div className="row offset-1">
              <div className="card">
                    <div className="card-header"> {currentBtn} quotes </div>
                    <div className="card-body">
                          <blockquote className="blockquote mb-0">
                                <p id="statement"></p>
                                <footer className="blockquote-footer"> <span id="author"> </span></footer>
                          </blockquote>
                    </div> 
              </div>
        </div>
  )
}

export default QuoteCard;