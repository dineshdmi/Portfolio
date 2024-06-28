import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Nashik, Maharashtra.</p>
              <p>India.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +91-9552-070-365
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              ddm062001@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Dinesh.</h4>
          <p>
            This is Dinesh Mahajan. Frontend Developer Trainee at Sidhman Technologies. I
            enjoy Developing new Projects and design challenges
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
