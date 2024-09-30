import img from '../images/about.jpeg';

const About = () => {
  return (
    <>
      <section className="section-about" id="about">
        <div className="section-title">
          <h2>
            About <span>us</span>
          </h2>
        </div>
        <div className="section-center about-center">
          <div className="about-img">
            <img src={img} className="about-photo" alt="about" />
          </div>
          <article className="about-info">
            <h3>Explore The Difference</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sit
              libero ex quisquam velit veniam vel in dolores accusantium autem
              dolor pariatur aliquam cumque corrupti iste, explicabo distinctio
              quibusdam. Voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sit
              libero ex quisquam velit veniam vel in dolores accusantium autem
              dolor pariatur aliquam cumque corrupti iste, explicabo distinctio
              quibusdam. Voluptatum.
            </p>
            <a href="#about" className="btn">
              Read More
            </a>
          </article>
        </div>
      </section>
    </>
  );
};
export default About;
