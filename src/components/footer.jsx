import React from "react";
import styled from "styled-components";
import Logo from "./Logo_white.svg";

import FacebookIcon from "./facebook-icon.svg";
import InstagramIcon from "./instagram-icon.svg";
import TwitterIcon from "./twitter-icon.svg";
import LinkedInIcon from "./linkedin-icon.svg";

const FooterContainer = styled.footer`
  background-color: #241623;
  color: #fff;
  padding: 40px 20px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLink = styled.a`
  display: inline-block;
  margin: 0 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2); /* Adjust scale factor for hover effect */
  }
`;

const Column = styled.div`
  flex: 1;
  max-width: 300px;
  margin-bottom: 20px;
  padding: 0 50px;

  h3 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #f94d53;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Column>
          <img src={Logo} alt="" />
          <SocialLinksContainer>
            <SocialLink
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Facebook" />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram" />
            </SocialLink>
            <SocialLink
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterIcon} alt="Twitter" />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedIn" />
            </SocialLink>
          </SocialLinksContainer>
        </Column>
        <Column>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </Column>
        <Column>
          <h3>Contact Us</h3>
          <ul>
            <li>33 Hollander St Boston</li>
            <li>Massachusetts(MA), 02121</li>
            <li>Email: info@example.com</li>
            <li>Phone: +15184145844</li>
          </ul>
        </Column>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
