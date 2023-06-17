import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBox>
      Frequently asked questions
      <Question>Is there a free tier? </Question>
    </FooterBox>
  );
};

const FooterBox = styled.div`
  font-size: 2.5rem;
  margin: auto 1rem;
`;
const Question = styled.div`
  font-size: 1rem;
  margin: 1rem 0.5rem;
`;
export default Footer;
