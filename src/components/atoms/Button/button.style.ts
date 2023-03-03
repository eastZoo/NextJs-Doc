import styled from "styled-components";

interface ButtonProps {
  width: string;
  height: string;
  backgroundColor?: string;
  color: string;
  border: string;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  max-width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) =>
    props.backgroundColor === "clear" ? "white" : props.backgroundColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  font-weight: 900;
  border-radius: 5px;
  margin-top: 5px;
  font-size: 18px;
  cursor: pointer;
`;
