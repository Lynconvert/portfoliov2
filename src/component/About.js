
import me from "../pic/me.png"
import wk from "../pic/wk.jpg"
import rangsit from "../pic/rangsit.png"

function About() {
    return (
        <section id="about">

            <h1 class="title">About Me</h1>
            <div class="section-container">
                <div class="section__pic-container">
                    <img className="Amm" src={me} alt="me" />
                </div>
                <div class="about-details-container">
                    <div class="about-containers">
                        <div class="details-container-about">
                            <h3>Education</h3>

                            <img className="img-about" src={wk} alt="wk" />
                            <p />WK. High School
                            <img className="img-about" src={rangsit} alt="rangsit" />
                            <p /> RSU. Bachelors Degree

                        </div>
                    </div>
                    <div class="text-container">
                        <p>
                            I am 21 years old this year. I was born in HuaHin and studied at Wang Klai Kang won School from kindergarten to high school.<br />
                            I came to Rangsit University to become a website developer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
