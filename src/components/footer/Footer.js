import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            height="75px"
            alt="logo"
          ></img>
          <br></br>
          <input type="text" />
        </div>
        <div className="child-flex">
          <div className="footer-first">
            <h4>THE BASICS</h4>
            <h5>About TMDB</h5>
            <h5>Contact Us</h5>
            <h5>Support Forums</h5>
            <h5>API</h5>
            <h5>System Status</h5>
          </div>
          <div>
            <h4>GET INVOLVED</h4>
            <h5>Contribution Bible</h5>
            <h5>Add New Movie</h5>
            <h5>Add New Tv Show</h5>
          </div>
          <div>
            <h4>COMMUNITY</h4>
            <h5>Guidelines</h5>
            <h5>Discussions</h5>
            <h5>Leaderboard</h5>
          </div>
          <div>
            <h4>LEGAL</h4>
            <h5>Terms of Use</h5>
            <h5>API Terms of Use</h5>
            <h5>Privacy Policy</h5>
            <h5>DMCA Policy</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
