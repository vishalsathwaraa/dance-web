import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const SocialLink = [
    {
      url: "https://www.youtube.com/channel/UC1Bzw_84AwYJLUXpNkUpb9g",
      icon: <FaYoutube />,
    },
    { url: "https://www.instagram.com/vishalsathwaraa", icon: <FaInstagram /> },
    {
      url: "https://api.whatsapp.com/send?phone=919898571874&text=Hi%20There!",
      icon: <FaWhatsapp />,
    },
    { url: "https://telegram.me/vsl_x99?start=hello", icon: <FaTelegram /> },
    {
      url: "https://www.linkedin.com/in/vishal-sathwara-b36460207/",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <footer style={{ backgroundColor: "#1e1e1e" }}>
      {/* SOCIAL ICONS */}
      <div className="flex bg-footer-bg justify-between items-center p-4 px-32 w-full sm:flex-col">
        <span className="text-red text-white sm:w-max sm:mt-2">
          Get Connected With Us On Social Networks!
        </span>
        <span className="text-white cursor-pointer flex sm:mt-6 sm:pb-3 sm:w-max">
          {SocialLink.map(({ url, icon }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              className="ml-5 text-lg hover-animate"
              rel="noreferrer"
            >
              {icon}
            </a>
          ))}
        </span>
      </div>
      <div className="flex flex-wrap  justify-around items-center text-white py-10 sm:flex-col">
        <div className="sm:pb-6">
          <p className="font-bold uppercase">Useful Links</p>
          <div className="flex mt-3 text-left leading-8">
            <Link to="/" className="hover-animate">
              <span>Home</span>
            </Link>
            &nbsp; |
            <Link to="/about" className="hover-animate">
              <span className="ml-2 ">About</span>
            </Link>{" "}
            &nbsp; |
            <Link to="/musicplayer" className="hover-animate">
              <span className="ml-2">Music</span>
            </Link>
            &nbsp; |
            <Link to="/videos" className="hover-animate">
              <span className="ml-2">Videos</span>
            </Link>
          </div>
        </div>
        <div className="sm:pb-6">
          <p className="font-bold uppercase">Email</p>
          <div className="flex mt-3 sm:mt-1 text-left leading-8 ">
            <div className="flex leading-8">
              <a href="mailto:vishalsathwara999@gmail.com" className="flex items-center hover-animate">
                <FaEnvelope />
                <span className="ml-3 tracking-wider">
                  vishalsathwara999@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold uppercase">Contact</p>
          <div className="flex leading-8">
            <a
              href="tel:+919898571874"
              className="flex items-center mt-3 sm:mt-1 hover-animate"
            >
              <FaPhone />
              <span className="ml-3 tracking-wider">+91 9898571874</span>
            </a>
          </div>
        </div>
      </div>
      <p className="w-full py-2 flex bg-yellow-700 text-white justify-center items-center">
        <span> &copy; 2021 Vishal Sathwara</span>
      </p>
    </footer>
  );
};

export default Footer;
