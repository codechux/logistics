import React from "react";
import styled from "styled-components";
import BackGroundImg from "./HeroBack.png";

const HeroSection = styled.section`
  height: 100vh;
  background-image: url(${BackGroundImg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
    max-width: 90%; /* Adjust as needed */
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 56px;
      line-height: 72px;
    }
  }

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    max-width: 90%; /* Adjust as needed */

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <h1>Fast, Certified & Flexible Solutions To Shipping Of Goods</h1>
      <p>
        Through integrated supply chain solutions, our logistics services
        sustainable competitive advantages to some of the largest companies all
        over the world.
      </p>
    </HeroSection>
  );
};

export default Hero;
