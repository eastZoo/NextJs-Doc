import styled from "styled-components";

export const LoginBox = styled.div`
  display: flex;
  width: 560px;
  max-height: 490px;
  align-items: center;
  flex-direction: column;

  position: relative;
`;

export const H1 = styled.h1`
  font-size: 48px;
`;

export const P = styled.p`
  font-size: 18px;
`;
export const SocialLoginBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DividingLine = styled.p`
  margin: 30px 0;
  font-size: 18px;
  &::before {
    content: "";
    display: block;
    width: 235px;
    height: 0.5px;
    background: #ddd;
    position: absolute;
    left: 0;
    bottom: 100px;
  }

  &::after {
    content: "";
    display: block;
    width: 235px;
    height: 0.5px;
    background: #ddd;
    position: absolute;
    right: 0;
    bottom: 100px;
  }
`;
