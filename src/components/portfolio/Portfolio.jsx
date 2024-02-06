import "./Portfolio.css";
import Img1 from "../../imgs/portfolio1.jpg";
import Img2 from "../../imgs/portfolio2.jpg";
import Img3 from "../../imgs/portfolio3.jpg";
import Img4 from "../../imgs/portfolio4.jpg";
import Img5 from "../../imgs/portfolio5.png";
import Img6 from "../../imgs/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Crypto Currency Dashboard & Financial Visualization",
  },
  {
    id: 2,
    image: Img2,
    title: "Charts Tamplates & Infographics In Figma",
  },
  {
    id: 3,
    image: Img3,
    title: "Figma Dashboard UI Kit For Data Design Web Apps",
  },
  {
    id: 4,
    image: Img4,
    title: "Maintaining Tasks And Tracking Progress",
  },
  {
    id: 5,
    image: Img5,
    title: "Charts Tamplates & Infographics In Figma",
  },
  {
    id: 6,
    image: Img6,
    title: "Charts Tamplates & Infographics In Figma",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map(({ id, image, title }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-img">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a
                  href="https://githubcom"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href="https://dribbble.com/Alien_pixels"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
