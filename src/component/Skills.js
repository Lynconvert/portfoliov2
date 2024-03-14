
import javascript from "../pic/javascript.png";
import html from "../pic/html.png";
import css from "../pic/css.png";
import react from "../pic/react.png";

function skills() {
  return (
    <section id="skills">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">My Skills</h1>
      <div class="section-container-skill">
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <br />
              <img className="img" src={javascript} alt="javascript" />

              <img className="img" src={html} alt="html" />

              <img className="img" src={css} alt="css" />

              <img className="img" src={react} alt="react" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default skills;
