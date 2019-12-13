import React from "react";
import styled from "styled-components";
import { RandomNameInterface } from "../types/interfaces";

const Button = styled.button`
  background: #3498db;
  color: #fff;
  height: 45px;
  font-size: 14px;
  border-none;
  margin-bottom: 12px;
  outline: none !important;
  cursor: pointer;
`;

const RandomSelectButton = (props: RandomNameInterface) => {
    return (
        <Button onClick={() => props.getRandomName()}> Get random name</Button>
    );
};

export default RandomSelectButton;
