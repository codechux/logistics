import React from "react";
import styled from "styled-components";

const ContactContainer = styled.section`
  background-color: #f9f9f9;
  padding: 80px 20px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #25d366;
  color: #fff;
  font-size: 18px;
  border-radius: 10px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #128c7e;
  }
`;

const ContactSection = () => {
  const phoneNumber = "15184145844";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactButton
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact via WhatsApp
      </ContactButton>
    </ContactContainer>
  );
};

export default ContactSection;
