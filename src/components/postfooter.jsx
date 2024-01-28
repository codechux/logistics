import React from "react";
import styled from "styled-components";

const PostFooterContainer = styled.footer`
  //   background-color: #f1f1f1;
  color: #333;
  //   padding: 20px;
  text-align: center;
`;

const PostFooter = () => {
  return (
    <PostFooterContainer>
      <p>Gateway logistic © 2023, All copyright reserved.</p>
    </PostFooterContainer>
  );
};

export default PostFooter;
