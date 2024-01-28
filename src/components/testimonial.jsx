import React from "react";
import styled from "styled-components";
import TesImg from "./testimonial1.png";
import TesImg2 from "./testimonial2.png";

const TesContainer = styled.section`
  background-color: #f85f64;
  color: #fff;
  text-align: center;
  padding: 40px 20px; /* Adjust padding as needed for smaller screens */

  h2 {
    font-size: 20px; /* Adjust font size as needed for smaller screens */
    margin-bottom: 10px;
  }

  h1 {
    font-size: 32px; /* Adjust font size as needed for smaller screens */
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px; /* Adjust font size as needed for smaller screens */
    margin-bottom: 20px;
  }

  div {
    display: flex;
    flex-direction: column; /* Stack images vertically on smaller screens */
    align-items: center;
    gap: 20px;
  }

  div > div {
    flex: 1;
    max-width: 100%; /* Adjust max-width as needed for smaller screens */
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  div img {
    width: 100%;
    height: auto; /* Maintain image aspect ratio */
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    div {
      display: flex; /* Fix typo here */
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 0 100px;
    }

    h2 {
      font-size: 24px; /* Adjust font size back to the original size on larger screens */
    }

    h1 {
      font-size: 40px; /* Adjust font size back to the original size on larger screens */
    }

    p {
      font-size: 18px; /* Adjust font size back to the original size on larger screens */
    }
  }
`;

const Testimonial = () => {
  return (
    <TesContainer>
      <h2>What People Say!</h2>
      <h1>Testimonials</h1>
      <p>
        See what our customers have to say about our products, people and
        services. We are very proud of you all!
      </p>

      <div>
        <div>
          <img src={TesImg} alt="Testimonial 1" />
        </div>
        <div>
          <img src={TesImg2} alt="Testimonial 2" />
        </div>
      </div>
    </TesContainer>
  );
};

export default Testimonial;
