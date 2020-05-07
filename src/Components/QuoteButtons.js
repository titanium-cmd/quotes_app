import React from 'react';
import '../styles/quote_buttons.css';
const helper = require('../js files/external_handling.js');

const QuoteButtons = (props) => {
    
    let handleButtonClicks = (event) =>{
        let btn = event.target.textContent;
        helper.resetActiveBtnTo(btn);
        props.selectedBtn(btn);
        props.showBanner(true);
    }
    return(
        <div className="row">
            <div className="btn-group-sm offset-1" onClick={handleButtonClicks}>
                <button id="successBtn" className="btn btn-outline-success m-1">Success</button>
                <button id="loveBtn" className="btn btn-outline-danger m-1">Love</button>
                <button id="moneyBtn" className="btn btn-outline-info m-1">Money</button>
                <button id="programmingBtn" className="btn btn-outline-dark m-1">Programming</button>
            </div>
        </div>
    )
}

export default QuoteButtons;