import React from "react";
import styled from "styled-components";

const Tracker = styled.section`
  display: flex;
  flex-direction: column; /* Change to column on smaller screens */
  background-color: #f1f1f1;
  padding: 30px; /* Adjust padding as needed */

  .transport {
    padding: 0 20px; /* Adjust padding as needed */
  }

  .transport li {
    list-style: none;
    padding: 14px 24px;
    background-color: #fff;
    margin: 10px 0;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
  }

  .transport li:hover {
    background-color: #f94d53;
    color: #fff;
    font-weight: bold;
  }

  .shipment {
    text-align: center;
    width: 100%; /* Adjust width as needed */
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 15px;
  }

  .shipment input {
    width: 100%;
    height: 60px; /* Adjust height as needed */
    border: 1px solid #000;
    border-radius: 10px;
    outline: none;
    background-color: transparent;
    font-size: 18px; /* Adjust font size as needed */
  }

  .shipment input::placeholder {
    font-size: 18px; /* Adjust font size as needed */
    padding: 10px;
  }

  .shipment button {
    height: 60px; /* Adjust height as needed */
    cursor: pointer;
    width: 100%;
    outline: none;
    border-radius: 10px;
    background-color: #000;
    font-weight: bold;
    font-size: 16px; /* Adjust font size as needed */
    color: white;
    border: none;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row; /* Change back to row on larger screens */
    .transport {
      padding: 0 50px;
    }
  }
`;

const Track = () => {
  return (
    <Tracker>
      <div className="transport">
        <p>Transport services</p>

        <li>Ocean Freight</li>
        <li>Warehousing</li>
        <li>Air Freight</li>
        <li>Road Freight</li>
        <li>Supply Chain</li>
        <li>Package Forwarding</li>
      </div>

      <div className="shipment">
        <h1>Track Your Shipment</h1>
        <input type="text" placeholder="Enter your tracking number" />
        <button>Track Shipment</button>
      </div>
    </Tracker>
  );
};

export default Track;
