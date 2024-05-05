import { useState } from "react";
import { Send } from "@material-ui/icons";
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #ffd3e5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 104px;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "48px" })};
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })};
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })};
  transition: border-color 0.3s ease;

  &:focus-within {
    border-color: teal;
  }
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  outline: none;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #208080;
  }

  &:active {
    animation: fly 1s ease;
  }

  @keyframes fly {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-10px) rotate(-20deg);
    }
    100% {
      transform: translateX(-1000px) rotate(-360deg);
    }
  }
`;

const Newsletter = () => {
  const [isFlying, setIsFlying] = useState(false);

  const handleButtonClick = () => {
    setIsFlying(true);
    setTimeout(() => {
      setIsFlying(false);
    }, 1000);
  };

  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get updates from your favorite plug!</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button onClick={handleButtonClick} flying={isFlying}>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
