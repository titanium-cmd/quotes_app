import React from 'react';
import QuoteCard from './QuoteCard';
import QuoteButtons from './QuoteButtons';
import Banner from './Banner';
import '../styles/bootstrap.min.css';
import '../styles/index.css';

class Container extends React.Component {
  state = {
    currentBtn: 'Success', 
    displayBanner: true,
    displayQuotes: false
  }

  handleBtnChange = (button_clicked) => {
    this.setState({
      currentBtn: button_clicked,
    });
  }

  handleBannerState = (booleanState) => {
    this.setState({
      displayBanner: false, 
      displayQuotes: true
    });
  }

  render(){
    //Conditional Rendering
    let banner; 
    if(this.state.displayBanner){
      banner = <Banner display={this.state.displayBanner}/>; //show banner
    }else{
      banner = ''; //dont show banner
    }      
    return (
      <div className="container">
        {banner}
        <QuoteButtons showBanner={this.handleBannerState} selectedBtn={this.handleBtnChange} />
        <QuoteCard currentBtn={this.state.currentBtn} />
      </div>
    )
  }
}

export default Container;
