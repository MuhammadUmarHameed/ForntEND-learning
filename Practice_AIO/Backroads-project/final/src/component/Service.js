import { services } from '../data';
const Service = () => {
  return (
    <>
      <section className="section-services" id="services">
        <div className="section-title">
          <h2>
            Our <span>Services</span>
          </h2>
        </div>
        {services.map((service) => {
          return (
            <div className="section-center services-center" key={service.id}>
              <article className="service">
                <span className="service-icon">
                  <i className={`fas ${service.icon} fa-fw`}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-text">{service.text}</p>
                </div>
              </article>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default Service;
