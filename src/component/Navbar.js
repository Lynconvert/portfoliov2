
import "../App.css";


function Navbar() {
  return (

    <nav className="all-nav">
      <h1 className="logo">Portfolio</h1>
      <div className="nav-links">
        <ul>
          <li>
            <a className="link" href="/">Home</a>
          </li>
          <li>
            <a className="link" href="#about">About</a>
          </li>
          <li>
            <a className="link" href="#skills">Skills</a>
          </li>
          <li>
            <a className="link" href="#contact">Contact</a>
          </li>
          <li>
            <a className="link" href="#comment">Feedback</a>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
