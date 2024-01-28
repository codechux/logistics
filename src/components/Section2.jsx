import React from "react";
import styled from "styled-components";
import Delivered from "./deliveredGoods.png";

const Sec2Container = styled.section`
  display: flex;
  flex-direction: column; /* Stack content vertically on smaller screens */
  align-items: center;
  padding: 40px 20px; /* Adjust padding as needed */
  background-color: #fff;
  color: #333;

  div {
    flex: 1;
    width: 100%;
    padding: 20px;
    max-width: 600px; /* Adjust max-width as needed */

    h3 {
      font-size: 24px; /* Adjust font size as needed for smaller screens */
      margin-bottom: 15px;
    }

    p {
      font-size: 16px; /* Adjust font size as needed for smaller screens */
      line-height: 1.6;
      margin-bottom: 15px;
    }

    ul {
      font-size: 14px; /* Adjust font size as needed for smaller screens */
      line-height: 1.6;
    }

    li {
      padding-left: 15px;
      margin-bottom: 10px;

      &:before {
        content: "\\2022";
        position: absolute;
        left: 0;
        color: #f94d53;
      }
    }
  }

  img {
    width: 100%;
    max-width: 600px; /* Adjust max-width as needed */
    border-radius: 10px; /* Add border-radius to the image */
    margin-top: 20px; /* Add some space between the text and the image */
  }

  @media screen and (min-width: 768px) {
    flex-direction: row; /* Change back to row on larger screens */

    div {
      padding: 50px;
    }
  }
`;

const Section2 = () => {
  return (
    <Sec2Container>
      <div>
        <h3>Competitive Advantages For Largest Companies!</h3>
        <p>
          Providing the best transport and shipping services available all over
          the world. Our skilled personnel, utilizing the latest communications,
          tracking and processing software, combined with decades of experience.
        </p>
        <ul>
          <li>Transparent Pricing, Environmental sensitivity</li>
          <li>24/7 Hours Support, Professional and Qualified</li>
          <li>Real Time Tracking, Fast & Efficient Delivery</li>
          <li>Warehouse Storage, Personalized solutions</li>
        </ul>
      </div>
      <img src={Delivered} alt="" />
    </Sec2Container>
  );
};

export default Section2;
