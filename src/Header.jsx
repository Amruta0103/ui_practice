import React from "react";
import styled from "styled-components";

const OptionsArray = [
  {
    name: "Home",
    selected: true
  },
  {
    name: "Services",
    selected: false
  },
  {
    name: "Pricing",
    selected: false
  },
  {
    name: "About",
    selected: false
  },
  {
    name: "Blog",
    selected: false
  },
  {
    name: "Chat",
    selected: false
  }
];
const Header = () => {
  return (
    <HeaderBox>
      <Logo>Noah</Logo>
      <OptionsBox>
        {OptionsArray.map((i) => {
          return i.selected === true ? (
            <SelectedOption>{i.name}</SelectedOption>
          ) : (
            <Options>{i.name}</Options>
          );
        })}
      </OptionsBox>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0.5rem;
`;
const Logo = styled.div`
  padding: 0.5rem;
`;
const OptionsBox = styled.div`
  display: flex;
`;
const Options = styled.div`
  border: 1px solid black;
  padding: 0.7rem;
  border-radius: 3rem;
  font-size: 0.7rem;
  margin: auto 0.5rem;
`;
const SelectedOption = styled(Options)`
  background: black;
  color: white;
`;
export default Header;
