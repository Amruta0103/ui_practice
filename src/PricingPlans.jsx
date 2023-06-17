import styled from "styled-components";

const PriceList = [
  {
    tag: "Brand Identity",
    price: "2,400"
  },
  {
    tag: "Marketing Design",
    price: "4,700"
  },
  {
    tag: "Product Design",
    price: "8,000"
  },
  {
    tag: "Webflow Development",
    price: "9,000"
  }
];
const featList = [
  "Exploration",
  "UX Research",
  "User Persona",
  "Design System",
  "UI MockUps",
  "Prototype"
];
const PricingPlans = () => {
  return (
    <PricingBox>
      {PriceList.map((i) => {
        return (
          <PricingCard key={i.price}>
            <Tag>{i.tag}</Tag>
            <Price>${i.price}</Price>
            <hr />
            <FeatsBox>
              {featList.map((i) => {
                return <FeatsItem key={i}>✓{i}</FeatsItem>;
              })}
            </FeatsBox>
            <Button>Get Started </Button>
          </PricingCard>
        );
      })}
    </PricingBox>
  );
};

const PricingBox = styled.div`
  margin: 1rem;
  display: flex;
  height: 45%;
  margin: 0.5rem auto;
`;
const PricingCard = styled.div`
  border: 1px solid black;
  border-radius: 2rem;
  width: 20%;
  height: 90%;
  padding: 0.5rem;
  margin: 0 0.5rem;
`;
const Tag = styled.div`
  background: #e1e1e1;
  border-radius: 2rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 0.5rem;
  width: fit-content;
`;
const Price = styled.div`
  font-size: 1.5rem;
  margin: auto 1rem;
`;
const FeatsBox = styled.div`
  list-style: none;
`;
const FeatsItem = styled.div`
  font-size: 0.8rem;
`;
const Button = styled.button`
  border-radius: 2rem;
  width: 100%;
  background: black;
  color: white;
  margin: 0.5rem auto;
`;
export default PricingPlans;
