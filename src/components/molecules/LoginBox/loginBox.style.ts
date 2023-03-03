import styled from "styled-components";

export const LoginBox = styled.div`
  display: flex;
  width: 270px;
  max-height: 490px;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  margin-top: 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DividingLine = styled.p`
  margin: 30px 0;
  &::before {
    content: "";
    display: block;
    width: 120px;
    height: 0.5px;
    background: #ddd;
    position: absolute;
    left: 0;
    bottom: 67px;
  }

  &::after {
    content: "";
    display: block;
    width: 120px;
    height: 0.5px;
    background: #ddd;
    position: absolute;
    right: 0;
    bottom: 67px;
  }
`;
