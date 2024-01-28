import React from "react";
import styled from "styled-components";
import PlaneIcon from "./plane_icon.svg";
import ShipIcon from "./ship_icon.svg";
import VehicleIcon from "./vehicle_icon.svg";

const Sec1Container = styled.section`
  background-color: #f1f1f1;
  padding: 50px 20px; /* Adjust padding as needed for smaller screens */

  .sec1 {
    display: flex;
    flex-direction: column; /* Stack content vertically on smaller screens */
    align-items: center;
    // text-align: center;
  }

  .real {
    color: #f94d53;
  }

  h3 {
    font-size: 28px; /* Adjust font size as needed for smaller screens */
    margin-top: 10px; /* Add margin between paragraphs */
  }

  .global {
    color: #f94d53;
    font-size: 16px; /* Adjust font size as needed for smaller screens */
    font-weight: bold;
    margin-top: 10px; /* Add margin between paragraphs */
  }

  .sec2 {
    display: flex;
    flex-direction: column; /* Stack icons vertically on smaller screens */
    align-items: center;
    margin-top: 20px; /* Add margin between sections */
  }

  .sec2 div {
    background-color: #fff;
    padding: 100px;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px; /* Add margin between icon sections */
  }

  .sec2 img {
    width: 100%; /* Make icons take full width */
    max-width: 100px; /* Limit max-width as needed */
  }

  @media screen and (min-width: 768px) {
    padding: 50px 100px;
    .sec1 {
      flex-direction: row; /* Change back to row on larger screens */
    }

    .sec1 > div {
      flex: 1;
      margin-right: 20px; /* Add margin between text sections on larger screens */
      text-align: left; /* Align text to the left on larger screens */
    }

    .sec2 {
      flex-direction: row; /* Change back to row on larger screens */
      justify-content: space-around;
    }

    .sec2 div {
      margin-top: 0; /* Remove margin between icon sections on larger screens */
    }
  }
`;

const Section1 = () => {
  return (
    <Sec1Container>
      <div className="sec1">
        <div>
          <p className="real">Real Solutions, Real Fast!</p>
          <h3>Delivering The Best Global Logistics Solutions.</h3>
        </div>
        <div>
          <p className="global">
            Our global logistics expertise, advanced supply chain technology &
            customized logistics solutions will help you analyze, develop and
            implement successful supply chain management strategies.
          </p>
        </div>
      </div>
      <div className="sec2">
        <div>
          <img src={PlaneIcon} alt="Plane Icon" />
        </div>
        <div>
          <img src={ShipIcon} alt="Ship Icon" />
        </div>
        <div>
          <img src={VehicleIcon} alt="Vehicle Icon" />
        </div>
      </div>
    </Sec1Container>
  );
};

export default Section1;
