import Header from "./Header";
import styled from "styled-components";
import "./styles.css";
import Title from "./Title";
import Footer from "./Footer";
import PricingPlans from "./PricingPlans";

export default function App() {
  return (
    <div className="App">
      <AppBox>
        <Header />
        <Title />
        <PricingPlans />
        <Footer />
      </AppBox>
    </div>
  );
}

const AppBox = styled.div`
  margin: 2rem auto;
  background: white;
  height: 90vh;
  width: 90%;
  text-align: left;
`;
