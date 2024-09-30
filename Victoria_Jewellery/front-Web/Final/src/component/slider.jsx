import 'owl.carousel';
import 'slick-carousel';
import slider1 from '../images/slider/1.png';
import slider2 from '../images/slider/2.jpg';
import slider3 from '../images/slider/3.jpg';

const Slider = () => {
  return (
    <div className="slider_area slider_black owl-carousel">
      <div className="single_slider" data-bgimg={slider1}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="slider_content">
                <p>exclusive offer -20% off this week</p>
                <h1>Necklace</h1>
                <span>22 Carat gold necklace for wedding</span>
                <p className="slider_price">
                  starting at <span>Rs. 75,999</span>
                </p>
                <a href="#" className="button">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single_slider" data-bgimg={slider2}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="slider_content">
                <p>exclusive offer -40% off this week</p>
                <h1>Earings and Pendant</h1>
                <span>Complete bridal set with white pearls</span>
                <p className="slider_price">
                  starting at <span>Rs. 89,499</span>
                </p>
                <a href="#" className="button">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single_slider" data-bgimg={slider3}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="slider_content">
                <p>exclusive offer -10% off this week</p>
                <h1>Wedding Rings</h1>
                <span>Ashirwaad Special wedding rings for couples.</span>
                <p className="slider_price">
                  starting at <span>Rs. 14,999</span>
                </p>
                <a href="#" className="button">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
