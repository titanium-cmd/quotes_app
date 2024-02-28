import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import '../styles/bootstrap.min.css';
import 'swiper/swiper-bundle.min.css'
import '../styles/index.css';
import Banner from './Banner';

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

  render() {
    //Conditional Rendering
    let banner;
    if (this.state.displayBanner) {
      banner = <Banner display={this.state.displayBanner} />; //show banner
    } else {
      banner = ''; //dont show banner
    }
    return (
      <div className="container">
        <Swiper
          modules={[EffectFade, Autoplay, Pagination, Navigation]} effect="fade"
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            SLIDE 1
          </SwiperSlide>
          <SwiperSlide>
            SLIDE 2
          </SwiperSlide>
          <SwiperSlide>
            SLIDE 3
          </SwiperSlide>
          <SwiperSlide>
            SLIDE 4
          </SwiperSlide>
          {/* <SwiperSlide>
            {banner}
            <QuoteButtons showBanner={this.handleBannerState} selectedBtn={this.handleBtnChange} />
            <QuoteCard currentBtn={this.state.currentBtn} />
          </SwiperSlide> */}
        </Swiper>
      </div>
    )
  }
}

export default Container;
