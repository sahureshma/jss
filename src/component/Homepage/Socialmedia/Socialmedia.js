import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Socialmedia.css";

const SocialMediaIcons = () => {
  const socialMediaLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: <FaFacebook />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/",
      icon: <FaTwitter />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: <FaInstagram />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <div className="social-media-icons-container">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-icon-link"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;