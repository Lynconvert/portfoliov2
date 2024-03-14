
import facebook from '../pic/facebook.png'
import ig from '../pic/ig.png'
import gmail from '../pic/gmail.png'

function contact() {
  return (
    <section id="contact">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">My contact</h1>
      <div class="section-container-skill">
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">

              <a href="https://www.facebook.com/nutthapon.am/" target="_blank" rel="noreferrer" > <img className="img" src={facebook} alt="facebook" /> </a>

              <a href="https://www.instagram.com/amntp_/?hl=th" target="_blank" rel="noreferrer"> <img className="img" src={ig} alt='ig' /></a>

              <a href="https://mail.google.com/mail/u/0/?ui=2&tf=cm&fs=1&to=nutthapon005@gmail.com" target="_blank" rel="noreferrer"><img className="img" src={gmail} alt='gmail' /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default contact;