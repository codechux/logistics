import React from "react";
import styled from "styled-components";
import Airplane from "./airplane.png";

const ServicesContainer = styled.section`
  background-color: #f94d53;
  padding: 50px; /* Adjust padding as needed */

  .title {
    text-align: center;
    padding: 20px 0;
  }

  .airplane {
    display: flex;
    flex-direction: column; /* Stack content vertically on smaller screens */
    gap: 20px;
  }

  .img {
    width: 100%; /* Make image take full width on smaller screens */
    max-width: 400px; /* Limit image width for larger screens */
    margin: 0 auto; /* Center image horizontally */
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain image aspect ratio */
    border-radius: 10px; /* Add border-radius to image */
  }

  .airplane p {
    width: 100%;
    text-align: justify; /* Justify text on larger screens */
  }

  @media screen and (min-width: 768px) {
    .airplane {
      flex-direction: row; /* Change back to row on larger screens */
      justify-content: space-between;
      align-items: center;
    }

    .img {
      width: 48%; /* Adjust as needed */
      max-width: none;
    }

    .img:first-child,
    .img:last-child {
      margin: 0; /* Remove margin for the first and last images */
    }

    .airplane p {
      text-align: left; /* Align text to the left on larger screens */
    }
  }
`;
const Services = () => {
  return (
    <ServicesContainer>
      <h1 className="title">Our Services</h1>
      <div className="airplane">
        <div className="img">
          <img src={Airplane} alt="" />
        </div>

        <div>
          <h1>Airplane</h1>
          <p>
            When you need your shipment at any destination of your choice in the
            shortest possible time; then be rest assured we will fly it for you.
            Forget about paying outrageous shipping fees as we offer fast,
            affordable and stress shipping and free package forwarding services.
            Still thinking? Don't. Just send your next package from Amazon,
            Ebay, Apple ...etc and we will deliver right to your doorstep
            anywhere within out reach. With daily and weekly cargo flights, you
            can be rest assured that we will get your goods to their destination
            in time.
          </p>
        </div>
      </div>

      <div className="airplane">
        <div>
          <h1>Airplane</h1>
          <p>
            When you need your shipment at any destination of your choice in the
            shortest possible time; then be rest assured we will fly it for you.
            Forget about paying outrageous shipping fees as we offer fast,
            affordable and stress shipping and free package forwarding services.
            Still thinking? Don't. Just send your next package from Amazon,
            Ebay, Apple ...etc and we will deliver right to your doorstep
            anywhere within out reach. With daily and weekly cargo flights, you
            can be rest assured that we will get your goods to their destination
            in time.
          </p>
        </div>
        <div className="img">
          <img src={Airplane} alt="" />
        </div>
      </div>

      <div className="airplane">
        <div className="img">
          <img src={Airplane} alt="" />
        </div>

        <div>
          <h1>Airplane</h1>
          <p>
            When you need your shipment at any destination of your choice in the
            shortest possible time; then be rest assured we will fly it for you.
            Forget about paying outrageous shipping fees as we offer fast,
            affordable and stress shipping and free package forwarding services.
            Still thinking? Don't. Just send your next package from Amazon,
            Ebay, Apple ...etc and we will deliver right to your doorstep
            anywhere within out reach. With daily and weekly cargo flights, you
            can be rest assured that we will get your goods to their destination
            in time.
          </p>
        </div>
      </div>

      <div className="airplane">
        <div>
          <h1>Airplane</h1>
          <p>
            When you need your shipment at any destination of your choice in the
            shortest possible time; then be rest assured we will fly it for you.
            Forget about paying outrageous shipping fees as we offer fast,
            affordable and stress shipping and free package forwarding services.
            Still thinking? Don't. Just send your next package from Amazon,
            Ebay, Apple ...etc and we will deliver right to your doorstep
            anywhere within out reach. With daily and weekly cargo flights, you
            can be rest assured that we will get your goods to their destination
            in time.
          </p>
        </div>
        <div className="img">
          <img src={Airplane} alt="" />
        </div>
      </div>
    </ServicesContainer>
  );
};

export default Services;
