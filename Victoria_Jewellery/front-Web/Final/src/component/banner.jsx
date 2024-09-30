import banner1 from '../images/banner/bg-1.jpg';
import banner2 from '../images/banner/bg-2.jpg';
import banner3 from '../images/banner/bg-3.jpg';

const banner = () => {
  return (
    <>
      <section className="banner_section banner_black">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="#">
                    <img src={banner1} alt="banner1" />
                  </a>
                  <div className="banner_content">
                    <p>New Design</p>
                    <h2>Small design Rings</h2>
                    <span>Sale 20% </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="#">
                    <img src={banner2} alt="banner2" />
                  </a>
                  <div className="banner_content">
                    <p>Bestselling Rings</p>
                    <h2>White gold rings</h2>
                    <span>Sale 10% </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="#">
                    <img src={banner3} alt="banner3" />
                  </a>
                  <div className="banner_content">
                    <p>Featured Rings</p>
                    <h2>Platinium Rings</h2>
                    <span>Sale 30% </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default banner;
