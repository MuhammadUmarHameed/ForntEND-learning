import { tours } from '../data';
const Tour = () => {
  return (
    <>
      <section className="section-featured" id="tours">
        <div className="section-title">
          <h2>
            Featured <span>Tours</span>
          </h2>
        </div>
        {tours.map((tour) => (
          <div
            className="section-center featured-center"
            id="featured"
            key={tour.id}
          >
            <article className="tour-card">
              <div className="tour-img-container">
                <img src={tour.image} alt={tour.title} />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h3>{tour.title}</h3>
                </div>
                <p>{tour.description}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fa fa-map fa-fw"></i> {tour.location}
                    </span>
                  </p>
                  <p>{tour.days} Days</p>
                  <p>From ${tour.price}</p>
                </div>
                <div className="tour-btn">
                  <a href="#tours" className="btn">
                    Book Now
                  </a>
                </div>
              </div>
            </article>
          </div>
        ))}
      </section>
    </>
  );
};
export default Tour;
