import React from "react";
import styled from "styled-components";

const PreContainer = styled.div`
  display: flex;
  flex-direction: column; /* Change to column on smaller screens */
  align-items: center;
  background-color: #241623;
  color: #ffffff;
  padding: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row; /* Change back to row on larger screens */
    justify-content: space-between;
    padding: 10px 50px;
  }
`;

const LoginRegister = styled.div`
  display: flex;
  //   flex-direction: column; /* Change to column on smaller screens */
  align-items: center;
  gap: 10px;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    flex-direction: row; /* Change back to row on larger screens */
  }
`;

const Register = styled.div`
  color: #f94d53;
`;

const Line = styled.div`
  height: 20px; /* Adjust the height as needed */
  border-left: 1px solid #fff;
  margin: 5px 0; /* Adjust margin for spacing on smaller screens */

  @media screen and (min-width: 768px) {
    margin: 0; /* Reset margin on larger screens */
  }
`;

const Preheader = () => {
  return (
    <PreContainer>
      <div className="">Welcome to Gateway Logistics</div>
      <LoginRegister>
        <div className="">LOGIN</div>
        <Line className=""></Line>
        <Register>REGISTER</Register>
      </LoginRegister>
    </PreContainer>
  );
};

export default Preheader;
