import React from "react";
import styled from "styled-components";
import Logo from "./Logo 4.svg";
import Arrow from "./arrow-right.svg";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 10px 50px;
  }
`;

const Track = styled.div`
  padding: 14px 24px;
  background-color: #f85f64;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="" />
      </div>
      <Track>
        Track Shipment <img src={Arrow} alt="" />
      </Track>
    </HeaderContainer>
  );
};

export default Header;
