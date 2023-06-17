import styled from "styled-components";
import React from "react";

const Title = () => {
  return (
    <TitleBox>
      Fixed Prices based on different servises and requirements
    </TitleBox>
  );
};
const TitleBox = styled.div`
  margin: 2rem 1rem;
  font-size: 2.5rem;
  width: 70%;
`;

export default Title;
