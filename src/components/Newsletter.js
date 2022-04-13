import React from "react";

import styled from "styled-components";

import Title from "./Title";

const Newsletter = () => {
  return (
    <Container className="newsletter">
      <Title title="Newsletter" />
      <Description>SUBSCRIBE TO OFFERS & UPDATES</Description>
      <InputContainer>
        <Input placeholder="Enter Your Email" />
        <Button>SIGN UP</Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
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
  background-color: #0d8fff;
  color: white;
`;
