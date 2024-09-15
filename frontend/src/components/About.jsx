import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we are serious about is food.</p>
            </div>
            <p className="mid">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident possimus optio adipisci dolores impedit illum iusto
              perferendis, laudantium quod accusamus consequuntur consectetur,
              tempore nulla error iure reiciendis dolorem assumenda.
              Necessitatibus fugit asperiores totam rem esse exercitationem
              iusto ipsum qui dolore ex, accusantium repellat mollitia
              repellendus.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img className="wowAbout"src="https://img.freepik.com/premium-photo/indian-hindu-veg-thali-restaurant-style-complete-food-platter-lunch-dinner_960396-561371.jpg?ga=GA1.2.896222227.1726323347&semt=ais_hybrid" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
