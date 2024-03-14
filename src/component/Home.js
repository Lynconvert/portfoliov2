
import me from "../pic/me.png"


function Home() {
    return (
        <section id="profile">
            <div class="section__pic-container">
                <img className="Amm" src={me} alt="me" />
            </div>
            <div class="section__text">
                <p class="section__text__p1">Hello, I'm</p>
                <h1 class="title">Nutthapon Leekasame</h1>
                <p class="section__text__p2">Welcome to my website !!!</p>
            </div>
        </section>
    )
}

export default Home