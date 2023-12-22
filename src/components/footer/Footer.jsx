import logo from "../../assets/images/demo_logo.png";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <img src={logo} alt="" />
        <h1 className="text-lg mt-4">
          Easy to use Task management solution which <br /> is both Powerful and
          intuitive.
        </h1>
      </aside>
      <nav>
        <header className="footer-title">Pages</header>
        <p className="link link-hover"><Link to={"/blog"}>blog</Link></p>
        <p className="link link-hover"><Link to={"/pricing"}>Pricing</Link></p>
        <p className="link link-hover"><Link to={"/blog"}>blog</Link></p>
        <p className="link link-hover"><Link to={"/chooseMe"}>Choose Me</Link></p>
        <p className="link link-hover"><Link to={"/register"}>register</Link></p>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">social media</header>
        <a href="https://google.com" className="link link-hover">Google</a>
        <a href="https://www.linkedin.com" className="link link-hover">linkedin</a>
        <a href="https://www.instagram.com" className="link link-hover">instagram</a>
      </nav>
    </footer>
  );
};

export default Footer;
