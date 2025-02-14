
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar/>
    
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Serving</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img  src="https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246075.jpg?ga=GA1.1.896222227.1726323347&semt=ais_hybrid" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Finest</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              {/* <img className="logo" src="logo.svg" alt="logo" /> */}
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="https://img.freepik.com/free-photo/nutritious-indian-dosa-assortment_23-2149086071.jpg?ga=GA1.2.896222227.1726323347&semt=ais_hybrid" alt="hero" />
          </div>
          <h1 className="title dishes_title">Flavors</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;